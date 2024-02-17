package com.doctorapp.entities;

import java.time.LocalTime;
import java.time.temporal.TemporalAmount;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;

@Entity
@Table(name = "doctor_timetable")
public class DoctorTimeTable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "doctor_timetable_id")
	private int ttId;
	
//	@JsonIgnoreProperties("timetable")
//	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "doctor_id")
//	private Doctor doctor_id;
//	
	@Column(name = "doctor_id")
	private int doctor_id;
	
	@Column
	private String weekday;
	
	@Column(name = "start_time")
	private LocalTime startTime;
	
	@Column(name = "end_time")
	private LocalTime endTime;

	@Column(name = "slot_duration")
	private int slotDuration;
	
	@Column(name = "break_time")
	private LocalTime breakTime;
	
	@Column
	private String status;

	public DoctorTimeTable() {
		super();
	}

	public DoctorTimeTable(int doctor_id, String weekday, LocalTime startTime, LocalTime endTime, int slotDuration,
			LocalTime breakTime, String status) {
		super();
		this.doctor_id = doctor_id;
		this.weekday = weekday;
		this.startTime = startTime;
		this.endTime = endTime;
		this.slotDuration = slotDuration;
		this.breakTime = breakTime;
		this.status = status;
	}

	public DoctorTimeTable(int ttId, int doctor_id, String weekday, LocalTime startTime, LocalTime endTime,
			int slotDuration, LocalTime breakTime, String status) {
		super();
		this.ttId = ttId;
		this.doctor_id = doctor_id;
		this.weekday = weekday;
		this.startTime = startTime;
		this.endTime = endTime;
		this.slotDuration = slotDuration;
		this.breakTime = breakTime;
		this.status = status;
	}

	public int getTtId() {
		return ttId;
	}

	public void setTtId(int ttId) {
		this.ttId = ttId;
	}

	public int getDoctor_id() {
		return doctor_id;
	}

	public void setDoctor_id(int doctor_id) {
		this.doctor_id = doctor_id;
	}

	public String getWeekday() {
		return weekday;
	}

	public void setWeekday(String weekday) {
		this.weekday = weekday;
	}

	public LocalTime getStartTime() {
		return startTime;
	}

	public void setStartTime(LocalTime startTime) {
		this.startTime = startTime;
	}

	public LocalTime getEndTime() {
		return endTime;
	}

	public void setEndTime(LocalTime endTime) {
		this.endTime = endTime;
	}

	public int getSlotDuration() {
		return slotDuration;
	}

	public void setSlotDuration(int slotDuration) {
		this.slotDuration = slotDuration;
	}

	public LocalTime getBreakTime() {
		return breakTime;
	}

	public void setBreakTime(LocalTime breakTime) {
		this.breakTime = breakTime;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
}




















