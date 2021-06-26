import React from 'react'

import { Content } from '../../components/content'
import { ProcessCard } from '../../components/process/card'

import { Processes } from '../../tools/content/processes'

interface ProcessesContainer {
    color?: 'primary' | 'secondary',
    position: 'start' | 'center' | 'end'
}

export const ProcessesContainer:React.FC<ProcessesContainer> = ({ position, color = 'primary' }) => {

    return (
        <section className="bg-primary flex flex-col  processes-container processes-container__processes">
                <Content
                    position="end"
                    size="mid"
                >
                    <h2 className="color-secondary">Processes</h2>
                    <p className="color-secondary">Stories are the best ways to connect with people. Working with Juno is working through a story creation process, where each project is unique that will tell and express his vision of reality.</p>
                </Content>

                <ul className="flex flex-row processes-container__processes-list">
                    <ProcessCard 
                        {...Processes['storytelling']}
                        color="white"
                    />
                </ul>
        </section>
    )
}