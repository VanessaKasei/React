import React from "react";
import './Contact.css'
function Contact () {
    return (
        <section id="contact">
            <h1 id="contact-info">Let's connect!</h1>
            <div id="myicons">    
                <a href="https://api.whatsapp.com/send?phone=+254710705715" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-whatsapp" id="whatsapp-icon"></i>
                </a>
                <a href="https://www.linkedin.com/in/vanessa-kasei-ba91b8237/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin" id="linkedin-icon"></i>
                </a>
                <a href="https://twitter.com/coderonX" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter" id="twitter-icon"></i>
                </a>
            </div>
            <div className='contact-container'>
                <p id='contact'>Contact me on:  
                <i className='fa fa-phone' id='phone'>  +254 710705715</i></p>
            <p>Looking forward to Hearing from you and help you find your dream home!</p>
            </div>
        </section>
    );
}

export default Contact;