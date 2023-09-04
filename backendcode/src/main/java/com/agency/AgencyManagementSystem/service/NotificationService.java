package com.agency.AgencyManagementSystem.service;

import java.util.List;

import com.agency.AgencyManagementSystem.model.Notification;

public interface NotificationService {
	public Notification save(Notification notification);
	public List<Notification> findAll();
}
