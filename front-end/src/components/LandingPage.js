import React from "react";
import './Landing.css';
import { useNavigate } from "react-router-dom";
import video from '../assets/bg2.mp4'

const LandingPage = () => {
    const navigate = useNavigate();

    return(
        <div className="container-fluid" style={{marginBottom : "50px"}}>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <video className="videoStyle" autoPlay muted loop>
                                <source src={video} type="video/mp4" />
                        </video>
                        <div className="middleLayer bg-1"></div>
                            <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 position-fixed slideContent">
                                <h4 className="text-light font-weight-bolder text-uppercase"><strong>Book Appointments</strong></h4>
                                <div className="container w-50">
                                    <p className="display-6 text-light text-center"><strong>Book appointments on the go with best specialist doctors in your city.</strong></p>
                                </div>
                                <div>
                                <button className="btn btn-link btn-lg btn-outline-light button1 text-light text-uppercase text-decoration-none mx-3" onClick={() => navigate("/signup")}>SignUp</button>
                                <button className="btn btn-link btn-lg btn-light button2 text-dark text-uppercase text-decoration-none mx-3" onClick={() => navigate("/login")}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LandingPage;