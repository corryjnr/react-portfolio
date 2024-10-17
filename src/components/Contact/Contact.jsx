import React, { useState, useEffect } from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"
import GithubLogo from './GithubLogo';
import LinkedinLogo from './LinkedinLogo'
import GmailLogo from './GmailLogo'

export const Contact = () => {
    const blue = '#57cbff'
    const primary = '#8892b0'
    let width = "50px"
    let height = "50px"
    const mobileWidth = "30px"
    const mobileHeight = "30px"
    let [gitIconColor, setGitIconColor] = React.useState(primary);
    let [gmailIconColor, setGmailIconColor] = React.useState(primary);
    let [linkedinIconColor, setLinkedinIconColor] = React.useState(primary);
    let [textColor, setTextColor] = React.useState(primary);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (screenWidth <= 830) { width = mobileWidth; height = mobileHeight }

    return (
        <footer id='contact' className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <a href="mailto:michaelcorry01@gmail.com" onMouseOver={() => setGmailIconColor(blue)}
                        onMouseOut={() => setGmailIconColor(primary)}>
                        <GmailLogo stroke={gmailIconColor} width={width} height={height}
                        />
                    </a>
                </li>
                <li className={styles.link}>
                    <a href="https://www.linkedin.com/in/michaelcorry1" onMouseOver={() => setLinkedinIconColor(blue)}
                        onMouseOut={() => setLinkedinIconColor(primary)}>
                        <LinkedinLogo stroke={linkedinIconColor} width={width} height={height} />
                    </a>
                </li>
                <li className={styles.link}>
                    <a href="https://www.github.com/corryjnr" onMouseOver={() => setGitIconColor(blue)}
                        onMouseOut={() => setGitIconColor(primary)}>
                        <GithubLogo stroke={gitIconColor} width={width} height={height} />
                    </a>
                </li>
            </ul>
            <a href="https://github.com/corryjnr/react-portfolio" className={styles.designedLink}>
                <p onMouseOver={() => setTextColor(blue)} onMouseOut={() => setTextColor(primary)} style={{ color: textColor }}>
                    Designed & Built by Michael Corry
                </p>
            </a>
        </footer>
    )
}
