package com.doctorapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.doctorapp.entities.Area;
import com.doctorapp.entities.City;
import com.doctorapp.services.AreaService;
import com.doctorapp.services.CityService;




@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AreaController {
	
	@Autowired
	AreaService areaService;
	
	@Autowired
	CityService cityService;
	
	@GetMapping("/getallareas")
	public List<Area> getAllAreas(){
		return areaService.getAllAreas();
	}
	
	@GetMapping("/getareabyid/{id}")
	public Area getAreaById(@PathVariable int id) {
		return areaService.getAreaById(id);
	}
	
	@PostMapping("/savearea")
	public Area saveArea(@RequestBody Area a) {
		return areaService.saveArea(a);
	}
	
	@GetMapping("/getareabycity/{id}")
	public List<Area> getAreaByCity(@PathVariable int id){
		City c = cityService.getCityById(id);
		return areaService.getAreaByCity(c);
	}
}


















