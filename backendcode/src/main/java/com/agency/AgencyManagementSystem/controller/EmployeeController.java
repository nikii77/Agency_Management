package com.agency.AgencyManagementSystem.controller;

import java.util.List;
import java.util.Optional;

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
import com.agency.AgencyManagementSystem.service.EmployeeServiceImpl;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/employee")
public class EmployeeController {
	@Autowired
	private EmployeeServiceImpl employeeServiceImpl;
	 @GetMapping("/getAlEmployee/{agencyid}")
	    public List<Employee> getAlJobreq(@PathVariable int agencyid){
	    	return employeeServiceImpl.findAll(agencyid);                       

	    }
	 
	 @PostMapping("/addEmployee")
	 public ResponseEntity<Employee> addEmployee(@RequestBody Employee emp) {
	 	//user.setUserId(0);
		 Employee newEmp=employeeServiceImpl.save(emp);
	 	return ResponseEntity.status(HttpStatus.CREATED).body(newEmp);
	 	
	 }
	 @PutMapping("/updateemployee/{empid}")
	 public  Employee updateEmployee(@PathVariable int empid) {
		 
		 Employee e=employeeServiceImpl.UpdateEmployee(empid) ;
		 e.setStatus("selected");
		 return employeeServiceImpl.save(e);
	 }
	
	
	
	
}
