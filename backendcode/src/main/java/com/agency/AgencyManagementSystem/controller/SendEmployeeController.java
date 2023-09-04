package com.agency.AgencyManagementSystem.controller;

import java.util.List;

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

import com.agency.AgencyManagementSystem.model.Employee;
import com.agency.AgencyManagementSystem.model.Notification;
import com.agency.AgencyManagementSystem.model.SendEmployee;
import com.agency.AgencyManagementSystem.service.NotificationServiceImpl;
import com.agency.AgencyManagementSystem.service.SendEmployeeServiceImpl;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/sendemployee")
public class SendEmployeeController {
	@Autowired
	SendEmployeeServiceImpl sendEmployeeServiceImpl;
	
	@Autowired
	private NotificationServiceImpl notificationService;
	Notification notification;
	
	 @PostMapping("/addSaveEmployee/{userid}/{jobid}")
	 public  ResponseEntity<Employee> selectedEmployee(@PathVariable int userid,@PathVariable int jobid,@RequestBody Employee emp) {
	 	//user.setUserId(0);
		 sendEmployeeServiceImpl.saveSendEmployee(userid, jobid,emp);
		 return ResponseEntity.status(HttpStatus.CREATED).body(emp);
			// n=employeeServiceImpl.saveSendEmployee(userid,emp);
	 	
	 }
	 
	 
	 @GetMapping("/sendselectedemployee/{userid}")
	 public List<Employee> sendEmployee(@PathVariable int userid){
		 return sendEmployeeServiceImpl.sendEmployee(userid);
	 }
	 @GetMapping("/selectedemployeeforjob/{userid}/{jobid}")
	 public List<Employee> sendEmployee(@PathVariable int userid,@PathVariable int jobid){
		 return sendEmployeeServiceImpl.sendEmployee(userid,jobid);
	 }
	 
	 
	 @PutMapping("/updatesendemp/{jobid}/{empid}")
	 public  List<SendEmployee> UpdatesendEmpl(@PathVariable int empid,@PathVariable int jobid) {
		// System.out.println(jobid);
		 List<SendEmployee> employee= sendEmployeeServiceImpl.updateEmployee(empid, jobid);
		 for(SendEmployee e:employee)
		 {e.setStatus("selected");
		 sendEmployeeServiceImpl.save(e);
		 }
		 if(employee!=null) {
			    notification=new Notification();
				notification.setMessage("Your employee is selected");
				notification.setjobid(jobid);
				notification.setEmpid(empid);
				notificationService.save(notification);
		 }
		 return employee;
		 
	 }

}
