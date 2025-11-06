import "./doctor_account.css";
import Header from "../../components/header/header";
import Images from "../images/images";
import PendingCard from "../../components/pending_card/pending_card";
import InProcessCard from "../../components/in_process_card/in_process_card";

function DoctorAccount()
{
    return(
        <div className="doctor-account-page">
            <Header/>
            <div className="account-section">
                <img src={Images.bg} alt="background" />
                <div className="account-content">
                    <div className="account-options">
                        <h3 id="patients">Patients List</h3>
                        <h3 id="profile">Profile</h3>
                        <h3 id="options">Options</h3>
                        
                    </div>

                    <div className="patients-list">
                        <div id="pending-patients">
                            <h2>Pending</h2>
                            <hr />
                        </div>
                        <PendingCard name="John Doe" topic="Heart Surgery" />
                        <PendingCard name="Jane Smith" topic="Knee Replacement" />
                        <PendingCard name="Michael Johnson" topic="Hip Replacement" />

                        <br />
                        <div id="in-process-patients">
                            <h2>In Process</h2>
                            <hr />
                        </div>
                        <InProcessCard name="Alice Brown" />
                        <InProcessCard name="Bob Davis" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorAccount;