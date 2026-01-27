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
        {
            id: 7,
            brand: "Various FMCG Brands",
            title: "Community Management",
            period: "Various Projects",
            description: "Community Management for youth-focused, social-impact and FMCG campaigns across Instagram, TikTok, Facebook and X/Twitter.",
            category: "Community Management"
        }
    ];

    const volunteerWork = [
        {
            id: 1,
            brand: "Jane and Janet Show",
            title: "Co-host & Co-producer",
            period: "Nov 2017 – Nov 2019",
            description: "Co-produced 53 episodes and contributed to creative direction. Increased the show's relevance and audience engagement.",
            category: "Media Production"
        }
    ];

    return(
        <div className={styles.work}>
            <Sidebar />
            <div className={styles.workTop}>
                <h1>My Work</h1>
                <p>Explore a selection of projects and volunteer work</p>
            </div>
            
            <div className={styles.workBottom}>
                <h2>Projects</h2>
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

                <h2 className={styles.sectionTitle}>Volunteer Work</h2>
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
                </div>

                {/* Additional Experience Section */}
                <div className={styles.additionalInfo}>
                    <h2>Additional Experience</h2>
                    <div className={styles.additionalList}>
                        <div className={styles.additionalItem}>
                            <h4>Published Writer</h4>
                            <p>Medium articles exploring digital culture, feminism, and societal insights</p>
                        </div>
                        <div className={styles.additionalItem}>
                            <h4>Event Organizer</h4>
                            <p>Large-scale Twitter Spaces/Webinars featuring global experts across leadership, digital transformation and entrepreneurship topics</p>
                        </div>
                        <div className={styles.additionalItem}>
                            <h4>Brand Development</h4>
                            <p>Created comprehensive Brand Style Kits and Digital Strategy Plans</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works;