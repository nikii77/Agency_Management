package com.agency.AgencyManagementSystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agency.AgencyManagementSystem.model.User;
import com.agency.AgencyManagementSystem.service.UserServiceImpl;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {
@Autowired
private UserServiceImpl userServiceImpl;
@PostMapping("/register")
public ResponseEntity<User> registerUser(@RequestBody User user) {
	//user.setUserId(0);
	User newUser=userServiceImpl.save(user);
	return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
	
}
@GetMapping("/login/{email}/{password}") 
public User loginUser(@PathVariable String email,@PathVariable String password) {
//user.setUserId(0); 
User u=userServiceImpl.findByUser(email,password); 
if(u!=null) {
 System.out.println("Login Success");
 
 } else System.out.println("invalid Login Success");
 return u;
 }




//@GetMapping("/forgetpassword/{email}")
//public User ForgetPassword(@PathVariable String email) {
//	return userServiceImpl.findbyemailid(email);
//}
//
//@PutMapping("/forgetpassword/{email}/{password}")
//public User ForgetPassword(@PathVariable String email,@PathVariable String password) {
//	return userServiceImpl.forgetPassword(email, password);
//}

}
