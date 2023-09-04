package com.agency.AgencyManagementSystem.service;

import java.util.List;

import com.agency.AgencyManagementSystem.model.Employee;
import com.agency.AgencyManagementSystem.model.SendEmployee;

public interface SendEmployeeService {
	public SendEmployee saveSendEmployee(int userid,int jobid,Employee sendemp);
	 public List<Employee> sendEmployee(int userid);
	 public List<Employee> sendEmployee(int userid,int jobid);
	public List<SendEmployee> updateEmployee(int emp,int jobid);
	public SendEmployee save(SendEmployee employee);
}
