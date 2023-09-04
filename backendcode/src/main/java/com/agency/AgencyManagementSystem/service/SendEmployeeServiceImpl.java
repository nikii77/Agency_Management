package com.agency.AgencyManagementSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agency.AgencyManagementSystem.model.Employee;
import com.agency.AgencyManagementSystem.model.SendEmployee;
import com.agency.AgencyManagementSystem.repository.SendEmployeeRepository;

import jakarta.transaction.Transactional;

@Service
public class SendEmployeeServiceImpl implements SendEmployeeService{

	@Autowired
	SendEmployeeRepository sendEmployeeRepository;
	
	@Override
	@Transactional
	public SendEmployee saveSendEmployee(int userid,int jobid,Employee sendemp) {
		SendEmployee emp=new SendEmployee(userid,sendemp,jobid,sendemp.getAgencyid(),sendemp.getStatus());
		return sendEmployeeRepository.save(emp);

		
		
	}

	@Override
	@Transactional
	public List<Employee> sendEmployee(int userid) {
		// TODO Auto-generated method stub
		return sendEmployeeRepository.sendEmployee(userid);
	}

	@Override
	@Transactional
	public List<Employee> sendEmployee(int userid, int jobid) {
		// TODO Auto-generated method stub
		return sendEmployeeRepository.sendEmployee(userid, jobid);
	}

	@Override
	@Transactional
	public List<SendEmployee> updateEmployee(int emp, int jobid) {
		// TODO Auto-generated method stub
		return sendEmployeeRepository.updateEmployee(emp,jobid);
	}

	@Override
	@Transactional
	public SendEmployee save(SendEmployee employee) {
		// TODO Auto-generated method stub
		return sendEmployeeRepository.save(employee);
	}
}
