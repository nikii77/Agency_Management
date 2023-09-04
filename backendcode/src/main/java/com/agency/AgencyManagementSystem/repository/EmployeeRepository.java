package com.agency.AgencyManagementSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.agency.AgencyManagementSystem.model.Employee;
import com.agency.AgencyManagementSystem.model.User;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
@Query(value="from Employee where agencyid=:agency and status='vacant'")
List<Employee> findByUserAgencyId(int agency);

//update
@Query(value="from Employee where id=:empid")
Employee updateemployee(int empid);


}
