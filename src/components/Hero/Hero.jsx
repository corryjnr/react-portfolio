import React from 'react'
import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils'

export const Hero = () => {
    const blue = '#57cbff'
    const white = '#e6f1ff'
    let [textColor, setTextColor] = React.useState(blue);
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.intro}>Hi, my name is</h1>
                <h2 className={styles.title}>Michael Corry.</h2>
                <h3 className={styles.subtitle}>Software Developer.</h3>
                <p className={styles.description}>{`I create functional and visually stunning digital experiences as a full-stack developer specializing in React, Next.js, and Django. Whether building innovative web apps or solving complex problems, I’m here to bring your ideas to life. Let’s turn your vision into impactful results.`}</p>
                <a href='mailto:michaelcorry01@gmail.com' className={styles.contactBtn} onMouseOver={() => setTextColor(white)} onMouseOut={() => setTextColor(blue)} style={{ color: textColor, border: `1px solid ${textColor}` }}>Contact Me</a>
            </div>
            {/*<img src={getImageUrl("hero/heroNew.png")} alt="Hero image of me" className={styles.heroImg} /> */}
            {/*<div className={styles.topBlur} />
            <div className={styles.bottomBlur} />*/}
        </section>
    )
}
