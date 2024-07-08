package com.java5.backendapi.data.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.java5.backendapi.data.entity.RoleE;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private int userId;
    private String fullName;
    private int age;
    private String address;
    private String email;
    private String password;
    private int role;

    @JsonIgnore
    private boolean isNewUser;

    public boolean isNewUser() {
        return userId==0;
    }

    @Override
    public String toString() {
        return "UserDto{" +
                "userId=" + userId +
                ", fullName='" + fullName + '\'' +
                ", age=" + age +
                ", address='" + address + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", role=" + role +
                ", isNewUser=" + isNewUser +
                '}';
    }
}
