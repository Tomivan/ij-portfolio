"use client";
import React from "react";
import styles from"./HomePage.module.css";
import Sidebar from "../sidebar/sidebar.component";

const Home = () => {
  return (
    <div className={styles.home}>
        <Sidebar />
        <div className={styles.content}>
          <div className={styles["content-left"]}>
            <h1>Community Manager</h1>
            <p>I help buisnesses grow their online presence and make data-driven <br />
               decisions. With a background in community management, data <br /> 
               analysis and digital strategy, I bring a unique perspective to every <br /> 
               project</p>
               <div className={styles.buttons}>
                 <button className={styles.view}>View Projects</button>
                 <button className={styles.learn}>Learn More</button>
               </div>
          </div>
          <div className={styles["content-right"]}>
            <img src="/images/home-img.png" alt="Ijeoma looking pretty" />
          </div>
        </div>
    </div>
  );
}

export default Home;