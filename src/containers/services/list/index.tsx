import React, { useState } from 'react'
import { StudyCard } from '../../../components/studies/card'
import { ButtonCircle } from '../../../components/buttons/circle'

interface StudiesAllContainer {
    color?: 'primary' | 'secondary',
    services: any[],
    action: () => void
}

export const ServicesListContainer:React.FC<StudiesAllContainer> = ({ services, color = 'secondary', action }) => {

    const [currentServices, setCurrentServices] = useState<any[]>(services)

    return (
        <section className={`bg-${color} flex flex-col align-center justify-center services-list-container`}>

            <article className="services-list-container__list">
                {
                    currentServices.map(service => (
                        <StudyCard 
                            key={service.id}
                            title={service.name}
                            description={service.description}
                            pilar={service.pilar}
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
