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
import com.doctorapp.entities.Doctor;
import com.doctorapp.entities.DoctorRegistration;
import com.doctorapp.entities.Login;
import com.doctorapp.services.AreaService;
import com.doctorapp.services.DoctorService;
import com.doctorapp.services.LoginService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DoctorController {
	
	@Autowired
	DoctorService doctorService;
	
	@Autowired
	LoginService loginService;
	
	@Autowired
	AreaService areaService;
	 
	@GetMapping("/getalldoctors")
	public List<Doctor> getAllDoctors(){
		return doctorService.getAllDoctors();
	}
	
	@PostMapping("/savedoctor")
	public Doctor saveDoctor(@RequestBody DoctorRegistration dr) {
		Login l = new Login(dr.getUserName(),dr.getPassword(),"Doctor","active");
		Login inserted = loginService.saveUser(l);
		Area area = areaService.getAreaById(dr.getAreaId());
		if((inserted != null) && (area != null)) {
			Doctor d =  new Doctor(dr.getFirstName(),dr.getLastName(),dr.getMobileNumber(),dr.getGender(),dr.getDob(),dr.getGraduation(),dr.getPostGraduation(),dr.getSpeciality(),dr.getFees(),area,inserted);
			return doctorService.saveDoctor(d);
		}else {
			return null;
		}
	}
	
	@PostMapping("/updatedoctordetails")
	public Doctor updateDoctorDetails(@RequestBody Doctor d) {
		return doctorService.updateDoctorDetails(d);
	}
	
	@GetMapping("/speciality")
	public List<Object> getAllDoctorsSpeciality(){
		return doctorService.getAllDoctorsSpeciality();
	}
	
	@GetMapping("/getalldoctorsbyarea/{id}")
	public List<Doctor> getAllDoctorsByArea(@PathVariable int id){
		Area a = areaService.getAreaById(id);
		return doctorService.getAllDoctorsByArea(a);
	}
	
	@GetMapping("/getdoctorsbyareaandspecialization/{areaId}/{spec}")
	public List<Doctor> getDoctorsByAreaAndApecialization(@PathVariable int areaId, @PathVariable String spec){
		Area a = areaService.getAreaById(areaId);
		return doctorService.getDoctorsByAreaAndApecialization(a,spec);
	}
	
//	@GetMapping("/getonedoctor/{id}")
//	public Optional<Doctor> getOneDoctor(@PathVariable int id) {
//		return dservice.getOneDoctor(id);
//	}
//	@GetMapping("/alldoctorsbystate/{id}")
//	public List<Doctor> allDoctorsByState(@PathVariable int id){
//		return dservice.allDoctorsByState(id);
//	}
	
//	@GetMapping("/alldoctorsbycity/{id}")
//	public List<Doctor> allDoctorsByCity(@PathVariable int id){
//		City c = cservice.getCityById(id);
//		System.out.println(c);
//		return dservice.allDoctorsByCity(c);
//	}
	
}













