package com.skillxchange.backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LoginResponse {

    private boolean success;
    private String message;

    private String token;
    private Long userId;
    private String name;
}
