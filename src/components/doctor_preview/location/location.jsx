import "./location.css";
import Images from "../../../pages/images/images";

function Location()
{
    return(
        <div className="location">
            <div className="location-content">
                <div className="location-title">
                    <img src={Images.location} alt="location" />
                    <h3>Location</h3>
                </div>
                <div className="location-text">
                    <p className="address">
                        <strong>Catawba Valley Dental Care</strong><br/>
                        13557 Steelecroft Pkwy Ste 2400<br/>
                        Charlotte,NC,28278<br/><br />
                        <strong>Phone:</strong> (000) 123 4567 890<br/>
                        
                    </p>
                    <img src={Images.map} alt="map" />
                </div>
            </div>
        </div>
    )
}

export default Location;