import React, { useState } from 'react';
import './Contact.css';
import TextField from '@mui/material/TextField';
import Name from '@mui/icons-material/Person';
import Phone from '@mui/icons-material/LocalPhone';
import Email from '@mui/icons-material/Email';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';
import { useSelector } from 'react-redux';
import axios from 'axios';

const submissionState = { idle: "send", submitting: "sending", submitted: "sent" };

const Contact = () => {
  const { toggle } = useSelector((store) => store.mode);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(submissionState.idle);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(submissionState.submitting);

    try {
      await axios.post('https://formspree.io/f/mdkojnrr', formData);
      setStatus(submissionState.submitted);
      alert('Message sent successfully!');
    } catch (error) {
      setStatus(submissionState.idle);
      alert('Error sending message, please try again.');
    }
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={toggle ? "contact-light" : "contact"}>
      <div className="contact-container">
        <div className="contact-info">
          <h2 className='hh2'>Contact Information</h2>
          <div className='cont'> <Name className='icon' /><p>Vinith</p> </div>
          <div className='cont'> <Email className='icon' /><p> vinithpoojary1303@gmail.com</p></div>
          <div className='cont'> <Phone className='icon' /> <p> +91 9986008497</p></div>
          <div className='cont'> <LinkedIn className='icon' /> <p> <a href="https://www.linkedin.com/in/vinithpoojary" target="_blank" rel="noopener noreferrer">vinith_poojary</a></p></div>
          <div className='cont'> <Instagram className='icon' /><p> <a href="https://www.instagram.com/vinith_poojary.03?igsh=MTNiYzNiMzkwZA==" target="_blank" rel="noopener noreferrer">vinith_poojary.03</a></p></div>
        </div>

        <div className="contact-form">
          <h2 className='hh3'>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <TextField
                id="outlined-basic"
                label="Your Name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <TextField
                id="outlined-basic"
                label="Your Email"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <TextField
                id="outlined-basic"
                className="message"
                label="Type Your Message here"
                variant="outlined"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" disabled={status === submissionState.submitting}>
              {status === submissionState.submitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
