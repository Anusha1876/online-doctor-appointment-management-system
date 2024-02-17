package com.doctorapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.doctorapp.entities.State;


@Repository
public interface StateRepository extends JpaRepository<State, Integer> {
	
}
