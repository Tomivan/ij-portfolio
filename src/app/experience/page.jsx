"use client";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLineChart, faBullhorn } from '@fortawesome/free-solid-svg-icons';
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
                    <img src="/images/exp-img.png" alt="Ijeoma working" />
                </div>
                <div className={styles['top-right']}>
                    <h1>Ijeoma Ejinwa</h1>
                    <p className={styles.span}>Community Manager, Data Analyst and Digital Strategist</p>
                    <p>Passionate about building communities, analyzing data, and crafting digital strategies that <br />
                    drive growth. I thrive at the intersection of human connection and data-driven insights</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <h2 className={styles.h2}>Professional Experience</h2>
                <div className={styles.experience}>
                    <FontAwesomeIcon icon={faUser} className={styles.icon}/>
                    <div className={styles["experience-right"]}>
                        <p><strong>Community Manager</strong></p>
                        <p>Managed social media channels, content calendars, and community events. fostering a vibrant and<br/>
                        supportive online envinronment</p>
                        <p>Managed social media channels, content calendars, and community events. fostering a vibrant and<br/>
                        supportive online envinronment</p>
                    </div>
                </div>
                <div className={styles.experience}>
                    <FontAwesomeIcon icon={faLineChart} className={styles.icon}/>
                    <div className={styles["experience-right"]}>
                        <p><strong>Data Analyst</strong></p>
                        <p>Managed social media channels, content calendars, and community events. fostering a vibrant and<br/>
                        supportive online envinronment</p>
                        <p>Managed social media channels, content calendars, and community events. fostering a vibrant and<br/>
                        supportive online envinronment</p>
                    </div>
                </div>
                <div className={styles.experience}>
                    <FontAwesomeIcon icon={faBullhorn} className={styles.icon}/>
                    <div className={styles["experience-right"]}>
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