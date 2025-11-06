import "./account.css";
import Header from "../../components/header/header";
import Images from "../images/images";
import AccountInfoCard from "../../components/account-info-card/account-info-card";

function Account() 
{
    return(
        <div className="account-page">
            <Header/>
            <div className="account-section">
                <img src={Images.bg} alt="background" />
                <div className="account-content">
                    <div className="account-options">
                        <h3 id="profile">Profile</h3>
                        <h3 id="options">Options</h3>
                        <h3 id="family">Family Members</h3>
                    </div>

                    <div className="account-info">
                        <div id="personal-info">
                            <h2>Personal Information</h2>
                            <hr />
                        </div>
                        
                        <AccountInfoCard option="Full Name" value="John Doe" />
                        <AccountInfoCard option="Date of Birth" value="21/03/1999"/>
                        <AccountInfoCard option="Sex" value="Male"/>
                        <AccountInfoCard option="City" value="New York"/>
                        <br />
                        <div id="documents">
                            <h2>Documents</h2>
                            <hr />
                        </div>
                        
                        <button>Add New +</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;
