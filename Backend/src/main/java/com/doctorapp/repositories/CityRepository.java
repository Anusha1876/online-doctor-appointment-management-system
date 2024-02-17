package com.doctorapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.doctorapp.entities.City;
import com.doctorapp.entities.State;



@Repository
public interface CityRepository extends JpaRepository<City, Integer> {
	
	@Query("SELECT c FROM City c WHERE state_id = :s")
	public List<City> getCitiesByStateId(State s);
}
