import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddCity(){
    const navigate = useNavigate();
    const [state, setState] = useState([]);
    const [record, setRecord] = useState("");
    const [data, setData] = useState({
        cityName:""
    });

    useEffect(() => {
        fetch("http://localhost:8080/getallstate")
        .then(r => r.json())
        .then(d => setState(d))
    },[]);

    const changeHandler = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value
        }));
    }

    const refreshPage = (e) => {
        window.location.reload();
    }

    const logout = () => {
        sessionStorage.removeItem("admindetails");
        navigate("/");
    }

    const getOneState = (e) => {
        const val = e.target.value;
        fetch("http://localhost:8080/getstatebyid/"+val)
        .then(r => r.json())
        .then(d => {setRecord(d)})
    }

    const submitData = (e) => {
        e.preventDefault();
        const reqOptions ={
            method : 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                cityName:data.cityName,
                state_id:record
            })
        }
        fetch("http://localhost:8080/savecity",reqOptions)
        .then(resp=>resp.text())
        .then(data=> {if(data.length !== 0)
            {
                alert("New City added successfully!!!");
                navigate('/admindashboard');
            }
            else{
                alert("Failed!!!");
                window.location.reload();

            }
        })
    }

    return(
        <div className="container-fluid" >
        <button className="btn btn-primary" onClick={logout} style={{float:"right",marginTop:"10px",marginRight:"10px"}}>Logout</button> 
        <button  className='btn btn-secondary' style={{float:"right",marginTop:"10px",marginRight:"10px"}} onClick={() => navigate("/admindashboard")}>Go Back</button>
        <h2> Add New State</h2>
        <form>
            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Select State: </b></label>
                <select style={{ marginLeft: '10px' }} name="state" onChange={getOneState}>
                    <option value="0" >--state--</option>
                    {
                        state.map((v)=>{
                        return (
                            <option key={v.stateId} value={v.stateId} >{v.stateName}</option>
                        )})
                    }
                </select>

            </div>

            <div style={{ marginTop: '10px' }} className = "form-group">
                
                <label><b> City Name: </b></label>
                <input type="text" placeholder="Enter City Name" name="cityName" className="form-control" 
                    value={data.cityName} onChange={changeHandler}/>
            </div>
                
            <div style={{marginTop: "10px", marginLeft:"240px"}}>
            <button className="btn btn-success" onClick={submitData}>Add City</button>
            <button type="button" className="btn btn-danger" style={{marginLeft: "10px"}} onClick={ refreshPage}>Reset</button>
            <button className="btn btn-danger" onClick={() => navigate("/admindashboard")} style={{marginLeft: "10px"}}>Cancel</button> 
            
            </div>
        </form>
    </div>
    );

}

export default AddCity;