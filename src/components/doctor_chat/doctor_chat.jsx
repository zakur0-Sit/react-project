import "./doctor_chat.css";
import Images from "../../pages/images/images";

function DoctorChat(props) 
{
    return(
        <div className="doctor-chat">
            <img src={props.image} alt="doc_photo"/>
            <div className="doctor-info">
                <h3 className="doctor-name">{props.name}</h3>
                <p className="last-message">{props.last_message}</p>
            </div>
            <p className="last-enter">{props.last_enter}</p>
        </div>
    );
}

export default DoctorChat