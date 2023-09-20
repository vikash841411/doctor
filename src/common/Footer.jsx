import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaMapMarkerAlt,
    FaWhatsapp,
    FaEnvelope
} from "react-icons/fa";
import './style.scss'



const Footer = () => {

    const generateWhatsAppLink = () => {
        const phoneNumber = '9199226410'; // Replace with the desired phone number
        const message = 'Hello Doctor'; // Replace with your message
        const encodedMessage = encodeURIComponent(message);
        return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    }


    return (
        <footer className="footer">
            <div className="contentWrapper">
            <div className="discription">
                    <h1 style={{fontWeight:"bold", color:"#2CA0C2"}}>DOCTOR SEVA</h1>
                    <p>Our specialized support center is here to assist with all your needs, typically responding within 1-2 hours.</p>
                </div>


                <ul className="menuItems">
                    <h2>Contact us</h2>
                    <li className="menuItem"><FaMapMarkerAlt /> <p>New Bank Colony, Pratap Nagar, Chapra, Zail Shahar, Bihar 841301</p></li>
                 
                        <a className="menuItem" href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                            <p>+91 9199226410</p>
                        </a>
                     
                    <li className="menuItem"><FaEnvelope /> <p>doctorseva06@gmail.com</p></li>
                </ul>
                <div className="followus">
                    <h2>Follow us</h2>
                    <div className="socialIcons">
                        <a className="icon" href="https://www.facebook.com/profile.php?id=100094951843829&mibextid=avESrC" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a className="icon" href="" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a className="icon" href="" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>


                        <a className="icon" href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>



                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;