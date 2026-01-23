package com.skillxchange.backend.service;

import com.skillxchange.backend.dto.request.LoginRequest;
import com.skillxchange.backend.dto.request.SignupRequest;
import com.skillxchange.backend.dto.response.LoginResponse;
import com.skillxchange.backend.dto.response.SignupResponse;

public interface AuthService {

    SignupResponse registerUser(SignupRequest request);
    LoginResponse login(LoginRequest request);


}
