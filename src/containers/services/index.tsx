import React from 'react'

import { Content } from '../../components/content'
import { PilarCard } from '../../components/pilars/card'

interface ServicesContainer {
    position: 'start' | 'center' | 'end',
    color?: 'primary' | 'secondary'
}

export const ServicesContainer:React.FC<ServicesContainer> = ({ position, color = 'secondary' }) => {
    return (
        <section className={`bg-${color === 'secondary' ? 'secondary' : 'primary'} flex flex-col services-container services-container__services`}>
                <Content
                    position={position}
                    size="mid"
                >
                    <h2 className={`color-${color === 'secondary' ? 'primary' : 'secondary'}`}>Services</h2>
                    <p className={`color-${color === 'secondary' ? 'primary' : 'secondary'}`}>Know how we can bring your idea into reality.</p>
                </Content>                    

                <ul className="flex flex-row services-container__services-list">
                    <PilarCard 
                        index={1}
                        link="/services/science"
                        title="Science"
                        color="purple"
                    />
                    <PilarCard 
                        index={2}
                        link="/services/art"
                        title="Art"
                        color="light-blue"
                    />
                    <PilarCard 
                        index={3}
                        link="/services/technology"
                        title="Technology"
                        color="main"
                    />
                </ul>
        </section>
    )
}