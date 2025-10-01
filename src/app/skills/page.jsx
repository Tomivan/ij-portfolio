"use client";

import React from 'react';
import Sidebar from '../components/sidebar/sidebar.component';
import './skills.styles.css';

const Skills = () => {
    return(
        <div className="skills">
            <Sidebar />
            <h1>Technical Skills</h1>
            <div className="skills-container">
                <h2>Community Management</h2>
                <hr />
                <div className="skills-cards">
                    <div className="skill">
                        <img src='' alt='' />
                        <p>Community Building</p>
                    </div>
                    <div className="skill">
                        <img src='' alt='' />
                        <p>Community Building</p>
                    </div>
                    <div className="skill">
                        <img src='' alt='' />
                        <p>Community Building</p>
                    </div>
                    <div className="skill">
                        <img src='' alt='' />
                        <p>Community Building</p>
                    </div>
                </div>
            </div>
            <div className="skills-container">
                <h2>Data Analysis</h2>
                <hr />
                <div className="skills-cards">
                    <div className="skill">
                        <img src='' alt='' />
                        <p>Community Building</p>
                    </div>
                    <div className="skill">
                        <img src='' alt='' />
                        <p>Community Building</p>
                    </div>
                    <div className="skill">
                        <img src='' alt='' />
                        <p>Community Building</p>
                    </div>
                    <div className="skill">
                        <img src='' alt='' />
                        <p>Community Building</p>
                    </div>
                </div>
            </div>
            <div className="skills-container">
                <h2>Digital Strategy</h2>
                <hr />
                <div className="skills-cards">
                    <div className="skill">
                        <img src='' alt='' />
                        <p>Community Building</p>
                    </div>
                    <div className="skill">
                        <img src='' alt='' />
                        <p>Community Building</p>
                    </div>
                    <div className="skill">
                        <img src='' alt='' />
                        <p>Community Building</p>
                    </div>
                    <div className="skill">
                        <img src='' alt='' />
                        <p>Community Building</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;