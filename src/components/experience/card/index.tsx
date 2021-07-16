import React from 'react'

interface ExperienceCard {
    title: string,
    icon: string,
    description: string,
    time: string,
    role: string,
}

export const ExperienceCard:React.FC<ExperienceCard> = ({ icon, title, description, role, time }) => {
    return (
        <article className="relative flex flex-col experience-card">
            <div className="relative flex flex-col align-start justify-between experience-card__container">

                <div className="flex flex-col experience-card__header">
                    <div className="flex flex-row align-center justify-start experience-card__header-title">
                        <figure className="study-medium-card__header-title-image">
                            <img src={icon} />
                        </figure>
                        <h2>{title}</h2>
                    </div>
                    <p className="font-serif color-secondary experience-card__description">
                        {description}
                    </p>
                </div>
                
                <div className="relative w-100 flex flex-col align-end justify-start text-end experience-card__footer">
                    <p className="font-serif text-end color-secondary">{role}</p>
                    <p className="font-serif color-secondary">{time}</p>
                </div>

            </div>
        </article>
    )
}