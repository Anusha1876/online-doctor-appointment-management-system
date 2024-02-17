package com.doctorapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doctorapp.entities.Area;
import com.doctorapp.entities.City;
import com.doctorapp.repositories.AreaRepository;


@Service
public class AreaService {

	@Autowired
	AreaRepository areaRepository;
	
	public List<Area> getAllAreas() {
		return areaRepository.findAll();
	}
	
	// i changed getbyId to getReferenceById
	public Area getAreaById(int id) {
		return areaRepository.getReferenceById(id);
	}
	
	public Area saveArea(Area a) {
		return areaRepository.save(a);
	}
	
	public List<Area> getAreaByCity(City c){
		return areaRepository.getAreaByCity(c);
	}
}





















