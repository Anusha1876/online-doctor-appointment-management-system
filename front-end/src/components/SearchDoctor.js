import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function SearchDoctor() {
    const navigate = useNavigate();
    const [doctor, setDoctor] = useState([]);
    const [city, setCity] = useState([]);
    const [area, setArea] = useState([]);
    const [state, setState] = useState([]);
    const [stateId, setStateId] = useState("");
    const [cityId, setCityId] = useState("");
    const [areaId, setAreaId] = useState("");
    //const [error, setError] = useState("");
    const [speciality, setSpeciality] = useState([]);
    const [specId, setSpecId] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/getallstate")
            .then(r => r.json())
            .then(d => setState(d))
    }, []);

    const changeHandler = (e) => {
        setAreaId(e.target.value);
    }

    const refreshPage = (e) => {
        window.location.reload();
    };

    const cityFetch = (e) => {
        setStateId(e.target.value);
        const val = e.target.value;
        fetch("http://localhost:8080/getcitiesbystate/" + val)
            .then(r => r.json())
            .then(d => setCity(d));
    }

    const areaFetch = (e) => {
        setCityId(e.target.value);
        const val = e.target.value;
        fetch("http://localhost:8080/getareabycity/" + val)
            .then(r => r.json())
            .then(d => setArea(d))
    }

    const setSpec = (ev) => {
        setSpecId(ev.target.value);
    }

    const fetchSpeciality = () => {
        fetch("http://localhost:8080/speciality")
            .then(r => r.json())
            .then(d => { console.log(d); setSpeciality(d) })
    }

    const logout = () => {
        sessionStorage.removeItem("patientdetails");
        navigate("/");
    }

    const appointment = (ev) => {
        sessionStorage.setItem("doctordetails", JSON.stringify(ev));
        navigate("/bookdoctorappointmentslot");
    }

    const search = (ev) => {
        if (stateId !== "" && cityId !== "" && areaId !== "" && specId === "") {
            fetch("http://localhost:8080/getalldoctorsbyarea/" + areaId)
                .then(r => r.json())
                .then(d => setDoctor(d))
        } else if (stateId !== "" && cityId !== "" && areaId !== "" && specId !== "") {
            fetch("http://localhost:8080/getdoctorsbyareaandspecialization/" + areaId + "/" + specId)
                .then(r => r.json())
                .then(d => setDoctor(d))
        }
    }

    return (
        <>
            <div className="container my-4" style={{ marginBottom: "50px" }}>
                <button className="btn btn-danger" onClick={logout} style={{ float: "right", marginTop: "10px", marginRight: "10px" }}>Logout</button>
                <button className='btn btn-secondary' style={{ float: "right", marginTop: "10px", marginRight: "10px" }} onClick={() => navigate("/patientdashboard")}>Go Back</button>
                <br></br>
                <div>
                    <h1 className="font-weight-bold">Search Doctor</h1>

                    <div style={{ marginTop: '10px' }} className="form-group">
                        <label><b>  Select Area: </b></label>

                        <select style={{ marginLeft: '10px' }} name="state" onChange={cityFetch}>
                            <option value="">--state--</option>
                            {state.map((v) => {
                                return (
                                    <option key={v.stateId} value={v.stateId}>{v.stateName}</option>
                                );
                            })}
                        </select>

                        <select style={{ marginLeft: '10px' }} name="city" onChange={areaFetch}>
                            <option value="">--city--</option>
                            {city.map((v) => {
                                return (
                                    <option key={v.cityId} value={v.cityId}>{v.cityName}</option>
                                );
                            })}
                        </select>

                        <select style={{ marginLeft: '10px' }} name="areaId" onChange={changeHandler} onBlur={fetchSpeciality}>
                            <option value="">--area--</option>
                            {area.map((v) => {
                                return (
                                    <option key={v.areaId} value={v.areaId}>{v.areaName}</option>
                                );
                            })}
                        </select>

                        <select style={{ marginLeft: '10px', marginTop: "10px" }} name="areaId" onChange={setSpec}>
                            <option value="0">--Speciality--</option>
                            {speciality.map((v) => {
                                return (
                                    <option key={v} value={v}>{v}</option>
                                );
                            })}
                        </select>
                    </div>


                    <button className='btn btn-primary' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={search}>Search</button>
                    <button type="button" className="btn btn-danger" style={{ marginLeft: "10px", marginTop: "10px" }} onClick={refreshPage}>Reset</button>
                    <button className="btn btn-danger" onClick={() => navigate("/patientdashboard")} style={{ marginLeft: "10px", marginTop: "10px" }}>Cancel</button>
                </div>
            </div>
            <div className="container my-4">
                <div>
                    <h3>Doctor List</h3>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-light">
                            <tr>
                                <th>Speaciality</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Gender</th>
                                <th>Graduation</th>
                                <th>Post Graduation</th>
                                <th>Fees</th>
                                <th>Area Name</th>
                                <th>City Name</th>
                                <th>State Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctor.map((v, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{v.speciality}</td>
                                        <td>{v.firstName}</td>
                                        <td>{v.lastName}</td>
                                        <td>{v.gender}</td>
                                        <td>{v.graduation}</td>
                                        <td>{v.postGraduation}</td>
                                        <td>{v.fees}</td>
                                        <td>{v.area_id.areaName}</td>
                                        <td>{v.area_id.city_id.cityName}</td>
                                        <td>{v.area_id.city_id.state_id.stateName}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => appointment(v)}>Book Appointment</button>
                                        </td>
                                    </tr>
                                );

                            })}
                        </tbody>
                    </table>
                </div>
        </div></>
    );
}

export default SearchDoctor;