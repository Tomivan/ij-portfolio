"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./sidebar.module.css";
import Logo from "../../../assets/images/logo.svg";

const Sidebar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={styles.sidebar}>
            <div className={styles.logoContainer}>
                <Link href="/" className={styles.logoLink}>
                    <Image src={Logo} alt="Ijeoma Ejinwa Logo" className={styles.logo} />
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className={styles.desktopNav}>
                <Link href="/experience" className={styles.li}>Experience</Link>
                <Link href="/works" className={styles.li}>Projects</Link>
                <Link href="/skills" className={styles.li}>Skills</Link>
                <Link href="/testimonials" className={styles.li}>Testimonials</Link>
                <Link href="/contact" className={styles.li}>Contact</Link>
                <a 
                    href="https://docs.google.com/document/d/14HETYvAZfuN1ejxGRiU1rcHyPRQFSEHekfusq6AF9ew/edit?tab=t.0" 
                    target="_blank" 
                    className={styles.resume}
                >
                    Resume
                </a>
            </div>

            {/* Hamburger Menu Button */}
            <button 
                className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} 
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Mobile Navigation Menu */}
            <div className={`${styles.mobileNav} ${isMenuOpen ? styles.active : ''}`}>
                <Link href="/experience" className={styles.li} onClick={closeMenu}>Experience</Link>
                <Link href="/works" className={styles.li} onClick={closeMenu}>Projects</Link>
                <Link href="/skills" className={styles.li} onClick={closeMenu}>Skills</Link>
                <Link href="/testimonials" className={styles.li} onClick={closeMenu}>Testimonials</Link>
                <Link href="/contact" className={styles.li} onClick={closeMenu}>Contact</Link>
                <a 
                    href="https://docs.google.com/document/d/14HETYvAZfuN1ejxGRiU1rcHyPRQFSEHekfusq6AF9ew/edit?tab=t.0" 
                    target="_blank" 
                    className={styles.mobileResume}
                    onClick={closeMenu}
                >
                    Resume
                </a>
            </div>
        </nav>
    )
}

export default Sidebar;