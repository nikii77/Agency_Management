package com.agency.AgencyManagementSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.agency.AgencyManagementSystem.model.Job_Req;
@Repository
public interface JobReqServiceRepository extends JpaRepository<Job_Req,Integer> {

	@Query(value="from Job_Req user where user.userid=:userid and user.jobtype=:jobtype")
	List<Job_Req> jobrequest(int userid,String jobtype);
	
	
	
	@Query(value="from Job_Req user where user.userid=:userid")
	List<Job_Req> jobrequestuser(int userid);
	
}
