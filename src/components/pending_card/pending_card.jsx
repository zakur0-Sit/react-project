import { useState } from "react";
import "./pending_card.css";
import Images from "../../pages/images/images";
import { useNavigate } from "react-router-dom";

function PendingCard({ name, topic }) 
{
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const navigate = useNavigate();

    const handleAccept = () => 
    {
        setShowConfirmation(true);
    };

    const handleConfirm = () => 
    {
        setShowConfirmation(false);
        // Aici adaugi logia efectiva pentru a accepta cererea
        console.log("Cerere acceptată pentru:", name);
    };

    const handleCancel = () => 
    {
        setShowConfirmation(false);
    };


    const handleDelete = () => 
    {
        setShowDeleteConfirmation(true);
    }

    const handleDeleteConfirm = () => 
    {
        setShowDeleteConfirmation(false);
        // Aici aici o sa adaugi logica pentru a șterge cererea
        console.log("Cerere ștearsă pentru:", name);
    }

    const handleDeleteCancel = () => 
    {
        setShowDeleteConfirmation(false);
    }

    const handleStartChat = () => 
    {
        // Aici o sa adaugi logica pentru a incepe un chat
        navigate("/messages");
    };

    return (
        <div className="pending-card">
            <img src={Images.expand} alt="expand" />
            <div className="pending-card-content">
                <h4><strong>Full Name : </strong>{name}</h4>
                <h4><strong>Topic : </strong>{topic}</h4>
            </div>
            <div className="pending-card-buttons">
                <img 
                    src={Images.start_chat} 
                    alt="chat" 
                    onClick={handleStartChat}
                    style={{ cursor: "pointer" }}
                />
                <img 
                    src={Images.accept} 
                    alt="accept" 
                    onClick={handleAccept}
                    style={{ cursor: "pointer" }}
                />
                <img 
                    src={Images.reject} 
                    alt="reject" 
                    onClick={handleDelete}
                    style={{ cursor: "pointer" }}
                />
            </div>

            {/* Fereastra de confirmare */}
            {
                showConfirmation && (
                    <div className="confirmation-modal">
                        <div className="confirmation-content">
                            <p>Confirm accepting {name}'s request?</p>
                            <div className="confirmation-buttons">
                                <button className="yes-button" onClick={handleConfirm}>Yes</button>
                                <button className="no-button" onClick={handleCancel}>No</button>
                            </div>
                        </div>
                    </div>
            )}

            {/* Fereastra de confirmare pentru ștergere */}
            {
                showDeleteConfirmation && (
                    <div className="delete-modal">
                        <div className="delete-content">
                            <p>Confirm deleting {name}'s request?</p>
                            <div className="delete-buttons">
                                <button className="yes-button" onClick={handleDeleteConfirm}>Yes</button>
                                <button className="no-button" onClick={handleDeleteCancel}>No</button>
                            </div>
                        </div>
                    </div>
            )}
        </div>
    );
}

export default PendingCard;