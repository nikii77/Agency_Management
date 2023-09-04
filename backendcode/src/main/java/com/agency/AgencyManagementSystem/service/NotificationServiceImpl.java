package com.agency.AgencyManagementSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agency.AgencyManagementSystem.model.Notification;
import com.agency.AgencyManagementSystem.repository.NotificationRepository;

import jakarta.transaction.Transactional;
@Service
public class NotificationServiceImpl implements NotificationService{
	
	@Autowired
	private NotificationRepository notificationRepository;

	@Override
	@Transactional
	public Notification save(Notification notification) {
		// TODO Auto-generated method stub
		
		return notificationRepository.save(notification);
		
	}

	@Override
	@Transactional
	public List<Notification> findAll() {
		// TODO Auto-generated method stub
		return notificationRepository.findAll();
	}
}
