package com.agency.AgencyManagementSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.agency.AgencyManagementSystem.model.Employee;
import com.agency.AgencyManagementSystem.model.SendEmployee;

public interface SendEmployeeRepository extends JpaRepository<SendEmployee,Integer> {
    @Query("SELECT e.empid FROM SendEmployee e INNER JOIN e.empid where e.customerid=:cid")
   List<Employee> sendEmployee(int cid);
    
    @Query("SELECT e.empid FROM SendEmployee e INNER JOIN e.empid where e.customerid=:cid and e.jobid=:jobid and e.status='vacant'")
    List<Employee> sendEmployee(int cid,int jobid);
    
    
    @Query("SELECT e FROM SendEmployee e INNER JOIN e.empid where e.empid.id=:emp and e.jobid=:jobid")
    List<SendEmployee> updateEmployee(int emp,int jobid);
}
