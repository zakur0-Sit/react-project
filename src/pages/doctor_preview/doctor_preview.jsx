import "./doctor_preview.css";
import Header from "../../components/header/header";
import Images from "../images/images";
import Profile from "../../components/doctor_preview/profile/profile";
import Overview from "../../components/doctor_preview/overview/overview";
import Location from "../../components/doctor_preview/location/location";
import Condition from "../../components/doctor_preview/condition_treated/condition_treated";
import Procedures from "../../components/doctor_preview/procedures_performed/procedures_performed";
import Reviews from "../../components/doctor_preview/ratings_and_reviews/ratings_and_reviews";

function DoctorPreview() 
{
    return(
        <div className="doctor-preview-page">
            <Header/>
            <div className="doctor-preview-section">
                <img src={Images.bg} alt="background" />
                <div className="doctor-preview-content">
                    <Profile/>
                    <Overview/>
                    <Location/>
                    <Condition/>
                    <Procedures/>
                    <Reviews/>
                </div>
            </div>
        </div>
    )
}

export default DoctorPreview;