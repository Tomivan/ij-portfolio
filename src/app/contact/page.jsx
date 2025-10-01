"use client";

import React from 'react';
import Sidebar from '../components/sidebar/sidebar.component';
import './contact.styles.css';

const Contact = () => {
    return(
        <div className="contact">
            <Sidebar />
            <h1>Get In Touch</h1>
            <p>I'm currently available for new opportunities. Whether you have a project to discuss or just <br />
            want to say hi, my inbox is always open.</p>
            <div className="contact-container">
                <form  className="form">
                    <label>Name</label>
                    <input type="text" placeholder="Your Name" />
                    <label>Email</label>
                    <input type="email" placeholder="Your Email" />
                    <label>Subject</label>
                    <input type="text" placeholder="What's this about?" />
                    <label>Message</label>
                    <textarea rows="6" placeholder="Your Message"></textarea>
                    <button type="submit">Send Message</button>
                </form>
                <div className="others">
                    <h2>Other Ways to Connect</h2>
                    <p><strong>Email</strong></p>
                    <p>iejinwa@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;