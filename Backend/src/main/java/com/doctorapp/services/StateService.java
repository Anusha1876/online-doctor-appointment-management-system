package com.doctorapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doctorapp.entities.State;
import com.doctorapp.repositories.StateRepository;



@Service
public class StateService {
	
	@Autowired
	StateRepository stateRepository;
	
	public List<State> getAllState(){
		return stateRepository.findAll();
	}
	
	public State getStateById(int id) {
		return stateRepository.getReferenceById(id);
	}
	
	public State saveState(State s) {
		try {
			return stateRepository.save(s);
		}
		catch(Exception e){
			return null;
		}
	}
}





