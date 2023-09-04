package com.agency.AgencyManagementSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.agency.AgencyManagementSystem.model.User;
import com.agency.AgencyManagementSystem.repository.UserRepository;

import jakarta.transaction.Transactional;
@Service
public class UserServiceImpl implements UserService{
	@Autowired
    private UserRepository userRepository;
   
	
	@Override
	@Transactional
	public User save(User user) {
		return userRepository.save(user);
		
	}
	
	@Override
	@Transactional
	public User findByUser(String email,String password) {
		//User u=userRepository.findByemail(email);
		
		User u=userRepository.LoginUser(email,password);
		 return u;
	
	}

	@Override
	@Transactional
	public List<User> findAll() {
		
		return userRepository.findAll();
	}

	@Override
	@Transactional
	public User forgetPassword(String email, String password) {
		// TODO Auto-generated method stub
		User u=userRepository.findByEmail(email);
		u.setPassword(password);
		return userRepository.save(u);
	}
	@Override
	@Transactional
	public User findbyemailid(String email) {
		// TODO Auto-generated method stub
		return userRepository.findByEmail(email);
	}
	
	
	
	public boolean checkEmailExists(String email) {
		boolean exists = userRepository.checkEmailExists(email);
	    System.out.println("Email: " + email + " exists: " + exists);
	    return exists;
	}
	
	public User saveOrUpdate(User user) {
		System.out.println("inside saveorupdate method of service ");
        return userRepository.save(user);
    }

}
