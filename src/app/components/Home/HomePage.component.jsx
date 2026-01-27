"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import IJ from "../../../assets/images/ij.jpeg";
import styles from"./HomePage.module.css";
import Sidebar from "../sidebar/sidebar.component";

const Home = () => {
  const titles = ["Digital Strategist", "Data Analyst", "Community Manager"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsAnimating(false);
      }, 500); 
      
    }, 2000); 
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className={styles.home}>
        <Sidebar />
        <div className={styles.content}>
          <div className={styles["content-left"]}>
            <h1 className={`${styles.title} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}>
              {titles[currentTitleIndex]}
            </h1>
            <p>I help businesses grow their online presence and make data-driven <br />
               decisions. With a background in community management, data <br /> 
               analysis and digital strategy, I bring a unique perspective to every <br /> 
               project
            </p>
               <div className={styles.buttons}>
                 <button className={styles.view}>
                  <Link href="/works" className={styles.link}>View Projects</Link>
                </button>
                 <button className={styles.learn}>
                  <Link href="/experience" className={styles.link}>Learn More</Link>
                </button>
               </div>
          </div>
          <div className={styles["content-right"]}>
            <Image src={IJ} alt="Ijeoma sitting" className={styles["content-right-image"]} />
          </div>
        </div>
    </div>
  );
}

export default Home;