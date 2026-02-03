package com.skillxchange.backend.service;

import com.skillxchange.backend.dto.request.*;
import com.skillxchange.backend.dto.response.ApiResponse;
import com.skillxchange.backend.dto.response.LoginResponse;
import com.skillxchange.backend.dto.response.SignupResponse;

public interface AuthService {

    SignupResponse registerUser(SignupRequest request);
    LoginResponse login(LoginRequest request);
    ApiResponse sendOtp(ForgotPasswordRequest request);
    ApiResponse verifyOtp(VerifyOtpRequest request);
    ApiResponse resetPassword(ResetPasswordRequest request);

}
