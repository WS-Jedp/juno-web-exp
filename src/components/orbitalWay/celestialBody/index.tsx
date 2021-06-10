import React from 'react'
import { motion as m } from 'framer-motion'
import { TransitionSlow } from '../../../assets/styles/animations/transitions'
import { OrbitalWayInformation } from '../information'
import './styles.scss'

export interface CelestialBodyProps {
    title: string,
    abstract: string,
    link: string,
    color?: 'black' | 'white'
}

const variants = {
    initial: {
        x: -10,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: TransitionSlow
    }
}

export const CelestialBodyFromOrbitalWay:React.FC<CelestialBodyProps> = ({ title, abstract, link, color = 'white' }) => {

    return (
        <m.li variants={variants} className="celestial-body-orbital-way">
            <div className="celestial-body-orbital-way__information">
                <OrbitalWayInformation 
                    title={title}
                    abstract={abstract}
                    link={link}
                    color={color}
                />
            </div>
            <div className={`celestial-body-orbital-way__body bg-${color == 'white' ? 'secondary' : 'primary'}`} />
        </m.li>
    )
}