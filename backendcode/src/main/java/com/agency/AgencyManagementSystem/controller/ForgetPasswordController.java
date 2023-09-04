package com.agency.AgencyManagementSystem.controller;






import java.util.Objects;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.agency.AgencyManagementSystem.model.User;
import com.agency.AgencyManagementSystem.service.EmailService;
import com.agency.AgencyManagementSystem.service.UserServiceImpl;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class ForgetPasswordController {
	//emailid from open handler
	EmailService emailser=new EmailService();
	
	Random random= new Random(1000);
	
	 private Integer otp; 
	
	@Autowired
    private UserServiceImpl userService;
	


	    @GetMapping("/checkemail")
	    public boolean checkEmail(@RequestParam("email") String email) {
	        boolean emailExists = userService.checkEmailExists(email);
	     
	        if (emailExists) {
	        	System.out.println("email found");
	        	  try {
	  	            otp = random.nextInt(9000) + 1000; // Generate OTP

	  	  		String subject="OTP from scm";
	  	  		
	  	  		String msg="<h1>OTP="+otp+"</h1>";
	  	  		String to=email;
	  	  		
	  	  		boolean flag=this.emailser.sendEmail(msg,subject,to);
	  	            System.out.println("Sending OTP: " + otp + " to email: " + email);
	  	            return true;
	  	        } catch (Exception e) {
	  	            e.printStackTrace();
	  	            return false;
	  	        }
	          
	        } else {
	        	System.out.println("email not found");
	            return false;
	        }
	        
	        
	    }

//	    @GetMapping("/sendotp")
//	    public String sendOTP(@RequestParam("email") String email) {
//	        try {
//	            otp = random.nextInt(9000) + 1000; // Generate OTP
//	            // Implement sending OTP logic here (e.g., using email service)
//	            // You can send the generated OTP to the provided email
//	            System.out.println("Sending OTP: " + otp + " to email: " + email);
//	            return "OTP sent successfully";
//	        } catch (Exception e) {
//	            e.printStackTrace();
//	            return "Error sending OTP";
//	        }
//	    }

	    @GetMapping("/verifyotp")
	    public String verifyOTP(@RequestParam Integer enteredOtp) {
	    	System.out.println("inside verifyotp meethod");
	    	System.out.println("enteredOtp="+enteredOtp);
	    	System.out.println("otp="+otp);
	        try {
	            if (enteredOtp == null) {
	                return "Entered OTP is null";
	            } 
	            else if (otp == null) {
	                return "Stored OTP is null";
	            } 
	            else if (Objects.equals(enteredOtp, otp)) {
	            	System.out.println("otp matched");
	                otp = null; // Clear OTP after successful verification
	                return "matched";
	            } else {
	                return "not matched";
	            }
	        } catch (Exception e) {
	            e.printStackTrace();
	            return "OTP not matched";
	        }
	    }

	    @GetMapping("/changepassword")
	    public String changePassword(@RequestParam("email") String email,
	                                 @RequestParam("newPassword") String newPassword) {
	        try {
	            User user = userService.findbyemailid(email);
	            if (user != null) {
	            	user.setPassword(newPassword);
	            	userService.saveOrUpdate(user);
	                return "success";
	            } else {
	                return "Admin not found";
	            }
	        } catch (Exception e) {
	            e.printStackTrace();
	            return "Error changing password";
	        }
	    }
	}

	
	
	

