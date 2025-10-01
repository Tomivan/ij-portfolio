"use client";

import React from 'react';
import Sidebar from '../components/sidebar/sidebar.component';
import './skills.styles.css';

const Testimonials = () => {
    return(
        <div className="testimonials">
            <Sidebar />
            <h1>What Others Say</h1>
            <p>Testimonies from clients and colleagues I've had the pleasure to work with</p>
            <div className="testimonials-container">
                <div className="testimony-card">
                    <div className="card-top">
                        <img src='' alt='' />
                        <div className="card-info">
                            <h2>Jane Doe</h2>
                            <p>Digital Strategist</p>
                        </div>
                    </div>
                    <p>Working with Alex has been a great pleasure</p>
                </div>
                <div className="testimony-card">
                    <div className="card-top">
                        <img src='' alt='' />
                        <div className="card-info">
                            <h2>Jane Doe</h2>
                            <p>Digital Strategist</p>
                        </div>
                    </div>
                    <p>Working with Alex has been a great pleasure</p>
                </div>
                <div className="testimony-card">
                    <div className="card-top">
                        <img src='' alt='' />
                        <div className="card-info">
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