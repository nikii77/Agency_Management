package com.agency.AgencyManagementSystem.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="sendemployee")
public class SendEmployee {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="customerid")
	private int customerid;
	@ManyToOne
    @JoinColumn(name="empid")
	private Employee empid;
	
	@Column(name="jobid")
	private int jobid;
	
	@Column(name="agencyid")
	private int agencyid;
	
	@Column(name="status")
	private String status;

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getAgencyid() {
		return agencyid;
	}

	public void setAgencyid(int agencyid) {
		this.agencyid = agencyid;
	}

	public int getJobid() {
		return jobid;
	}

	public void setJobid(int jobid) {
		this.jobid = jobid;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getCustomerid() {
		return customerid;
	}

	public void setCustomerid(int customerid) {
		this.customerid = customerid;
	}

	public Employee getEmpid() {
		return empid;
	}

	public void setEmpid(Employee empid) {
		this.empid = empid;
	}

	public SendEmployee(int customerid, Employee empid, int jobid,int agencyid,String status) {
		super();
		this.customerid = customerid;
		this.empid = empid;
		this.jobid = jobid;
		this.agencyid = agencyid;
		this.status = status;
		
	}

	public SendEmployee() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	

}
