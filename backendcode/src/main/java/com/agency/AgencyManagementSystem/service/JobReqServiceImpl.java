package com.agency.AgencyManagementSystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agency.AgencyManagementSystem.model.Job_Req;
import com.agency.AgencyManagementSystem.repository.JobReqServiceRepository;

import jakarta.transaction.Transactional;
@Service
public class JobReqServiceImpl implements JobReqService{
    @Autowired
    private JobReqServiceRepository jobReqServiceRepository;
	@Override
	@Transactional
	public Job_Req save(Job_Req job_Req) {
		// TODO Auto-generated method stub
		return jobReqServiceRepository.save(job_Req);
	}
	@Override
	@Transactional
	public Optional<Job_Req> findById(int jobid) {
		// TODO Auto-generated method stub
	
		 return jobReqServiceRepository.findById(jobid);
	}
	@Override
	@Transactional
	public List<Job_Req> findAll() {
		// TODO Auto-generated method stub
		return jobReqServiceRepository.findAll();
	}
	@Override
	public List<Job_Req> findAll(int userid, String jobtype) {
		// TODO Auto-generated method stub
		return jobReqServiceRepository.jobrequest(userid, jobtype);
	}
	@Override
	public List<Job_Req> jobrequestuser(int userid) {
		// TODO Auto-generated method stub
		return jobReqServiceRepository.jobrequestuser(userid);
	}

}
