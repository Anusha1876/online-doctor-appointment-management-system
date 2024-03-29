package com.doctorapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.doctorapp.entities.Doctor;
import com.doctorapp.entities.Login;
import com.doctorapp.entities.Patient;
import com.doctorapp.repositories.DoctorRepository;
import com.doctorapp.repositories.LoginRepository;
import com.doctorapp.repositories.PatientRepository;


@Service
public class LoginService {
	
	@Autowired
	LoginRepository loginRepository;
	
	@Autowired
	PatientRepository patientRepository;
	
	@Autowired
	DoctorRepository doctorRepository;
	
	@Autowired
	JavaMailSender javaMailSender;
	
	public List<Login> getAllUsers() {
		return loginRepository.findAll();
	}

	public Login getUserByLoginId(int id) {
		return loginRepository.getReferenceById(id);
	}

	public Object loginCheck(String userName, String password) {
		Login l = loginRepository.loginCheck(userName,password);
		
		//if it returns a record
		if(l != null) {
			Patient p = null;
			Doctor d = null;
			
			//if it is a Patient's record
			if(l.getUserType().equals("Patient")) {
				try {
					p = patientRepository.getPatientByLoginIdObject(l);
				}catch(Exception e) {
					p = null;
				}
				return p;
			}
			//if it is a Doctor's record
			else if(l.getUserType().equals("Doctor")) {
				try {
					d = doctorRepository.getDoctorByLoginIdObject(l);
				}catch(Exception e) {
					d = null;
				}
				return d;
			}
			//if it is a Admin's record
			else if(l.getUserType().equals("Admin")) {
				return l;
			}else {
				return null;
			}
		}
		return null;
	}
	
	public Login saveUser(Login l) {
		try {
			return loginRepository.save(l);
		}catch(Exception e) {
			return null;
		}
	}
	
	public Login updateUser(Login l) {
		try {
			return loginRepository.save(l);
		}catch(Exception e) {
			return null;
		}
	}

	public Login forgotPassword(String userName) {
		Login l = loginRepository.forgotPassword(userName);
		if(l != null) {
			SimpleMailMessage smm = new SimpleMailMessage();
			smm.setFrom("ganjikuntaanusha4@gmail.com");
			smm.setTo(l.getUserName());
			smm.setSubject("Password for your account");
			smm.setText("Password for your account\nUsername : "+l.getUserName()+"\nPassword : "+l.getPassword());
			javaMailSender.send(smm);
			return l;
		}
		else {
			return null;
		}
	}
	
}




























