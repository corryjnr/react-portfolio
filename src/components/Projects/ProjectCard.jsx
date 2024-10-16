import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./ProjectCard.module.css"

export const ProjectCard = ({ project: { title, imageSrc, skills, description, demo, source } }) => {
    let navy = '#0a192f'
    let transparent = 'transparent'
    let [backgroundColor, setBackgroundColor] = React.useState(transparent);
    return (
        <div className={styles.container} style={{ background: backgroundColor }} onMouseOver={() => setBackgroundColor(navy)}
            onMouseOut={() => setBackgroundColor(transparent)}>
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
                    <a href={demo} className={styles.link}>Demo</a>
                    <a href={source} className={styles.link}>Source</a>
                </div>
            </div>
        </div>
    )
}
