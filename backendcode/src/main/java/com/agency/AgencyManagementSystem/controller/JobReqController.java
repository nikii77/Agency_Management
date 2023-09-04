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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agency.AgencyManagementSystem.model.Job_Req;
import com.agency.AgencyManagementSystem.model.Notification;
import com.agency.AgencyManagementSystem.service.JobReqServiceImpl;
import com.agency.AgencyManagementSystem.service.NotificationServiceImpl;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/job_req")
public class JobReqController {
	@Autowired
	private JobReqServiceImpl jobReqService;
	@Autowired
	private NotificationServiceImpl notificationService;
	Notification notification;
	
	@PostMapping("/addJobReq")
	public ResponseEntity<Job_Req> addJobReq(@RequestBody Job_Req job_Req) {
		Job_Req new_job_Req=jobReqService.save(job_Req);
		if(new_job_Req!=null) {
			//System.out.println("notification call");
			//new NotificationController().savenotification("new job post is added",job_Req.getId());
		notification=new Notification();
		notification.setMessage("New job post is posted");
		notification.setjobid(job_Req.getId());
		notificationService.save(notification);
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(job_Req);
	}
	 @GetMapping("/getAljobReq")
	    public List<Job_Req> getAlJobreq(){
	    	return jobReqService.findAll();                       

	    }
//get particular job request;
    @GetMapping("/getjobReq/{jobid}")
    public Optional<Job_Req> getJobreq(@PathVariable int jobid){
    	Optional<Job_Req> jobReq=jobReqService.findById(jobid);
    	return jobReq;
    }
    
    @GetMapping("/getjobReqforuser/{userid}/{jobtype}")
    public List<Job_Req> getAlJobreq(@PathVariable int userid,@PathVariable String jobtype){
    	return jobReqService.findAll(userid, jobtype);                       

    }
    
    //get jobs by particular userid
    @GetMapping("/getjobRequser/{userid}")
    public List<Job_Req> getJobreqforuser(@PathVariable int userid){
    	
    	return jobReqService.jobrequestuser(userid);
    }
	

}
