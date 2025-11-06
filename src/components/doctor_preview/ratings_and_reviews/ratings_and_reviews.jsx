import "./ratings_and_reviews.css";
import Images from "../../../pages/images/images";
import UserReview from "./user_review/user_review";

function Reviews()
{
    return(
        <div className="reviews">
            <div className="reviews-content">
                <div className="reviews-title">
                    <img src={Images.review} alt="review" />
                    <h3>Ratings and Reviewsd</h3>
                </div>
                <div className="reviews-text">
                    <UserReview/>
                    <UserReview/>
                </div>
            </div>
        </div>
    )
}

export default Reviews;