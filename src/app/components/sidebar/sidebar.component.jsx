"use client"

import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  styles from "./sidebar.module.css";

const Sidebar = () => {
    return(
        <Navbar expand="lg">
            <Container className={styles.sidebar}>
                <Navbar.Brand href="/" className={styles.li}>Ijeoma's portfolio</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/experience" className={styles.li}>Experience</Nav.Link>
                        <Nav.Link href="/works" className={styles.li}>Projects</Nav.Link>
                        <Nav.Link href="/skills" className={styles.li}>Skills</Nav.Link>
                        <Nav.Link href="/testimonials" className={styles.li}>Testimonials</Nav.Link>
                        <Nav.Link href="/contact" className={styles.li}>Contact</Nav.Link>
                        <button className={styles.resume}>Resume </button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Sidebar;