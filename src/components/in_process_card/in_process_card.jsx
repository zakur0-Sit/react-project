import "./in_process_card.css";
import Images from "../../pages/images/images";

function InProcessCard({ name})
{
    return(
        <div className="in-process-card">
            <img src={Images.redirect} alt="redirect" />
            <h4><strong>Full Name : </strong>{name}</h4>
            <button>End Session</button>
        </div>
    )
}

export default InProcessCard;