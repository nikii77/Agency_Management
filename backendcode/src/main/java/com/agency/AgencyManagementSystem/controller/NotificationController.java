package com.agency.AgencyManagementSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agency.AgencyManagementSystem.model.Notification;
import com.agency.AgencyManagementSystem.service.NotificationServiceImpl;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/notification")
public class NotificationController {
	@Autowired
	private NotificationServiceImpl notificationService;
	@GetMapping("/notify")
	public List<Notification> getAlNotification(){

	             return notificationService.findAll();

	}
	

}
