package com.skillxchange.backend.service.impl;

import com.skillxchange.backend.dto.request.LoginRequest;
import com.skillxchange.backend.dto.request.SignupRequest;
import com.skillxchange.backend.dto.response.LoginResponse;
import com.skillxchange.backend.dto.response.SignupResponse;
import com.skillxchange.backend.model.User;
import com.skillxchange.backend.repository.UserRepository;
import com.skillxchange.backend.security.JwtUtil;
import com.skillxchange.backend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    @Override
    public SignupResponse registerUser(SignupRequest request){

        if (userRepository.existsByEmail(request.getEmail())){
            throw new RuntimeException("Email Already Registered");
        }

        if (!request.getPassword().equals(request.getConfirmPassword())){
            throw new RuntimeException("Password and Confirm Password do not match");
        }

        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .active(true)
                .build();

        userRepository.save(user);

        return new SignupResponse("User Registered Successfully");
    }

    @Override
    public LoginResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid email or password"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }

        String token = jwtUtil.generateToken(user.getEmail());

        return new LoginResponse(
                token,
                user.getId(),
                user.getName()
        );
    }

}
