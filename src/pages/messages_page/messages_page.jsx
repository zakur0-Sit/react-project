import "./messages_page.css";
import Header from "../../components/header/header";
import DoctorChat from "../../components/doctor_chat/doctor_chat";
import Message from "../../components/message/message";
import {useState} from "react";

import Images from "../images/images";

function MessagesPage() 
{
    return (
        <div className="messages-page">
            <Header/>
            <div className="messages-page-section">
                <div className="message-page-container">
                    <div className="users-message">
                        <div className="search-user">
                            <img src={Images.search} alt="search" />
                            <input type="text" placeholder="Search for a user" />
                            
                        </div>
                        <DoctorChat image={Images.doc2} name="Sharell J. Thaxton" last_message="You: Thanks" last_enter="11.04.2025" />
                    </div>
                    <div className="message-page-content">
                        <div className="message-page-header">
                            <div className="doctor-header">
                                <img src={Images.doc2} alt="doc_img" />
                                <h3 className="doctor-name">Sharell J. Thaxton</h3>
                            </div>
                            
                            <div className="call">
                                <img src={Images.audio_call} className="audio-call" />
                                <img src={Images.video_call} className="video-call" />
                            </div>
                            
                        </div>
                        <div className="message-page-box">
                            <Message image={Images.doc2} name="Sharell J. Thaxton" time="11:00" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" color="#D6E5D7"/>
                            <Message image={Images.profile_image} name="You" time="11:01" content="Thanks" color="#D4EAFF"/>
                        </div>
                        <div className="message-page-input">
                            <input type="text" placeholder="Type a message..." />
                            <img src={Images.send} alt="send" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessagesPage;