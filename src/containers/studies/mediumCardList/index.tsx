import React from 'react'
import { Education } from '../../../tools/content/vitae'

import { StudyMediumCard } from '../../../components/studies/mediumCard'

interface StudiesMediumCardList {
    education: Education[],
}

export const StudiesMediumCardList:React.FC<StudiesMediumCardList> = ({ education }) => {
    return (
        <ul className="flex flex-row align-start justify-start knowledges-list__list">
            {
                education.map(education => (
                    <li key={education.id}>
                        <StudyMediumCard 
                            icon={education.icon}
                            school={education.school}
                            description={education.description}
                            study={education.study}
                            time={education.time}
                            link={education.link}
                        />
                    </li>
                ))
            }
        </ul>
    )
}