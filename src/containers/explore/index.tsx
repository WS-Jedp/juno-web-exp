import React from 'react'
import { motion as m } from 'framer-motion'

import { TransitionSlow } from '../../assets/styles/animations/transitions'
import { AnimationLeftToRight, AnimationRightToLeft, AnimationFatherContainer, AnimationBottomToTop } from '../../assets/styles/animations/variants'

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

const variantsContainer = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {duration: 2.1, ease: "easeInOut",}
    }
}

export const ExploreContainer:React.FC<ExploreContainer> = ({ title, content, description, color = 'primary', onExplore }) => {

    return (
        <m.section 
            className={`bg-${color === 'primary' ? 'primary' : 'secondary'} explore-container explore-container__title`}
            variants={variantsContainer}    
            initial="initial"
            animate="animate"
        >
            <m.article 
                className="explore-container__title-text"
                variants={AnimationFatherContainer()}
            >
                <Content
                    position="start"
                >
                    <m.h1 variants={AnimationLeftToRight(TransitionSlow)} className={`${color === 'primary' ? ('color-secondary') : 'color-primary'}`}>{title}</m.h1>
                    <m.p variants={AnimationLeftToRight(TransitionSlow)} className={`${color === 'primary' ? ('color-secondary') : 'color-primary'}`}>{description}</m.p>
                </Content>
                <ButtonCircle 
                    variants={AnimationBottomToTop()}
                    title="Explore"
                    action={onExplore}
                    color={color}
                />
            </m.article>

            <m.article className="explore-container__title-content"
                variants={AnimationRightToLeft({ duration: 1.2, ease: "easeInOut" })}
            >
                <OrbitalWay
                    celestialBodies={content}
                    color={`${color === 'primary' ? 'white' : 'black'}`}
                /> 
            </m.article>
        </m.section>
    )
}