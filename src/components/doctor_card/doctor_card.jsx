import "./doctor_card.css"
import Images from "../../pages/images/images"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DoctorCard()
{
    const navigate = useNavigate();

    const handlePageClick = () => 
    {
        navigate("/doctor-preview"); 
    };

    return(
        <div className="doctor-content">
            <div className="card-content">
                <div className="doctor">
                    <div className="doctor-img">
                        <img src={Images.doc2} alt="img" />
                    </div>
                    <div className="doctor-short-info">
                        <h3 className="doc-name">Sharell J. Thaxton</h3>
                        <p className="speciality">Family and Psychiatric Mental Health Nurse Practitioner</p>
                        <div className="doc-rating">
                            <div className="doc-rating-stars">
                                <img src={Images.star}/>
                                <img src={Images.star}/>
                                <img src={Images.star}/>
                                <img src={Images.star}/>
                                <img src={Images.star}/>
                            </div>
                            <p className="doc-rating-str">5.0</p>
                            <a href="#" className="doc-reviews">(3 ratings)</a>
                        </div>
                        <div className="doc-experience">
                            <img src={Images.experience}/>
                            <p>10 Years Experience</p>
                        </div>
                        <p className="doc-short-description">
                            Dr. Sharell J. Thaxton is a highly skilled and DUAL-CERTIFIED Family and Psychiatric Mental Health Nurse Practitioner. With a holistic approach to mental health care, Dr. Thaxton offers comprehensive services tailored to each individual's needs and goals.
                        </p>
                    </div>
                </div>
                <div className="doctor-contact">
                    <div className="book" onClick={handlePageClick}>
                        <p>View Profile</p>
                        <img src={Images.profile}/>
                    </div>
                    <div className="phone">
                        <img src={Images.call}/>
                        <p>(000) 123 4567 890</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorCard