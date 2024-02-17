package com.doctorapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.doctorapp.entities.Login;



@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {
	
	////fetch record with matching username and password
	@Query("select l from Login l where userName = :userName and password = :password")
	public Login loginCheck(String userName, String password);

	@Query("select l from Login l where userName = :userName")
	public Login forgotPassword(String userName);

}
