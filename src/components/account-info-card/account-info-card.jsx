import "./account-info-card.css";

import Images from "../../pages/images/images";

function AccountInfoCard(props) 
{
    return (
        <div className="account-info-card">
            <div className="info-card">
                <h4>{props.option}</h4>
                <p>{props.value}</p>
            </div>
            <img src={Images.settings} alt="image" />
        </div>
    )
}

export default AccountInfoCard;