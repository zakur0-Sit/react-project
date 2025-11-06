import "./request.css";

import Header from "../../components/header/header";
import DoctorCard from "../../components/doctor_card/doctor_card";
import Images from "../images/images";
import {useState} from "react";

function RequestAssistance() 
{
    const [rating, setRating] = useState(false);
    const [years, setYears] = useState(false);
    const [city, setCity] = useState(false);

    const togleRating = () => setRating(!rating);
    const togleYears = () => setYears(!years);
    const togleCity = () => setCity(!city);

    return (
        <div>
            <Header/>
            <div className="request-assistance-container">
                <div className="request-assistance-header">
                    <h2>Find the Best Doctors near you</h2>
                    <p>Need help deciding? Explore feedback from real patients, what awards they've won, and much more to help you choose.</p>
                </div>
                <div className="request-assistance-content">
                    <div className="sort-by">
                        <div class="dropdown" id="rating-dropdown">
                            <button onClick={togleRating} className="rating-btn">Rating</button>
                            <ul style={{display: rating ? "block" : "none"}}>
                                <li><a href="#">1 star</a></li>
                                <li><a href="#">2 star</a></li>
                                <li><a href="#">3 star</a></li>
                                <li><a href="#">4 star</a></li>
                                <li><a href="#">5 star</a></li>
                            </ul>
                        </div>
                        <div class="dropdown" id="years-dropdown">
                            <button onClick={togleYears} className="years-btn">Years Exp</button>
                            <ul style={{display: years ? "block" : "none"}}>
                                <li><a href="#">No Experience</a></li>
                                <li><a href="#">Less Than 3 Years</a></li>
                                <li><a href="#">Less Than 5 Years</a></li>
                                <li><a href="#">Less Than 10 Years</a></li>
                                <li><a href="#">More Than 10 Years</a></li>
                            </ul>
                        </div>
                        <div class="dropdown" id="city-dropdown">
                            <button onClick={togleCity} className="city-btn">City</button>
                            <ul style={{display: city ? "block" : "none"}}>
                                <li><a href="#">Iasi</a></li>
                                <li><a href="#">Bucharest</a></li>
                                <li><a href="#">Vaslui</a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <DoctorCard/>
                <DoctorCard/>
                <DoctorCard/>
                <DoctorCard/>

            </div>
            
        </div>
    )   
}

export default RequestAssistance;