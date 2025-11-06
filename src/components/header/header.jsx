import "./header.css";

import Images from "../../pages/images/images";

function Header() 
{
    return (
        <header className="header">
            <div className="logo-container">
                <img src={Images.heart} alt="Logo" className="logo" />
                <h1 className="logo-text">HHC</h1>
            </div>

            <nav className="navbar">
                <ul className="nav-links">
                    <li id="home"><a href="/">Home</a></li>
                    <li id="care-giver"><a href="#">My Care Giver</a></li>
                    <li id="request-assistance"><a href="/request-assistance">Request Assistance</a></li>
                    <li id="chat"><a  href="/messages"><img src={Images.chat} alt="chat" /></a></li>
                    <li id="notification"><a href="/notifications"><img src={Images.bell} alt="notification" /></a></li>
                    <li id="account"><a href="/account">Account</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;