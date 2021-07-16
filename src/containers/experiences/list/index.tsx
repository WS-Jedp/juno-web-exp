import React from 'react'
import { Experience } from '../../../tools/content/vitae'

import { ExperienceCard } from '../../../components/experience/card'

interface ExperiencesList {
    experiences: Experience[],
}

export const ExperiencesList:React.FC<ExperiencesList> = ({ experiences }) => {
    return (
        <ul className="flex flex-col align-start justify-start">
            {
                experiences.map(experience => (
                    <li key={experience.id}>
                        <ExperienceCard 
                            title={experience.title}
                            description={experience.description}
                            time={experience.time}
                            role={experience.role}
                            icon={experience.icon}
                        />
                    </li>
                ))
            }
        </ul>
    )
}