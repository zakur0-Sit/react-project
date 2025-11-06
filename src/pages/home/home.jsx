import "./home.css";
import Header from "../../components/header/header";

import Images from "../images/images";

function Features(props) 
{
    return (
        <div className="feature">
            <img src={props.image} alt="img" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

function Contact(props)
{
    return (
        <div className="contact-info">
            <img src={props.image} alt="contact image" />
            <p>{props.info}</p>
        </div>
    )
}

function Home() {
  return (
    <div className="home">
        <Header/>
        <header className="home-header">
            <nav>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Contact</a></li>
                    <li></li>
                </ul>
                
            </nav>
        </header>
        <section className="home-section">
            <h1>Trusted People, Quality Care</h1>
            <div className="image-container">
                <img src={Images.img1} alt="image 1" /><img src={Images.img2} alt="image 2" /><img src={Images.img3} alt="image 3" />
            </div>
            <img src={Images.name} alt="image name" id="name-image"/>
            
            <div className="about-us">
                <img src={Images.about_us} alt="about-us-image" />
                <div id="about-us-info">
                    <h2>#About Us</h2>
                    <p>
                        We believe that everyone deserves high-quality, compassionate care in the comfort of their own home. <br />
                        Our dedicated team of caregivers, nurses, and healthcare professionals is committed to providing personalized services that enhance the well-being and independence of our clients.
                    </p>
                </div>
            </div>
            
            <div className="features">
                <h2>Features</h2>
                <div className="feature-container">
                    <Features image={Images.home_care_icon} title="Personalized Home Care" description="Customized care plans tailored to individual needs."/>
                    <Features image={Images.nursing_icon} title="Skilled Nursing" description="Professional medical care in the comfort of your home."/>
                    <Features image={Images.medicament_icon} title="Medication Management" description="Ensuring proper dosages and schedules."/>
                    <Features image={Images.availability_icon} title="24/7 Availability" description="Care when you need it, day or night."/>
                    <Features image={Images.companionship_icon} title="Companionship & Emotional Support" description="Friendly caregivers to reduce loneliness."/>
                    <Features image={Images.post_surgery_care_icon} title="Post-Surgery & Rehabilitation Care" description="Helping you recover faster at home."/>
                </div>

            </div>
        </section>
        <footer>
            <h2>Contact Us</h2>
            <div className="contact">
                <div id="contact-info">
                    <Contact image={Images.position} info="Address: 1234 Harmony Lane, Springfield, IL 62704"/>
                    <Contact image={Images.phone} info="Phone: (555) 987-6543"/>
                    <Contact image={Images.email} info="Email: care@yourhomehealth.com"/>
                    <Contact image={Images.site} info="Website: www.yourhomehealth.com"/>
                </div>
                <Contact image={Images.clock} info=" Office Hours: Monday – Friday: 8:00 AM – 6:00 PM Saturday – Sunday: 9:00 AM – 3:00 PM"/>
            </div>
        </footer>
    </div>
  );
}

export default Home;