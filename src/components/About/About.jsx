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
                    Hi, I’m Michael Corry, a software developer based in Nairobi, Kenya. Nice to meet you.
                    <br /><br />
                    I specialize in both frontend and backend development, including web design, APIs, and backend systems with database integration. Currently I am a freelance developer working with clients to deliver functional, well-crafted digital products.
                    <br /><br />
                    I have a keen in growing my craft and I follow that fueled with my curiosity to wherever it leads me. For more on this you can check out my gihub account.
                    <br /><br />
                    Off the screen, I enjoy exploring philosophy, spirituality, and occasionally reading fiction. Every project I undertake is an opportunity to learn and grow.

                </p>
            </div>
        </section>

    )
}
