import "./notifications.css";
import Images from "../images/images";
import Header from "../../components/header/header";
import Notification from "../../components/notification/notification";

function Notifications() 
{
    return(
        <div className="notifications">
            <Header />
            <div className="notifications-section">
                <div className="notifications-text">
                    <h2>Notifications</h2>
                </div>
                <div className="notifications-content">
                    <Notification 
                        type="message" 
                        topic="New Message from Doctor" 
                        message="Hello, how can I assist you today?" 
                        time="22.05.2025 19:00" 
                        sender="Dr. Smith" 
                    />
                    <Notification 
                        type="request" 
                        topic="New Request for Assistance" 
                        message="A new request has been made for home care services." 
                        time="22.05.2025 18:00" 
                        sender="Home Care Team" 
                    />
                    <Notification 
                        type="review" 
                        topic="New Review Received" 
                        message="You have received a new review from a patient." 
                        time="20.05.2025 19:00" 
                        sender="Patient John Doe" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Notifications;