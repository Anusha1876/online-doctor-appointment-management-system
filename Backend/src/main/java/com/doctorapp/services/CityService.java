package com.doctorapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doctorapp.entities.City;
import com.doctorapp.entities.State;
import com.doctorapp.repositories.CityRepository;


@Service
public class CityService {
	
	@Autowired
	CityRepository cityRespository;
	
	public List<City> getAllCities(){
		return cityRespository.findAll();	
	}
	
	public City getCityById(int id) {
		return cityRespository.getReferenceById(id);
	}
	
	public City saveCity(City c) {
		try {
			return cityRespository.save(c);
		}catch(Exception e) {
			return null;
		}
	}
	
	public List<City> getCitiesByStateId(State s){
		return cityRespository.getCitiesByStateId(s);
	}
}













