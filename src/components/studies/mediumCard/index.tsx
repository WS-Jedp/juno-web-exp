import React from 'react'

interface StudyMediumCard {
    school: string,
    study: string,
    icon: string,
    description: string,
    time: string,
    link: string
}

export const StudyMediumCard:React.FC<StudyMediumCard> = ({ school, study, icon, description, time, link }) => {

    return (
        <article className="relative flex flex-col study-medium-card">
            <a target="_blank" href={link} className="relative flex flex-col align-start justify-between study-medium-card__container">

                <div className="flex flex-col study-medium-card__header">
                    <div className="flex flex-row align-center justify-start study-medium-card__header-title">
                        <figure className="study-medium-card__header-title-image">
                            <img src={icon} />
                        </figure>
                        <h2>{school}</h2>
                    </div>
                    <p className="font-serif color-secondary study-medium-card__description">
                        {description}
                    </p>
                </div>
                
                <div className="relative w-100 flex flex-col align-end justify-start text-end study-medium-card__footer">
                    <p className="font-serif color-secondary">{study}</p>
                    <p className="font-serif color-secondary">{time}</p>
                </div>

            </a>
        </article>
    )
}