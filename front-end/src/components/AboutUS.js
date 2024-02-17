import React from 'react'

const AboutUS = () => {
    return (
        <>
            <div className="container">
                <h3 className="py-3">About Us</h3>
                <p>
                    DoctorApp is a platform for booking medical consultations with specialist doctors in your city online. Patient can book an
                    appointment by selecting any of the time slot given by doctor.</p>
                <p> Some additional functionalities are - user can search a
                    doctor by area and specialization, both user and doctor can manage their booked appointments.
                </p>
                <p className="text-muted">Regards, from creators:
                    <ul>
                        <li>Anusha</li>
                        <li>Bhuvana</li>
                        <li>Pushpa</li>
                        <li>Pranathi</li>
                    </ul>
                </p>
            </div>
        </>
    )
}

export default AboutUS
