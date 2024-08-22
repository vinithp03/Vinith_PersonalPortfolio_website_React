// Contact.js
import React from 'react';
import './Contact.css';
import TextField from '@mui/material/TextField';
import Name from '@mui/icons-material/Person';
import Phone from '@mui/icons-material/LocalPhone';
import Email from '@mui/icons-material/Email';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';
import { useSelector } from 'react-redux';

const Contact = () => {
  const { toggle } = useSelector((store) => store.mode);
  return (
    <div className={toggle ? "contact-light" : "contact"}>
      <div className="contact-container">
        <div className="contact-info">
          <h2 className='hh2'>Contact Information</h2>
          <div className='cont'> <Name className='icon' /><p>Vinith</p> </div>
          <div className='cont'> <Email className='icon' /><p> vinithpoojary1303@gmail.com</p></div>
          <div className='cont'> <Phone className='icon' /> <p> +91 9986008497</p></div>
          <div className='cont'> <LinkedIn className='icon' /> <p> <a href="https://www.linkedin.com/in/vinithpoojary" target="_blank" rel="noopener noreferrer">linkedin.com/in/vinithpoojary</a></p></div>
          <div className='cont'> <Instagram className='icon' /><p> <a href="https://www.instagram.com/vinith_poojary.03?igsh=MTNiYzNiMzkwZA==" target="_blank" rel="noopener noreferrer">instagram.com/vinith_poojary.03</a></p></div>
        </div>
        <div className="contact-form">
          <h2 className='hh3'>Contact Me</h2>
          <form>
            <div className="form-group">
              <TextField id="outlined-basic" label="Your Name" variant="outlined" />
            </div>
            <div className="form-group">
              <TextField id="outlined-basic" label="Your Email" variant="outlined" />
            </div>
            <div className="form-group">
              <TextField id="outlined-basic" className="message" label="Type Your Message here" variant="outlined" />
            </div>
            <button type="submit" >Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
