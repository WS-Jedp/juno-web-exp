import React, { useState } from 'react'
import { StudyProps } from '../../../pages/studies/all'
import { StudyCard } from '../../../components/studies/card'
import { ButtonCircle } from '../../../components/buttons/circle'

interface StudiesAllContainer {
    color?: 'primary' | 'secondary',
    studies: StudyProps[],
    action: () => void
}

export const StudiesAllContainer:React.FC<StudiesAllContainer> = ({ studies, color = 'secondary', action }) => {

    const [currentStudies, setCurrentStudies] = useState<StudyProps[]>(studies)

    return (
        <section className={`bg-${color} flex flex-col align-center justify-center studies-all-container`}>

            <article className="studies-all-container__list">
                {
                    currentStudies.map(study => (
                        <StudyCard 
                            key={study.id}
                            title={study.name}
                            description={study.description}
                            pilar={study.pilar}
                            purposes={[]}
                            color={color === 'primary' ? 'secondary' : 'primary'}
                        />
                    ))
                }
            </article>
            {/* <ButtonCircle 
                title="Load More"
                color={color}
                action={action}
            /> */}
        </section>
    )
}
