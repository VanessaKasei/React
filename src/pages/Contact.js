import React from "react";
import "./Contact.css"

function Contact(){
    return(
        <div className="contact-page">
            <h1>Let's Connect!</h1>
            <div id="myicons">
                <i className='fa fa-facebook' id="facebook-icon"> </i>
                <a href="https://api.whatsapp.com/send?phone=+254710705715" target="_blank" rel="noopener noreferrer"> 
                <i className='fa fa-whatsapp' id="whatsapp-icon"></i>
                </a> 
                <a href='https://instagram.com/_uprime?igshid=OGQ5ZDc2ODk2ZA==' target="_blank" rel="noopener noreferrer">
                <i className='fa fa-instagram' id="instagram-icon"></i>
                </a>
            </div>
            <div className='contact-container'>
                <p id='contact'>CONTACT US TODAY:  
                <i className='fa fa-phone' id='phone'>  +254 701353 971</i>
                <i className='fa fa-envelope' id='mail'> :mwayiupright@gmail.com</i></p>
            </div>
        </div>
    );
}

export default Contact;