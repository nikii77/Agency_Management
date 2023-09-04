package com.agency.AgencyManagementSystem.service;

import java.util.List;
import java.util.Optional;

import com.agency.AgencyManagementSystem.model.Job_Req;

public interface JobReqService {
	public Job_Req save(Job_Req job_Req) ;
	public Optional<Job_Req> findById(int jobid) ;
	public List<Job_Req> findAll() ;
	public List<Job_Req> findAll(int userid,String jobtype) ;
	
	List<Job_Req> jobrequestuser(int userid);
}
