import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaEnvelope
} from "react-icons/fa";
const Contact = () => {

  const generateWhatsAppLink = () => {
    const phoneNumber = '8271593648'; // Replace with the desired phone number
    const message = 'Hii'; // Replace with your message
    const encodedMessage = encodeURIComponent(message);
    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
}

  return (
    <div className="aboutContainer">

      <div className="contactContainer">
        <div className="information">
          <h1>Contact Us</h1>
          <p>विशेष जानकारी, सुझाव या शिकायत के लिए सम्पर्क करें।</p>

          <div className="contactInform">
            <div className="contact">
              <h3>Contact Information</h3>
              <p>say something to start a live chat!</p>

              <ul className="menuItems">
              <a className="menuItem" href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                            <p>+91 9199226410</p>
                        </a>
                <li className="menuItem"><FaEnvelope /> <p>doctorseva06@gmail.com</p></li>
                <li className="menuItem"><FaMapMarkerAlt /> <p>New Bank Colony, Pratap Nagar, Chapra, Zail Shahar, Bihar 841301</p></li>

              </ul>

              <div className="socialIcons">
              <a className="icon" href="https://www.facebook.com/profile.php?id=100094951843829&mibextid=avESrC" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a className="icon" href="">
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
           
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224.54717423019332!2d84.72152543317435!3d25.7786617807377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992bbc9b272c691%3A0xfab7205074509b59!2sDOCTOR%20SEVA!5e0!3m2!1sen!2sin!4v1694627356652!5m2!1sen!2sin" 
                  
                  allowfullscreen=''
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                  className='map'
                  ></iframe>

        
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact