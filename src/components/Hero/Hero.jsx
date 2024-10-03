import React from 'react'
import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Corry</h1>
                <p className={styles.description}>{`A fullstack developer with 1 year of experience using React and NextJS. Reach out if you'd like to learn more!`}</p>
                <a href='mailto:michaelcorry01@gmail.com' className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroNew.png")} alt="Hero image of me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}
