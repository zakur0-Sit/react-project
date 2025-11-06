import "./notification.css";
import Images from "../../pages/images/images";
import { useEffect, useState } from "react";

function Notification({ type, topic, message, time, sender }) {
    // Funcție pentru a determina clasa și conținutul label-ului în funcție de tip
    const getNotificationLabel = () => {
        switch (type) {
            case "message":
                return {
                    className: "message-notification",
                    text: "New Message"
                };
            case "request":
                return {
                    className: "request-notification",
                    text: "New Request"
                };
            case "review":
                return {
                    className: "review-notification",
                    text: "New Review"
                };
            default:
                return {
                    className: "default-notification",
                    text: "Notification"
                };
        }
    };

    const label = getNotificationLabel();

    return (
        <div className="notification">
            <div className="notification-section">
                <img src={Images.cancel} alt="cancel" />
                <div className="notification-content">
                    <div className="notification-info">
                        <div className={label.className}>
                            {label.text}
                            
                        </div>
                        <div className="recive-time">
                            <img src={Images.time} alt="time" />
                            <p>{time}</p>
                        </div>
                        
                    </div>
                    
                    <div className="notification-text">
                        <h4><strong>Topic:</strong> {topic}</h4>
                        <p>{message}</p>
                        <p id="sender"><strong>From:</strong> {sender}</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Notification;