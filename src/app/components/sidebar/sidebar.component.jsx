"use client"

import React from "react";
import Link from "next/link";
import  styles from "./sidebar.module.css";

const Sidebar = () => {
    return(
        <div className={styles.sidebar}>
            <h1><Link href="/">Ijeoma Ejinwa</Link></h1>
            <div className={styles.right}>
                <ul className={styles.ul}>
                    <li className={styles.li}><Link href="/experience">Experience</Link></li>
                    <li className={styles.li}><Link href="/works">Projects</Link></li>
                    <li className={styles.li}><Link href="/skills">Skills</Link></li>
                    <li className={styles.li}><Link href="/testimonials">Testimonials</Link></li>
                    <li className={styles.li}><Link href="/contact"> Contact</Link></li>
                </ul>
                <button className={styles.resume}>Resume</button>
            </div>
        </div>
    )
}

export default Sidebar;