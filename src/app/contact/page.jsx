"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Sidebar from '../components/sidebar/sidebar.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faMedium } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import styles from './contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    
    const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        // Validate form
        if (!formData.name || !formData.email || !formData.message) {
            setError('Please fill in all required fields');
            setLoading(false);
            return;
        }

        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            setError('Please enter a valid email address');
            setLoading(false);
            return;
        }

        try {
            // Send email using EmailJS
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject || 'No Subject',
                message: formData.message,
                to_email: 'ijeomaejinwa32@gmail.com'
            };

            const result = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            if (result.status === 200) {
                setSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                // Hide success message after 5 seconds
                setTimeout(() => setSuccess(false), 5000);
            }
        } catch (error) {
            console.error('Email sending failed:', error);
            setError('Failed to send message. Please try again or contact me directly at ijeomaejinwa32@gmail.com');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.contact}>
            <Sidebar />
            <div className={styles.contactTop}>
                <h1>Get In Touch</h1>
                <p>I’m open to new opportunities. Whether it’s a project you’d like to collaborate on or 
                    just to connect, let's create something together.
                </p>
            </div>
            
            {/* Success Message */}
            {success && (
                <div className={styles.successMessage}>
                    <p>Message sent successfully! I'll get back to you soon.</p>
                </div>
            )}
            
            {/* Error Message */}
            {error && (
                <div className={styles.errorMessage}>
                    <p>{error}</p>
                </div>
            )}

            <div className={styles.contactContainer}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label className={styles.label}>Name *</label>
                    <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name" 
                        className={styles.input}
                        required
                    />
                    
                    <label className={styles.label}>Email *</label>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email" 
                        className={styles.input}
                        required
                    />
                    
                    <label className={styles.label}>Subject</label>
                    <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?" 
                        className={styles.input} 
                    />
                    
                    <label className={styles.label}>Message *</label>
                    <textarea 
                        rows="6" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message" 
                        className={styles.textarea}
                        required
                    ></textarea>
                    
                    <button 
                        type="submit" 
                        className={styles.send}
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
                
                <div className={styles.others}>
                    <h2>Other Ways to Connect</h2>
                    <div className={styles.socialLinks}>
                        <Link href="https://www.linkedin.com/in/ijeoma-ejinwa-aa0446180" target="_blank" className={styles.socials}>
                            <FontAwesomeIcon icon={faLinkedin} />
                            <span>LinkedIn</span>
                        </Link>
                        <Link href="https://web.facebook.com/IjeomaEjinwaOfficial" target="_blank" className={styles.socials}>
                            <FontAwesomeIcon icon={faFacebook} />
                            <span>Facebook</span>
                        </Link>
                        <Link href="https://medium.com/@ijeomaejinwa32" target="_blank" className={styles.socials}>
                            <FontAwesomeIcon icon={faMedium} />
                            <span>Medium</span>
                        </Link>
                    </div>
                    
                    <div className={styles.contactInfo}>
                        <div className={styles.infoItem}>
                            <p><strong>Phone Number</strong></p>
                            <p>+234 8032742339</p>
                        </div>
                        <div className={styles.infoItem}>
                            <p><strong>Email</strong></p>
                            <p>ijeomaejinwa32@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;