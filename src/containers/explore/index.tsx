import React from 'react'

import { ButtonCircle } from '../../components/buttons/circle'
import { Content } from '../../components/content'
import { OrbitalWay } from '../../components/orbitalWay'
import { CelestialBodyProps } from '../../components/orbitalWay/celestialBody'

interface ExploreContainer {
    title: string,
    description: string,
    content: CelestialBodyProps[],
    color?: 'primary' | 'secondary',
    onExplore: () => void
}

export const ExploreContainer:React.FC<ExploreContainer> = ({ title, content, description, color = 'primary', onExplore }) => {

    return (
        <section className={`bg-${color === 'primary' ? 'primary' : 'secondary'} explore-container explore-container__title`}>
            <article className="explore-container__title-text">
                <Content
                    position="start"
                >
                    <h1 className={`${color === 'primary' ? ('color-secondary') : 'color-primary'}`}>{title}</h1>
                    <p className={`${color === 'primary' ? ('color-secondary') : 'color-primary'}`}>{description}</p>
                </Content>
                <ButtonCircle 
                    title="Explore"
                    action={onExplore}
                    color={color}
                />
            </article>

            <article className="explore-container__title-content">
                <OrbitalWay
                    celestialBodies={content}
                    color={`${color === 'primary' ? 'white' : 'black'}`}
                /> 
            </article>
        </section>
    )
}