package com.doctorapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.doctorapp.entities.Doctor;
import com.doctorapp.entities.DoctorTimeTable;


@Repository
public interface DoctorTimeTableRepository extends JpaRepository<DoctorTimeTable, Integer> {
	
	@Query("select dtt from DoctorTimeTable dtt where doctor_id = :d")
	public List<DoctorTimeTable> getDoctorTimeTableByDoctorId(int d);

	@Query("select dtt from DoctorTimeTable dtt where doctor_id = :d and weekday = :day")
	public DoctorTimeTable getBookedAppointmentsByDoctorIdandDate(int d, String day);

	@Query("select dtt from DoctorTimeTable dtt where doctor_id = :doctorId and weekday = :weekday")
	public DoctorTimeTable findWeekday(int doctorId, String weekday);
	
}



