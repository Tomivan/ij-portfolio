"use client"

import React from 'react';
import Sidebar from '../components/sidebar/sidebar.component';
import styles from'./work.module.css';

const Works = () => {
    return(
        <div className={styles.work}>
            <Sidebar />
            <div className={styles.workTop}>
                <h1>My Work</h1>
                <p>Explore a selection of projects</p>
            </div>
            <div className={styles.workBottom}>
                <h2>Community Management </h2>
                <section className={styles.section}>
                    <div className={styles.card}>
                        <img src='' alt='' />
                        <p>Community Engagement Design</p>
                        <p>Increased community engagement by 40% <br /> through targeted content and interactive <br /> 
                        events</p>
                    </div>
                    <div className={styles.card}>
                        <img src='' alt='' />
                        <p>Community Engagement Design</p>
                        <p>Increased community engagement by 40% <br /> through targeted content and interactive <br /> 
                        events</p>
                    </div>
                    <div className={styles.card}>
                        <img src='' alt='' />
                        <p>Community Engagement Design</p>
                        <p>Increased community engagement by 40% <br /> through targeted content and interactive <br /> 
                        events</p>
                    </div>
                </section>
                <h2>Data Analysis </h2>
                <section className={styles.section}>
                    <div className={styles.card}>
                        <img src='' alt='' />
                        <p>Community Engagement Design</p>
                        <p>Increased community engagement by 40% <br /> through targeted content and interactive <br /> 
                        events</p>
                    </div>
                    <div className={styles.card}>
                        <img src='' alt='' />
                        <p>Community Engagement Design</p>
                        <p>Increased community engagement by 40% <br /> through targeted content and interactive <br /> 
                        events</p>
                    </div>
                    <div className={styles.card}>
                        <img src='' alt='' />
                        <p>Community Engagement Design</p>
                        <p>Increased community engagement by 40% <br /> through targeted content and interactive <br /> 
                        events</p>
                    </div>
                </section>
                <h2>Digital Startegy</h2>
                <section className={styles.section}>
                    <div className={styles.card}>
                        <img src='' alt='' />
                        <p>Community Engagement Design</p>
                        <p>Increased community engagement by 40% <br /> through targeted content and interactive <br /> 
                        events</p>
                    </div>
                    <div className={styles.card}>
                        <img src='' alt='' />
                        <p>Community Engagement Design</p>
                        <p>Increased community engagement by 40% <br /> through targeted content and interactive <br /> 
                        events</p>
                    </div>
                    <div className={styles.card}>
                        <img src='' alt='' />
                        <p>Community Engagement Design</p>
                        <p>Increased community engagement by 40% <br /> through targeted content and interactive <br /> 
                        events</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Works;