import React, { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function AddTimeTable() {
    const navigate = useNavigate();
    const [slots, setSlots] = useState({
        doctor_id: {},
        weekday: "", // Default value set to Monday
        startTime: "",
        endTime: "",
        slotDuration: "",
        breakTime: "",
        status: ""
    });

    useEffect(() => {
        let doc = JSON.parse(sessionStorage.getItem("doctordetails"));
        console.log(doc);
        
        
        setSlots({ 
            doctor_id: doc.doctorId, // Default value set to Monday
            weekday: "", 
            startTime: "",
            endTime: "",
            slotDuration: "",
            breakTime: "",
            status: ""
        }); 
        console.log(slots);
    }, []);

    const changeHandler = (e) => {
        setSlots({
            ...slots,
            [e.target.name]: e.target.value
        });
    }

    const refreshPage = (e) => {
        window.location.reload();
      };

    const logout = () => {
        sessionStorage.removeItem("doctordetails");
        navigate("/");
    }

    const submitData = (e) => {
        e.preventDefault();
        console.log(slots);
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                doctor_id: slots.doctor_id, 
                weekday: slots.weekday,
                startTime: slots.startTime,
                endTime: slots.endTime,
                slotDuration: slots.slotDuration,
                breakTime: slots.breakTime,
                status: slots.status
            })
        };
        
        fetch("http://localhost:8080/savetimetable", reqOptions)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error('Failed to add timetable entry');
                }
                return resp.text();
            })
            .then(data => {
                if (data.length !== 0) {
                    alert("Timetable entry added successfully!");
                    navigate('/addTimeTableSlots');
                } else {
                    alert("Failed to add timetable entry!");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("An error occurred. Please try again later.");
            });
    }
    

    return (
        <div className="container fluid" style={{ marginBottom: "50px" }}>
            <button className="btn btn-danger" onClick={logout} style={{ float: "right", marginTop: "10px", marginRight: "10px" }}>Logout</button>
            <button  className='btn btn-secondary' style={{float:"right",marginTop:"10px",marginRight:"10px"}} onClick={() => navigate("/doctordashboard")}>Go Back</button>
            <br /><br />
            <h2>Add Timetable Entry</h2>
            <form method="POST" >
                <div style={{ marginTop: '10px' }} className="form-group">
                    <label><b>Doctor Id:</b></label>
                    <input type="text" name="doctor_id" className="form-control" value={slots.doctor_id} onChange={changeHandler} disabled/>
                </div>

                <div style={{ marginTop: '10px' }} className="form-group">
                    <label><b>Weekday:</b></label>
                    <select name="weekday" className="form-control" value={slots.weekday} onChange={changeHandler}>
                        <option value="Monday" selected>Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                    </select>
                </div>

                <div style={{ marginTop: '10px' }} className="form-group">
                    <label><b>Start Time:</b></label>
                    <input type="text" name="startTime" className="form-control" value={slots.startTime} onChange={changeHandler} />
                </div>

                <div style={{ marginTop: '10px' }} className="form-group">
                    <label><b>End Time:</b></label>
                    <input type="text" name="endTime" className="form-control" value={slots.endTime} onChange={changeHandler} />
                </div>

                <div style={{ marginTop: '10px' }} className="form-group">
                    <label><b>Slot Duration:</b></label>
                    <input type="text" name="slotDuration" className="form-control" value={slots.slotDuration} onChange={changeHandler} />
                </div>

                <div style={{ marginTop: '10px' }} className="form-group">
                    <label><b>Break Time:</b></label>
                    <input type="text" name="breakTime" className="form-control" value={slots.breakTime} onChange={changeHandler} />
                </div>

                <div style={{ marginTop: '10px' }} className="form-group">
                    <label><b>Status:</b></label>
                    <select name="status" className="form-control" value={slots.status} onChange={changeHandler}>
                        <option value="not available" >not available</option>
                        <option value="available">available</option>
                    </select>
                </div>

                <div style={{ marginTop: "10px" }}>
                    <button type="submit" className="btn btn-success" onClick={submitData}>Add Timetable </button>
                    <button type="button" className="btn btn-danger" style={{marginLeft: "10px"}} onClick={refreshPage}>Reset</button>
                    <button type="button" className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={() => navigate("/doctordashboard")}>Cancel</button>
                </div>
                
                
            </form>
        </div>
    );
}

export default AddTimeTable;
