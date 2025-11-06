import "./condition_treated.css";
import Images from "../../../pages/images/images";

function Condition() {
    const conditions = [
        "Tooth Decay",
        "Mouth Sores",
        "Tooth Erosion",
        "Tooth Aches",
        "Gum Disease",
        "Tooth Sensitivity",
        "Tooth Cavity",
        "Gingival and Periodontal Diseases",
        "Tooth Abscess",
        "Tooth Damage"
    ];

    return (
        <div className="condition">
            <div className="condition-content">
                <div className="condition-title">
                    <img src={Images.condition} alt="condition" />
                    <h3>Condition Treated</h3>
                </div>
                <div className="condition-text">
                    <ol>
                        {conditions.map((condition, index) => (
                            <li key={index}>{condition}</li>
                        ))}
                    </ol>
                    <p><u>View more</u></p>
                </div>
            </div>
        </div>
    );
}

export default Condition;