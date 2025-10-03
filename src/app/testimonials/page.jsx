"use client";

import React from 'react';
import Sidebar from '../components/sidebar/sidebar.component';
import styles from './testimonials.module.css';

const Testimonials = () => {
    return(
        <div className={styles.testimonials}>
            <Sidebar />
            <div className={styles.testimonialTop}>
                <h1>What Others Say</h1>
                <p>Testimonies from clients and colleagues I've had the pleasure to work with</p>
            </div>
            <div className={styles.testimonialContainer}>
                <div className={styles.testimonialCard}>
                    <div className={styles.cardTop}>
                        <img src='' alt='' />
                        <div className={styles.cardInfo}>
                            <h2>Jane Doe</h2>
                            <p>Digital Strategist</p>
                        </div>
                    </div>
                    <p>Working with Alex has been a great pleasure</p>
                </div>
                <div className={styles.testimonialCard}>
                    <div className={styles.cardTop}>
                        <img src='' alt='' />
                        <div className={styles.cardInfo}>
                            <h2>Jane Doe</h2>
                            <p>Digital Strategist</p>
                        </div>
                    </div>
                    <p>Working with Alex has been a great pleasure</p>
                </div>
                <div className={styles.testimonialCard}>
                    <div className={styles.cardTop}>
                        <img src='' alt='' />
                        <div className={styles.cardInfo}>
                            <h2>Jane Doe</h2>
                            <p>Digital Strategist</p>
                        </div>
                    </div>
                    <p>Working with Alex has been a great pleasure</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;