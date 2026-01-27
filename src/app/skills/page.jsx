"use client";

import React from 'react';
import Sidebar from '../components/sidebar/sidebar.component';
import styles from './skills.module.css';

const Skills = () => {
    const coreSkills = [
        "Community Management & Engagement",
        "Digital Strategy & Campaign Execution",
        "Content Planning & Cross-Platform Communication",
        "Data Analysis & Performance Reporting",
        "Insights Writing & Thought Leadership",
        "Social Media Management",
        "Stakeholder & Client Relationship Management",
        "Agile Methodologies (Scrum Master, Product Owner)",
        "Project & Operations Management",
        "Copywriting, Editing & Storytelling",
        "Public Relations & Media Coordination",
        "Customer Experience Optimization",
        "Team Collaboration & Cross-Functional Alignment",
        "Brand Management & Audience Insights"
    ];

    const certifications = [
        "Certified Scrum Master (CSM)",
        "Certified Product Owner (CPO)",
        "Agile Scrum Certification",
        "Design Thinking Certification",
        "Digital Marketing & Campaign Strategy (Agency-Based Experience)",
        "Data Analysis for Digital Reporting",
        "Community Management & Online Engagement Strategies"
    ];

    return (
        <div className={styles.skills}>
            <Sidebar />
            <div className={styles.container}>
                <h1>Core Skills</h1>
                <div className={styles.skillsContainer}>
                    <div className={styles.skillsCards}>
                        {coreSkills.map((skill, index) => (
                            <div key={index} className={styles.skill}>
                                <img src='' alt='' />
                                <p>{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Section */}
                <div className={styles.educationSection}>
                    <h2>Education</h2>
                    <div className={styles.educationCard}>
                        <h3>B.Sc., Industrial Chemistry</h3>
                        <p className={styles.institution}>Abia State University, Nigeria</p>
                    </div>
                </div>

                {/* Certifications Section */}
                <div className={styles.certificationsSection}>
                    <h2>Certifications and Training</h2>
                    <div className={styles.certificationsList}>
                        {certifications.map((cert, index) => (
                            <div key={index} className={styles.certification}>
                                <p>{cert}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;