import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./ProjectCard.module.css"

export const ProjectCard = ({ project: { title, imageSrc, skills, description, demo, source } }) => {
    let navy = 'rgba(10, 25, 47, 0.8)'
    let transparent = 'transparent'
    let teal = 'rgba(94, 234, 212, 1)'
    let [backgroundColor, setBackgroundColor] = React.useState(transparent);
    let [textColor, setTextColor] = React.useState()
    return (
        <div className={styles.container} style={{ background: backgroundColor }} onMouseOver={() => { setBackgroundColor(navy); setTextColor(teal) }}
            onMouseOut={() => { setBackgroundColor(transparent); setTextColor('white') }}>
            <div className={styles.imgContainer}>
                <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image} />
            </div>
            <div>
                <h3 className={styles.title} style={{ color: textColor }}>{title}</h3>
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
