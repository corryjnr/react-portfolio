import React, { useState, useEffect } from 'react'
import { getImageUrl } from '../../utils'
import styles from "./ProjectCard.module.css"
import GithubLogo from './GithubLogo';

export const ProjectCard = ({ project: { title, imageSrc, skills, description, demo, source } }) => {
    const blue = '#57cbff'
    const primary = '#e6f1ff'
    let width = "40px"
    let height = "40px"
    const mobileWidth = "30px"
    const mobileHeight = "30px"
    let [gitIconColor, setGitIconColor] = React.useState(primary);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (screenWidth <= 830) { width = mobileWidth; height = mobileHeight }
    return (
        <a href={demo} className={styles.linkContainer}>
            <div className={styles.container} >
                <div className={styles.imgContainer}>
                    <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image} />
                </div>
                <div>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                    <ul className={styles.skills}>
                        {skills.map((skill, id) => {
                            return (<li key={id} className={styles.skill}>
                                {skill}
                            </li>
                            )
                        })}
                    </ul>
                    <div className={styles.links}>
                        <a href={source} className={styles.link} onMouseOver={() => setGitIconColor(blue)}
                            onMouseOut={() => setGitIconColor(primary)}>
                            <GithubLogo stroke={gitIconColor} width={width} height={height} />
                        </a>
                    </div>
                </div>
            </div>
        </a >
    )
}
