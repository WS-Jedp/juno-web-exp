import React from 'react'
import { motion as m } from 'framer-motion'
import { CelestialBodyFromOrbitalWay } from './celestialBody'
import './styles.scss'

interface OrbitalWayProps {
    celestialBodies: {title: string, abstract: string, link: string}[],
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

export const OrbitalWay:React.FC<OrbitalWayProps> =  ({ celestialBodies = [] }) => {

    return (
        <div className="orbital-way-container">
            <m.ul variants={variants} initial="initial" animate="animate" className="orbital-way">
                {
                    celestialBodies.map(celestialBody => (
                        <CelestialBodyFromOrbitalWay 
                            key={celestialBody.title}
                            title={celestialBody.title}
                            abstract={celestialBody.abstract}
                            link={celestialBody.link}
                        />
                    ))
                    }
            </m.ul>
        </div>
    )
}