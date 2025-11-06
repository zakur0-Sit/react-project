import "./message.css";

import Images from "../../pages/images/images";

function Message(props) 
{
    return(
        <div className="message">
            <img src={props.image} alt="user" className="user-image" />
            <div className="message-content">
                <div className="message-expend-info">
                    <h3>{props.name}</h3>
                    <p>{props.time}</p>
                </div>
                <p style={{backgroundColor: props.color}}>{props.content}</p>
            </div>
        </div>
    )
}

export default Message;