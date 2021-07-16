import React from 'react'
import { PILLARS } from '../../../tools/types/pillars'
import { definePilarColor } from '../../../tools/functions/definePilarColor'

interface StudyCardProps {
    pilar: PILLARS,
    title: string,
    description: string,
    purposes: string[],
    color?: 'primary' | 'secondary'
}

export const StudyCard:React.FC<StudyCardProps> = ({ pilar, title, description, purposes, color = 'primary' }) => {

    return (
        <article className={`relative flex flex-col justify-start m-xl study-card study-card--color-${color}`}>
            <h1 className={`font-sans ${definePilarColor({pilar})}`}>{pilar}</h1>
            <h2 className={`font-sans color-${color}`}>{title}</h2>
            <p className={`font-sans color-${color}`}>{description}</p>


            {
                purposes.length > 0 && (
                    <div className="study-card__purposes">
                        <h3 className={`font-sans color-${color}`}>Related Services</h3>
                        <ul className="flex flex-col color-primary">
                            {
                                purposes.map((purpose, i) => (
                                    <a key={i}>
                                        <li className={`flex flex-row align-center justify-start font-sans color-${color}`}>
                                            <div className="study-card__purposes-purpose"/>
                                            {purpose}
                                        </li>
                                    </a>
                                ))
                            }
                        </ul>
                    </div>
                )
            }

        </article>
    )
}