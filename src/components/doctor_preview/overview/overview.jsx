import "./overview.css";
import Images from "../../../pages/images/images";

function Overview()
{
    return(
        <div className="overview">
            <div className="overview-content">
                <div className="overview-title">
                    <img src={Images.overview} alt="overview" />
                    <h3>Overview</h3>
                </div>
                <div className="overview-text">
                    <p>
                        Sharell J. Thaxton is passionate about providing his patients with gentle, effective dental care that helps them develop great oral health and wonderful smiles.
                        He is equally passionate about the relationships he develops with each patient, becoming friends with them over the course of treatment, and sharing stories and laughter.
                        “I love my career, meeting and working with so many new and unique people. As a dentist, I am able to enjoy one-on-one face time with my patients and really get to know them and their families. I strive to make a positive impact in my community, by providing exceptional oral health services in a relaxed and professional setting.” – Sharell J. Thaxton
                        He is adept at working with patients who have dental-related phobias and anxieties, providing reassurance and encouragement to help them work through their concerns and learn to relax and be comfortable while in his care.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Overview;