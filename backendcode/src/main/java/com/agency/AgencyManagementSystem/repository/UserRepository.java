package com.agency.AgencyManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.agency.AgencyManagementSystem.model.User;

import jakarta.persistence.NamedQuery;

@Repository
public interface UserRepository extends JpaRepository<User,Integer>{
//	User findByemail(String email);
	
	@Query(value="from User where email=:email and password=:password")
	User LoginUser(String email,String password);
	
	@Query(value="update User set email=:email where password=:pass")
	User updateUser(String email,String pass);
	
	User findByEmail(String email);
	
	@Query("SELECT CASE WHEN COUNT(a) > 0 THEN true ELSE false END FROM User a WHERE a.email = ?1")
    boolean checkEmailExists(String email);


}
