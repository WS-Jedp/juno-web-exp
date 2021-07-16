import React from 'react'

interface ProjectCard {
    title: string,
    description: string,
    time: string,
    role: string,
    link: string
}

export const ProjectCard:React.FC<ProjectCard> = ({ title, description, role, time, link }) => {
    return (
        <article className="relative flex flex-col project-card">
            <a target="_blank" href={link} className="relative flex flex-col align-start justify-between project-card__container">

                <div className="flex flex-col project-card__header">
                    <div className="flex flex-row align-center justify-start project-card__header-title">
                        <h2>{title}</h2>
                    </div>
                    <p className="font-serif color-secondary project-card__description">
                        {description}
                    </p>
                </div>
                
                <div className="relative w-100 flex flex-col align-end justify-start text-end project-card__footer">
                    <p className="font-serif text-end color-secondary">{role}</p>
                    <p className="font-serif color-secondary">{time}</p>
                </div>

            </a>
        </article>
    )
}