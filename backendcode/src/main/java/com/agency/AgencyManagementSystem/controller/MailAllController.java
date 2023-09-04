package com.agency.AgencyManagementSystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agency.AgencyManagementSystem.service.EmailService;
import com.agency.AgencyManagementSystem.service.EmployeeServiceImpl;




@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api")
public class MailAllController {
	
	
	@Autowired
	private EmployeeServiceImpl employeeServ;
	
	@Autowired
	private EmailService emailServ;
	
	  @GetMapping("/sndem/{email}")
	    public String sendEmailsToAdmins(@PathVariable String email) {
	       // List<Employee> admins = employeeServ.findAll(); // Fetch all admin emails

	     
	                //String email = emp.getEmail(); // Assuming getEmail() is the method to get email
	                String subject = "Interview Confirmation";
	                String msg = "hello jobseekers,your profile is shortlisted.Please connect with us";

	                boolean success = emailServ.sendEmail(msg, subject, email);
	                if (success) {
	                    System.out.println("Email sent to: " + email);
	                } else {
	                    System.out.println("Failed to send email to: " + email);
	                }
	            return "Emails send";
	        
	    }
	


}
