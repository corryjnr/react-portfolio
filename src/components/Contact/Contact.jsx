import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"
import GithubLogo from './GithubLogo';
import LinkedinLogo from './LinkedinLogo'
import GmailLogo from './GmailLogo'

export const Contact = () => {
    let blue = '#57cbff'
    let primary = '#8892b0'
    let [gitIconColor, setGitIconColor] = React.useState(primary);
    let [gmailIconColor, setGmailIconColor] = React.useState(primary);
    let [linkedinIconColor, setLinkedinIconColor] = React.useState(primary);
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
                        <GmailLogo stroke={gmailIconColor}
                        />
                    </a>
                </li>
                <li className={styles.link}>
                    <a href="https://www.linkedin.com/in/michaelcorry1" onMouseOver={() => setLinkedinIconColor(blue)}
                        onMouseOut={() => setLinkedinIconColor(primary)}>
                        <LinkedinLogo stroke={linkedinIconColor} />
                    </a>
                </li>
                <li className={styles.link}>
                    <a href="https://www.github.com/corryjnr" onMouseOver={() => setGitIconColor(blue)}
                        onMouseOut={() => setGitIconColor(primary)}>
                        <GithubLogo stroke={gitIconColor} />
                    </a>
                </li>
            </ul>
            <p>Designed & Built by Michael Corry</p>
        </footer>
    )
}
