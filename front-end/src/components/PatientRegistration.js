import { useState } from "react";
import { useNavigate , Link } from 'react-router-dom';

function PatientRegistration(){
    const navigate = useNavigate();
    const [data, setData] = useState({
        userName:"",
        password:"",
        firstName:"",
        lastName:"",
        mobileNumber:"",
        gender:"",
        bloodGroup:"",
        dob:""
    });

    const changeHandler = (e) => {
        setData((data)=>({
            ...data,
            [e.target.name]:e.target.value
        }));
    }

    const refreshPage = () => {
        window.location.reload();
    };

    const submitData = (e) => {
        e.preventDefault();
        const reqOptions ={
            method : 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                userName: data.userName,
                password: data.password,
                firstName:data.firstName,
                lastName:data.lastName,
                mobileNumber:data.mobileNumber,
                gender:data.gender,
                bloodGroup:data.bloodGroup,
                dob:data.dob
            })
        }
        fetch("http://localhost:8080/savepatient",reqOptions)
        .then(resp=>resp.text())
        .then(data=> {
            if(data.length !== 0) {
                alert("Registration successful!!!");
                navigate('/login');
            } else {
                alert("Registration Failed!!!");
                navigate('/signup');
            }
        })
    }

    return(
        <div>
            <br/><br/>
            <div className="container" style={{marginBottom : "50px"}}>
                <div className="row my-4">
                    <div className="card col-md-6 offset-md-3 offset-md-1">
                        <h2 className='text-center'>Patient Registration</h2>
                        <form>
                            <div className="form-group">
                                <label><b>User Name:</b></label>
                                <input type="text" placeholder="User Name" name="userName" className="form-control" 
                                    value={data.userName} onChange={changeHandler}/>
                            </div>

                            <div className="form-group" style={{marginTop: '10px'}}>
                                <label><b>Password:</b></label>
                                <input type="password" placeholder="Password" name="password" className="form-control" 
                                    value={data.password} onChange={changeHandler}/>
                            </div>

                            <div className="form-group" style={{marginTop: '10px'}}>
                                <label><b>First Name:</b></label>
                                <input type="text" placeholder="First Name" name="firstName" className="form-control" 
                                    value={data.firstName} onChange={changeHandler}/>
                            </div>

                            <div className="form-group" style={{marginTop: '10px'}}>
                                <label><b>Last Name:</b></label>
                                <input type="text" placeholder="Last Name" name="lastName" className="form-control" 
                                    value={data.lastName} onChange={changeHandler}/>
                            </div>

                            <div className="form-group" style={{marginTop: '10px'}}>
                                <label><b>User mobileNumber:</b></label>
                                <input type="text" placeholder="User mobileNumber" name="mobileNumber" className="form-control" 
                                    value={data.mobileNumber} onChange={changeHandler}/>
                            </div>
    
                            <div className="form-group" style={{marginTop: '10px'}}>
                                <label><b>Gender:</b></label>
                                <input style={{ marginLeft: '10px' }} type="radio" value="Male" name="gender" onChange={changeHandler}/> Male
                                <input style={{ marginLeft: '10px' }} type="radio" value="Female" name="gender" onChange={changeHandler}/> Female
                                <input style={{ marginLeft: '10px' }} type="radio" value="Other" name="gender" onChange={changeHandler}/> Other
                            </div>

                            <div className="form-group" style={{marginTop: '10px'}}>
                                <label><b>Blood Group:</b></label>
                                <select style={{ marginLeft: '10px' }} value={data.bloodGroup} name="bloodGroup" onChange={changeHandler}>
                                    <option value="">Select</option>                           
                                    <option value="A+">A+</option>
                                    <option value="B+">B+</option>
                                    <option value="O+">O+</option>
                                    <option value="AB+">AB+</option>
                                    <option value="A-">A-</option>
                                    <option value="B-">B-</option>
                                    <option value="O-">O-</option>
                                    <option value="AB-">AB-</option>
                                </select>
                            </div>
    
                            <div className="form-group" style={{marginTop: '10px'}}>
                                <label><b>Date of Birth:</b></label>
                                <input type="date" placeholder="Date Of Birth" name="dob" className="form-control" 
                                    value={data.dob} onChange={changeHandler}/>
                            </div>

                            <div style={{marginTop: "10px"}}>
                                <button className="btn btn-success" onClick={submitData}>Register</button>
                                <button type="button" className="btn btn-primary" style={{marginLeft: "10px"}} onClick={refreshPage}>Reset</button>
                                <button className="btn btn-danger" onClick={() => navigate("/")} style={{marginLeft: "10px"}}>Cancel</button> 
                            </div>
                        </form>
                        <Link to="/doctorRegistration" className="mt-2">
                            Are you a doctor? Signup here
                        </Link>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PatientRegistration;
