package com.agency.AgencyManagementSystem.service;

import java.util.List;

import com.agency.AgencyManagementSystem.model.User;

public interface UserService {
	public User save(User user);
	public User findByUser(String email,String password);
    public List<User> findAll();
    public User forgetPassword(String email,String password);
    public User findbyemailid(String email);
}
