package com.agency.AgencyManagementSystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agency.AgencyManagementSystem.model.Employee;
import com.agency.AgencyManagementSystem.model.SendEmployee;
import com.agency.AgencyManagementSystem.repository.EmployeeRepository;
import com.agency.AgencyManagementSystem.repository.SendEmployeeRepository;

import jakarta.transaction.Transactional;


@Service
public class EmployeeServiceImpl implements EmployeeService{
    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    SendEmployeeRepository sendEmployeeRepository ;
    //getall employee
	@Override
	@Transactional
	public List<Employee> findAll(int agencyid) {
		return employeeRepository.findByUserAgencyId(agencyid);
	}
	@Override
	@Transactional
	public Employee save(Employee emp) {
		return employeeRepository.save(emp);
	}
	@Override
	@Transactional
	public List<Employee> findAll() {
		// TODO Auto-generated method stub
		return employeeRepository.findAll();
	}
	@Override
	@Transactional
	public Employee UpdateEmployee(int empid) {
		// TODO Auto-generated method stub
		return employeeRepository.updateemployee(empid);
	}

}
