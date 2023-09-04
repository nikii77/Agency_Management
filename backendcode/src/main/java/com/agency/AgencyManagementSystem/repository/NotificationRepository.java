package com.agency.AgencyManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agency.AgencyManagementSystem.model.Notification;
@Repository
public interface NotificationRepository extends JpaRepository<Notification,Integer> {

}
