package com.skillxchange.backend.service.impl;

import com.skillxchange.backend.dto.request.*;
import com.skillxchange.backend.dto.response.ApiResponse;
import com.skillxchange.backend.dto.response.LoginResponse;
import com.skillxchange.backend.dto.response.SignupResponse;
import com.skillxchange.backend.model.User;
import com.skillxchange.backend.repository.UserRepository;
import com.skillxchange.backend.security.JwtUtil;
import com.skillxchange.backend.service.AuthService;
import com.skillxchange.backend.service.MailService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    private final MailService mailService;

    @Override
    public SignupResponse registerUser(SignupRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            return new SignupResponse(false, "Email already registered");
        }

        if (!request.getPassword().equals(request.getConfirmPassword())) {
            return new SignupResponse(false, "Password and Confirm Password do not match");
        }

        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .active(true)
                .build();

        userRepository.save(user);

        return new SignupResponse(true, "User Registered Successfully");
    }

    @Override
    public LoginResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElse(null);

        if (user == null) {
            return new LoginResponse(
                    false,
                    "Invalid email or password",
                    null,
                    null,
                    null
            );
        }

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            return new LoginResponse(
                    false,
                    "Invalid email or password",
                    null,
                    null,
                    null
            );
        }

        String token = jwtUtil.generateToken(user.getEmail());

        return new LoginResponse(
                true,
                "Login successful",
                token,
                user.getId(),
                user.getName()
        );
    }


    @Override
    public ApiResponse sendOtp(ForgotPasswordRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElse(null);

        if (user == null) {
            return new ApiResponse(false, "Email not registered");
        }

        String otp = String.valueOf(new Random().nextInt(900000) + 100000);

        user.setResetOtp(otp);
        user.setOtpExpiry(LocalDateTime.now().plusMinutes(5));

        userRepository.save(user);

        mailService.sendOtpEmail(user.getEmail(), otp);

        return new ApiResponse(true, "OTP sent to your email");
    }

    @Override
    public ApiResponse verifyOtp(VerifyOtpRequest request) {

        Optional<User> optionalUser = userRepository.findByEmail(request.getEmail());

        if (optionalUser.isEmpty()) {
            return new ApiResponse(false, "Invalid email");
        }

        User user = optionalUser.get();

        if (user.getResetOtp() == null) {
            return new ApiResponse(false, "OTP not requested");
        }

        if (!user.getResetOtp().equals(request.getOtp())) {
            return new ApiResponse(false, "Invalid OTP");
        }

        if (user.getOtpExpiry().isBefore(LocalDateTime.now())) {
            return new ApiResponse(false, "OTP expired");
        }

        return new ApiResponse(true, "OTP verified successfully");
    }

    @Override
    public ApiResponse resetPassword(ResetPasswordRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid email"));


        if (!request.getNewPassword().equals(request.getConfirmPassword())) {
            return new ApiResponse(false, "Password and Confirm Password do not match");
        }


        if (!request.getNewPassword()
                .matches("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$")) {
            return new ApiResponse(false,
                    "Password must contain 1 uppercase, 1 lowercase, 1 number, 1 special character and be at least 8 characters long");
        }


        user.setPassword(passwordEncoder.encode(request.getNewPassword()));

        user.setResetOtp(null);
        user.setOtpExpiry(null);

        userRepository.save(user);

        return new ApiResponse(true, "Password reset successfully. Please login again.");
    }


}
