import "./user_review.css";
import Images from "../../../../pages/images/images";

function UserReview() 
{
    return(
        <div className="user-review">
            <div className="stars">
                <img src={Images.star} alt="star" />
                <img src={Images.star} alt="star" />
                <img src={Images.star} alt="star" />
                <img src={Images.star} alt="star" />
                <img src={Images.star} alt="star" />
            </div>
            <p>
                Just a wonderful experience from start to finish, Sharell J. Thaxton 
                is kind, compassionate and professional. I couldn’t be more satisfied. 
                Highly recommended.
            </p>
            <p id="date">
                January 31, 2025
            </p>
        </div>
    )
}

export default UserReview;