"use client";
import React from "react";
import "./experience.styles.css";
import Sidebar from "../components/sidebar/sidebar.component";

const Experience = () => {
    return(
        <div className="experiences">
            <Sidebar />
            <div className="top">
                <div className="top-left">
                    <img src="/images/exp-img.png" alt="Ijeoma working" />
                </div>
                <div className="top-right">
                    <h1>Ijeoma Ejinwa</h1>
                    <p><span>Community Manager, Data Analyst and Digital Strategist</span></p>
                    <p>Passionate about building communities, analyzing data, and crafting digital strategies that <br />
                    drive growth. I thrive at the intersection of human connection and data-driven insights</p>
                </div>
            </div>
            <div className="bottom">
                <h2 className="professional">Professional Experience</h2>
                <div className="experience">
                    <p>Image</p>
                    <div className="experience-right">
                        <p><strong>Community Manager</strong></p>
                        <p>Managed social media channels, content calendars, and community events. fostering a vibrant and<br/>
                        supportive online envinronment</p>
                        <p>Managed social media channels, content calendars, and community events. fostering a vibrant and<br/>
                        supportive online envinronment</p>
                    </div>
                </div>
                <div className="experience">
                    <p>Image</p>
                    <div className="experience-right">
                        <p><strong>Data Analyst</strong></p>
                        <p>Managed social media channels, content calendars, and community events. fostering a vibrant and<br/>
                        supportive online envinronment</p>
                        <p>Managed social media channels, content calendars, and community events. fostering a vibrant and<br/>
                        supportive online envinronment</p>
                    </div>
                </div>
                <div className="experience">
                    <p>Image</p>
                    <div className="experience-right">
                        <p><strong>Digital Strategist</strong></p>
                        <p>Managed social media channels, content calendars, and community events. fostering a vibrant and<br/>
                        supportive online envinronment</p>
                        <p>Managed social media channels, content calendars, and community events. fostering a vibrant and<br/>
                        supportive online envinronment</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;