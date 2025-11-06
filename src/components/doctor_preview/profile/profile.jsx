import "./profile.css";
import Images from "../../../pages/images/images";

function Profile()
{
    return(
        <div className="profile">
            <div className="doctor-content">
                <div className="card-content" id="profile-card-content">
                    <div className="doctor">
                        <div className="doctor-img">
                            <img src={Images.doc2} alt="img" />
                        </div>
                        <div className="doctor-short-info" id="profile-short-info">
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
                            <div className="doc-site">
                                <img src={Images.website}/>
                                <a href="#">Visit Website</a>
                            </div>
                            <div className="pacient-accept">
                                <img src={Images.accept_patients}/>
                                <p>Accepting New Patients</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="profile-contact">
                        <div className="phone">
                            <img src={Images.call}/>
                            <p>(000) 123 4567 890</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
