import React from 'react'
import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.intro}>Hi, my name is</h1>
                <h2 className={styles.title}>Michael Corry.</h2>
                <h3 className={styles.subtitle}>I build things for the web.</h3>
                <p className={styles.description}>{`I'm a software engineer exploring new ways to bring creative ideas to life. Driven by curiosity and a love for problem-solving, I aim to make a lasting impact through innovation and technology. Let’s connect and create something amazing together!`}</p>
                <a href='mailto:michaelcorry01@gmail.com' className={styles.contactBtn}>Contact Me</a>
            </div>
            {/*<img src={getImageUrl("hero/heroNew.png")} alt="Hero image of me" className={styles.heroImg} /> */}
            {/*<div className={styles.topBlur} />
            <div className={styles.bottomBlur} />*/}
        </section>
    )
}
