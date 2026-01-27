"use client";
import React from "react";
import Image from "next/image";
import IJ from "../../assets/images/work-ij.jpeg";
import styles from "./experience.module.css";
import Sidebar from "../components/sidebar/sidebar.component";

const Experience = () => {
    return(
        <div className={styles.experiences}>
            <div className={styles.padding}>
                <Sidebar  />
            </div>
            <div className={styles.top}>
                <div className={styles["top-left"]}>
                    <Image src={IJ} alt="Ijeoma working" className={styles["top-left-image"]} />
                </div>
                <div className={styles['top-right']}>
                    <h1>Ijeoma Ejinwa</h1>
                    <p className={styles.span}>Community Manager, Data Analyst and Digital Strategist</p>
                    <p>Results-driven Community Manager and Digital Strategist with strong experience in 
                        managing online communities, executing digital campaigns and delivering data-informed 
                        communication strategies. Currently at Interactive CT, where I oversee community 
                        engagement, cross-platform content execution, and performance reporting for large-scale 
                        digital projects.
                    </p>
                    <p>Skilled in digital strategy, agile methodologies, audience insights and stakeholder
                        management, with a proven record of supporting high-impact campaigns for brands 
                        such as Nelfund, MTN and McVitie’s Nigeria. Adept at aligning content, analytics 
                        and engagement initiatives to enhance brand visibility and strengthen community 
                        trust.
                    </p>
                    <p>Bringing a background in senior leadership, public engagement and cross-functional 
                        collaboration. I excel at driving structured communication processes, optimizing 
                        user engagement and supporting organizations in achieving measurable digital growth.
                    </p>
                </div>
            </div>
            <div className={styles.bottom}>
                <h2 className={styles.h2}>Professional Experience</h2>
                
                <div className={styles.experience}>
                    <p><strong>Digital Strategist | Data Analyst | Community Manager — Interactive CT</strong></p>
                    <p><em>May 2025 – November 2025</em></p>
                    <ul>
                        <li>Led strategy development and community execution for multiple high-engagement digital campaigns across social platforms.</li>
                        <li>Managed cross-channel content calendars, audience segmentation and daily community engagement for clients in education, FMCG and public-sector spaces.</li>
                        <li>Designed digital strategies that increased reach, engagement and audience participation across targeted demographics.</li>
                        <li>Analyzed campaign performance using data dashboards, analytics tools and reporting frameworks to guide optimization decisions.</li>
                        <li>Coordinated influencer collaborations and user-generated content drives to amplify campaign visibility.</li>
                        <li>Collaborated with creative, media buying and data teams to align messaging, content and paid media objectives.</li>
                        <li>Built and nurtured online communities through relatable content, interactive series, live discussions and social listening insights.</li>
                    </ul>
                    <p><strong>Key Campaigns Executed (May–Nov 2025):</strong></p>
                    <ul>
                        <li><strong>Nelfund Digital Awareness Campaign:</strong> Developed and managed content pillars, educational storytelling, community engagement themes and weekly campaigns.</li>
                        <li><strong>McVitie's #MyCourseMyMcVities Challenge:</strong> Led content ideation, IG/TikTok storytelling, entry-driven engagement strategies, and Gen Z-focused captions.</li>
                        <li>Drove analytics reporting for both campaigns, identifying trends and user behaviour patterns.</li>
                    </ul>
                </div>

                <div className={styles.experience}>
                    <p><strong>Senior Director / Country Manager — Agileseventeen LLC</strong></p>
                    <p><em>February 2022 – August 2024</em></p>
                    <ul>
                        <li>Lead national operations, including recruitment, performance reviews, budgeting, staff development and cross-functional collaborations.</li>
                        <li>Manage Nigeria's strategic direction, ensuring alignment with global objectives and brand standards.</li>
                        <li>Build trusted relationships with clients, partners and teams across regions.</li>
                        <li>Oversee communication programs, brand visibility and community-facing engagements.</li>
                        <li>Implement agile practices across teams to strengthen productivity, transparency and delivery.</li>
                        <li>Develop workflows, operational processes and structured onboarding systems.</li>
                        <li>Champion organizational culture, employee engagement and leadership programs.</li>
                    </ul>
                </div>

                <div className={styles.experience}>
                    <p><strong>Director, Public Engagement — Agileseventeen LLC</strong></p>
                    <p><em>April 2020 – February 2022</em></p>
                    <ul>
                        <li>Produced communication materials across blogs, press releases, videos, newsletters and talking points.</li>
                        <li>Coordinated media interviews, conferences, leadership activities and digital campaigns.</li>
                        <li>Managed social media content across multiple platforms, increasing digital visibility.</li>
                        <li>Designed the organization's brand style kit and coordinated cross-platform brand consistency.</li>
                        <li>Supported production teams with editing, content strategy and digital asset development.</li>
                        <li>Facilitated Twitter/X virtual conversations and webinars featuring global experts.</li>
                        <li>Managed staff onboarding, documentation processes and leadership meetings.</li>
                    </ul>
                </div>

                <div className={styles.experience}>
                    <p><strong>Production Intern (Continuity) — The Herbert Macaulay Affair</strong></p>
                    <p><em>May – July 2019</em></p>
                    <ul>
                        <li>Maintained continuity logs, assisted directors, and ensured filming accuracy.</li>
                        <li>Interpreted scripts and supported actors in scene execution.</li>
                    </ul>
                </div>

                <div className={styles.experience}>
                    <p><strong>Co-host / Co-producer — The Jane and Janet Show</strong></p>
                    <p><em>November 2017 – November 2019</em></p>
                    <ul>
                        <li>Co-produced 53 episodes and contributed to creative direction.</li>
                        <li>Increased the show's relevance and audience engagement.</li>
                    </ul>
                </div>

                <div className={styles.experience}>
                    <p><strong>Sales & Customer Service Representative — Shell East Staff Investment Cooperative Society LTD</strong></p>
                    <p><em>January – October 2014</em></p>
                    <ul>
                        <li>Supported sales, scheduling and client relationship management.</li>
                        <li>Managed customer accounts and documentation workflows.</li>
                    </ul>
                </div>

                <div className={styles.experience}>
                    <p><strong>Lab Assistant (Industrial Training) — Shell Petroleum Development Company</strong></p>
                    <p><em>April – November 2007</em></p>
                    <ul>
                        <li>Conducted lab preparations, data logging, and equipment setup.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience;