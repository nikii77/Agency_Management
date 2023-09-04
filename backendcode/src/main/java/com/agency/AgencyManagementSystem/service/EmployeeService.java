package com.agency.AgencyManagementSystem.service;

import java.util.List;
import java.util.Optional;

import com.agency.AgencyManagementSystem.model.Employee;
import com.agency.AgencyManagementSystem.model.SendEmployee;

public interface EmployeeService {
	 public List<Employee> findAll(int agencyid);
	 public Employee save(Employee emp);
	 public List<Employee> findAll();
	 public Employee UpdateEmployee(int empid);
}
