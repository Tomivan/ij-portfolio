"use client";

import React from 'react';
import Sidebar from '../components/sidebar/sidebar.component';
import styles from './skills.module.css';

const Skills = () => {
    return(
        <div className={styles.skills}>
            <Sidebar />
            <div className={styles.container}>
                <h1>Technical Skills</h1>
                <div className={styles.skillsContainer}>
                    <h2>Community Management</h2>
                    <div className={styles.skillsCards}>
                        <div className={styles.skill}>
                            <img src='' alt='' />
                            <p>Community Building</p>
                        </div>
                        <div className={styles.skill}>
                            <img src='' alt='' />
                            <p>Community Building</p>
                        </div>
                        <div className={styles.skill}>
                            <img src='' alt='' />
                            <p>Community Building</p>
                        </div>
                        <div className={styles.skill}>
                            <img src='' alt='' />
                            <p>Community Building</p>
                        </div>
                    </div>
                </div>
                <div className={styles.skillsContainer}>
                    <h2>Data Analysis</h2>
                    <div className={styles.skillsCards}>
                        <div className={styles.skill}>
                            <img src='' alt='' />
                            <p>Community Building</p>
                        </div>
                        <div className={styles.skill}>
                            <img src='' alt='' />
                            <p>Community Building</p>
                        </div>
                        <div className={styles.skill}>
                            <img src='' alt='' />
                            <p>Community Building</p>
                        </div>
                        <div className={styles.skill}>
                            <img src='' alt='' />
                            <p>Community Building</p>
                        </div>
                    </div>
                </div>
                <div className={styles.skillsContainer}>
                    <h2>Digital Strategy</h2>
                    <div className={styles.skillsCards}>
                        <div className={styles.skill}>
                            <img src='' alt='' />
                            <p>Community Building</p>
                        </div>
                        <div className={styles.skill}>
                            <img src='' alt='' />
                            <p>Community Building</p>
                        </div>
                        <div className={styles.skill}>
                            <img src='' alt='' />
                            <p>Community Building</p>
                        </div>
                        <div className={styles.skill}>
                            <img src='' alt='' />
                            <p>Community Building</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;