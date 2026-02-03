package com.skillxchange.backend.controller;

import com.skillxchange.backend.dto.request.*;
import com.skillxchange.backend.dto.response.ApiResponse;
import com.skillxchange.backend.dto.response.LoginResponse;
import com.skillxchange.backend.dto.response.SignupResponse;
import com.skillxchange.backend.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<SignupResponse> register(
            @Valid @RequestBody SignupRequest request) {

        SignupResponse response = authService.registerUser(request);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(
            @Valid @RequestBody LoginRequest request) {

        LoginResponse response = authService.login(request);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/forgot-password")
    public  ResponseEntity<ApiResponse> forgotPassword(@RequestBody ForgotPasswordRequest request){
        ApiResponse response = authService.sendOtp(request);

        return  ResponseEntity.ok(response);
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<ApiResponse> verifyOtp(
            @RequestBody VerifyOtpRequest request) {

        ApiResponse response = authService.verifyOtp(request);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/reset-password")
    public ResponseEntity<ApiResponse> resetPassword(
            @RequestBody ResetPasswordRequest request) {

        ApiResponse response = authService.resetPassword(request);
        return ResponseEntity.ok(response);
    }
}
