import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

export const About = () => {
    return (
        <section className={styles.container} id='about'>
            <div className={styles.sectionHeading}>
                <h2 className={styles.title}>About Me</h2>
            </div>
            <div className={styles.content}>
                <p>
                    Hi, I'm Michael, nice to meet you.<br />
                    I'm a software developer with a degree in Computer Science based in Nairobi, Kenya. I have experience and deep interest in software development working in both the frontend and backend. This entail web design and development, APIs, and the relevant backend logic including databases. I'm currently a freelance developer working with various clients to bring their projects to life.<br /><br />
                    I am constantly learning and view it as a driving force in my life. I have a wide variety of interests ranging from Design, Systems Programming, Machine Learning and Artificial Inteligence, Augmented Reality, Augmented Reality, Quantum Computing and everything in between. When not on my laptop I enjoy a reading of spirituality and philosophy with some fiction on the side.
                </p>
            </div>
        </section>

    )
}
