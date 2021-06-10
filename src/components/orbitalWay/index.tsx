import React from 'react'
import { motion as m } from 'framer-motion'
import { CelestialBodyFromOrbitalWay, CelestialBodyProps } from './celestialBody'
import './styles.scss'

interface OrbitalWayProps {
    celestialBodies: CelestialBodyProps[],
    color?: 'black' | 'white'
}

const variants = {
    initial: {
        height: 0,
        opacity: 0
    },
    animate: {
        height: '90%',
        opacity: 1,
        transition: {duration: 2.1, ease: 'easeInOut', when: 'beforeChildren', staggerChildren: .6}
    }
}

export const OrbitalWay:React.FC<OrbitalWayProps> =  ({ celestialBodies = [], color = 'white' }) => {

    return (
        <div className="orbital-way-container" data-testid="orbital-way-container">
            <m.ul variants={variants} initial="initial" animate="animate" className={`bg-${color == 'black' ? 'primary' : 'secondary'} orbital-way`}>
                {
                    celestialBodies.map(celestialBody => (
                        <CelestialBodyFromOrbitalWay 
                            key={celestialBody.title}
                            title={celestialBody.title}
                            abstract={celestialBody.abstract}
                            link={celestialBody.link}
                            color={color}
                        />
                    ))
                    }
            </m.ul>
        </div>
    )
}