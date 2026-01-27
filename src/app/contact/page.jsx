"use client";

import React from 'react';
import Link from 'next/link';
import Sidebar from '../components/sidebar/sidebar.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './contact.module.css';

const Contact = () => {
    return(
        <div className={styles.contact}>
            <Sidebar />
            <div className={styles.contactTop}>
                <h1>Get In Touch</h1>
                <p>I'm currently available for new opportunities. Whether you have a project to discuss or just <br />
                want to say hi, my inbox is always open.</p>
            </div>
            <div className={styles.contactContainer}>
                <form  className={styles.form}>
                    <label className={styles.label}>Name</label>
                    <input type="text" placeholder="Your Name" className={styles.input}/>
                    <label className={styles.label}>Email</label>
                    <input type="email" placeholder="Your Email" className={styles.input}/>
                    <label className={styles.label}>Subject</label>
                    <input type="text" placeholder="What's this about?" className={styles.input} />
                    <label className={styles.label}>Message</label>
                    <textarea rows="6" placeholder="Your Message" className={styles.textarea}></textarea>
                    <button type="submit" className={styles.send}>Send Message</button>
                </form>
                <div className={styles.others}>
                    <h2>Other Ways to Connect</h2>
                    <Link href="https://www.linkedin.com/in/ijeoma-ejinwa-aa0446180 " target="_blank" className={styles.socials}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                    <Link href="https://twitter.com/iejinwa" target="_blank" className={styles.socials}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    <p><strong>Phone Number</strong></p>
                    <p> +234 8032742339</p>
                    <p><strong>Email</strong></p>
                    <p>ijeomaejinwa32@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;