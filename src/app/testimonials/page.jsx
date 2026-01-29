"use client";

import React from 'react';
import Sidebar from '../components/sidebar/sidebar.component';
import styles from './testimonials.module.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Magdalene Oitomhen",
            role: "Content Creator | Script Writer | Social Media Manager",
            text: "Ijeoma Ejinwa possesses a remarkable ability to motivate and inspire her team members. Her leadership style fosters a collaborative and inclusive work environment, where everyone feels valued and encouraged to contribute their best. She is always approachable, open to ideas, and genuinely interested in the growth and development of each team member.",
            initials: "MO",
            color: "#1193d4"
        },
        {
            id: 2,
            name: "Markanthony Akem",
            role: "Founder Agileseventeen | Sr. Lean Agile Transformation Coach",
            text: "Speak of a dedicated and trusted individual then you have to think of Ijeoma. I have worked alongside her for several years now and can confidently say she is exceptional. She is patient, pays attention to details and most importantly willing to learn as well as take on new challenges. Under her supervision, the Agileseventeen team African corridor has recorded significant growth and transformation. We at Agileseventeen are pleased to have her lead at a time so critical and excited to see her grow with us to greater heights.",
            initials: "MA",
            color: "#2ecc71"
        },
        {
            id: 3,
            name: "QueenEsther Obasi",
            role: "Virtual Assistant | Product Manager | Scrum Master",
            text: "I have the pleasure of working with Ijeoma Ejinwa for a couple of months now and it's been nothing short of daring and stretching to do more. While I knew I had big shoes to fill, I never anticipated how hard Ijeoma Ejinwa would work alongside me. She pushed me to make a step to coming out of my shell and it helped. My team and I grew and improved under her guidance, and she was a genuine and constant source of motivation that enabled us to outdo ourselves week after week. Ijeoma didn't just manage expectations, she managed our goals and aspirations. Working with Ijeoma Ejinwa is one of the most rewarding experiences of my career. She has a knack for analyzing the requirements of a role and finding the right person to fill it, which often results in increased efficiency and improved team dynamics.",
            initials: "QO",
            color: "#e74c3c"
        },
        {
            id: 4,
            name: "Ekomobong Offong",
            role: "LinkedIn Top CV/Resume Writer | Voiceover Artist",
            text: "There are not so many focused and intentional Managers as Ijeoma is. With a commitment to consistently deliver quality work, Ijeoma has continually challenged me to put in my best and do more than what is considered average. Very few leaders are as dedicated as she is.",
            initials: "EO",
            color: "#9b59b6"
        }
    ];

    return (
        <div className={styles.testimonials}>
            <Sidebar />
            <div className={styles.testimonialTop}>
                <h1>What Others Say</h1>
                <p>Testimonies from clients and colleagues I've had the pleasure to work with</p>
            </div>
            
            <div className={styles.testimonialContainer}>
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className={styles.testimonialCard}>
                        <div className={styles.cardTop}>
                            <div 
                                className={styles.avatar} 
                                style={{ backgroundColor: testimonial.color }}
                            >
                                <span>{testimonial.initials}</span>
                            </div>
                            <div className={styles.cardInfo}>
                                <h2>{testimonial.name}</h2>
                                <p>{testimonial.role}</p>
                            </div>
                        </div>
                        <div className={styles.testimonialText}>
                            <p>"{testimonial.text}"</p>
                        </div>
                        <div className={styles.quoteIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.983 11.978C9.983 9.293 11.91 6.813 14.5 5.5L15.5 7.5C13.729 8.562 12.5 10.312 12.5 12.228C12.5 13.71 13.3 14.98 14.5 15.8C13.301 16.764 11.78 17.346 10.117 17.346C6.69 17.346 3.9 14.614 3.9 11.228C3.9 6.973 7.214 3.5 11.5 3.5C15.786 3.5 19.1 6.973 19.1 11.228C19.1 15.482 15.786 18.956 11.5 18.956C10.416 18.956 9.374 18.74 8.416 18.342C9.432 16.868 9.983 14.985 9.983 11.978Z" fill={testimonial.color} />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials;