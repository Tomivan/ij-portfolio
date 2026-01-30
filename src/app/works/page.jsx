"use client"

import React from 'react';
import Sidebar from '../components/sidebar/sidebar.component';
import styles from'./work.module.css';

const Works = () => {
    const projects = [
        {
            id: 1,
            brand: "Nelfund",
            title: "Digital Strategy & Community Management",
            period: "May–Nov 2025",
            description: "Designed weekly content calendars, community conversations, social storytelling formats, and educational breakdowns to boost platform awareness and improve public understanding of the loan scheme.",
            category: "Digital Strategy"
        },
        {
            id: 2,
            brand: "McVities Nigeria",
            title: "Digital Campaign Lead",
            period: "May–Nov 2025",
            description: "Produced Gen Z–centered social content, challenge prompts, caption messaging, influencer integration support and entry-engagement strategies for the #MyCourseMyMcVities challenge.",
            category: "Campaign Management"
        },
        {
            id: 3,
            brand: "Medium",
            title: "Published Writer & Thought Leader",
            period: "Ongoing",
            description: "Creating thought leadership and social commentary articles that explore digital culture, feminism and societal insights.",
            category: "Content Creation"
        },
        {
            id: 4,
            brand: "Agileseventeen LLC",
            title: "Digital Campaigns & Brand Strategy",
            period: "2020–2024",
            description: "Designed and executed digital campaigns. Created Agileseventeen's Brand Style Kit, Digital Strategy Plan and monthly communication assets. Organized large-scale Twitter Spaces/Webinars featuring global experts.",
            category: "Brand Strategy"
        },
        {
            id: 5,
            brand: "Endsarsarchived",
            title: "Project Lead & Digital Management",
            period: "2020–2021",
            description: "Managed digital crowdsourcing and verification workflows for nationwide protest documentation. Executed digital campaigns for the archival project.",
            category: "Project Management"
        },
        {
            id: 6,
            brand: "Black Girls Like Me",
            title: "Digital Campaign Execution",
            period: "Various Projects",
            description: "Designed and executed digital campaigns for community-focused initiatives.",
            category: "Community Engagement"
        },
    ];

    return(
        <div className={styles.work}>
            <Sidebar />
            <div className={styles.workTop}>
                <h1>My Work</h1>
                <p>Explore a selection of projects and volunteer work</p>
            </div>
            
            <div className={styles.workBottom}>
                <h2>Projects and Volunteer Work</h2>
                <div className={styles.projectsGrid}>
                    {projects.map((project) => (
                        <div key={project.id} className={styles.card}>
                            <div className={styles.brandHeader} style={{ backgroundColor: '#1193d4' }}>
                                <h3 className={styles.brandName}>{project.brand}</h3>
                                <span className={styles.category}>{project.category}</span>
                            </div>
                            <div className={styles.cardContent}>
                                <h4 className={styles.projectTitle}>{project.title}</h4>
                                <p className={styles.period}>{project.period}</p>
                                <p className={styles.description}>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* <h2 className={styles.sectionTitle}>Volunteer Work</h2>
                <div className={styles.projectsGrid}>
                    {volunteerWork.map((work) => (
                        <div key={work.id} className={styles.card}>
                            <div className={styles.brandHeader} style={{ backgroundColor: '#1193d4' }}>
                                <h3 className={styles.brandName}>{work.brand}</h3>
                                <span className={styles.category}>{work.category}</span>
                            </div>
                            <div className={styles.cardContent}>
                                <h4 className={styles.projectTitle}>{work.title}</h4>
                                <p className={styles.period}>{work.period}</p>
                                <p className={styles.description}>{work.description}</p>
                            </div>
                        </div>
                    ))}
                </div> */}

                <div className={styles.additionalInfo}>
                    <h2>Additional Experience</h2>
                    <div className={styles.additionalList}>
                        <div className={styles.additionalItem}>
                            <h4>Published Writer</h4>
                            <p>Published original articles on Medium, sharing clear and practical insights 
                                on digital culture, conflict resolution, feminism and community building 
                                with a growing audience.
                            </p>
                        </div>
                        <div className={styles.additionalItem}>
                            <h4>Event Organizer</h4>
                            <p>Organized and supported both online and in-person events, managing planning, 
                                coordination, promotion and execution to deliver smooth, engaging experiences 
                                for participants.
                            </p>
                        </div>
                        <div className={styles.additionalItem}>
                            <h4>Brand Development</h4>
                            <p>Supported brand development by shaping clear brand messaging and voice 
                                across digital platforms. Also helped ensure consistency in how brands 
                                communicate, collaborate with teams on content and campaigns and use 
                                community engagement to build trust and strengthen brand perception.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works;