"use client"

import React from "react";
import "./sidebar.styles.css";

const Sidebar = () => {
    return(
        <div className="sidebar">
            <h1>Ijeoma Ejinwa</h1>
            <div className="right">
                <ul>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Testimonials</li>
                    <li>Contact</li>
                </ul>
                <button>Resume</button>
            </div>
        </div>
    )
}

export default Sidebar;