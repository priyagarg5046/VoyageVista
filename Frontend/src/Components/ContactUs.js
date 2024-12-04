import React, { useState } from 'react';
<<<<<<< HEAD
import axios from 'axios';
=======
>>>>>>> 7bb4ee34a8a0cf16509c9105febc8dd319252a66
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
<<<<<<< HEAD
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

=======
    message: '' 
  });

>>>>>>> 7bb4ee34a8a0cf16509c9105febc8dd319252a66
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

<<<<<<< HEAD
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatusMessage(''); // Clear any previous status messages

    try {
      // Send data to the backend API
      const response = await axios.post('http://localhost:4444/VoyageVista/contactus', formData);
      console.log('Response:', response.data);

      // Success message
      setStatusMessage('Thank you for contacting us! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatusMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
=======
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
>>>>>>> 7bb4ee34a8a0cf16509c9105febc8dd319252a66
  };

  return (
    <div className="contact-us-wrapper">
      <div className="contact-us-container">
        <div className="contact-us-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Reach out to us with any questions or comments.</p>
        </div>

<<<<<<< HEAD
        {statusMessage && <p className="status-message">{statusMessage}</p>}

=======
>>>>>>> 7bb4ee34a8a0cf16509c9105febc8dd319252a66
        <form onSubmit={handleSubmit} className="contact-us-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

<<<<<<< HEAD
          <button type="submit" className="submit-contact" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
=======
          <button type="submit" className="submit-contact">
            Send Message
>>>>>>> 7bb4ee34a8a0cf16509c9105febc8dd319252a66
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
