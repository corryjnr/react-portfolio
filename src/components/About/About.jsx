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
                    Hi, I’m Michael Corry, a software developer based in Nairobi, Kenya. I specialize in both frontend and backend development, including web design, APIs, and backend systems with database integration. As a freelance developer, I work with clients to deliver functional, well-crafted digital products.
                    <br /><br />
                    I have a keen interest in areas like systems programming, machine learning, artificial intelligence, augmented reality, and quantum computing. When I’m not coding, I enjoy exploring philosophy, spirituality, and occasionally reading fiction. Every project I undertake is an opportunity to learn and grow.

                </p>
            </div>
        </section>

    )
}
