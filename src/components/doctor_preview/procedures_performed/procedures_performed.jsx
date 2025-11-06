import "./procedures_performed.css";
import Images from "../../../pages/images/images";

function Procedures() {
    const procedures = [
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
        <div className="procedures">
            <div className="procedures-content">
                <div className="procedures-title">
                    <img src={Images.procedures} alt="procedures" />
                    <h3>Procedures Performed</h3>
                </div>
                <div className="procedures-text">
                    <ol>
                        {procedures.map((procedures, index) => (
                            <li key={index}>{procedures}</li>
                        ))}
                    </ol>
                    <p><u>View more</u></p>
                </div>
            </div>
        </div>
    );
}

export default Procedures;