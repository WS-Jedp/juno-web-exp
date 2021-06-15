import React from 'react'
import { motion as m } from 'framer-motion'
import './styles.scss'

interface StudyProgressProps {
    junoPosition: number,
    celestialBodyName: string,
    color?: 'white' | 'black'
}

const variants = {
    initial: {
        opacity: 0,
        width: 0,
    },
    animate: {
        opacity: 1,
        width: "100%",
        transition: {
            duration: 2.1,
            ease: 'easeInOut',
            when: 'beforeChildren',
            staggerChildren: .6
        }
    }
}

const variantsSpace = {
    initial: {
        y: -10,
        opacity: 0,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .9,
            ease: 'easeInOut',
            when: 'beforeChildren',
            staggerChildren: .6
        }
    }
}

export const StudyProgress:React.FC<StudyProgressProps> = ({ celestialBodyName, junoPosition, color = 'white' }) => {


    return (
        <section className={`relative flex flex-row align-center justify-center study-progress study-progress--color-${color}`} data-testid="study-progress-container">

            <m.div className="study-progress__orbit" variants={variants} initial="initial" animate="animate" />

            <m.div variants={variantsSpace} initial="initial" animate="animate" className="relative flex flex-row study-progress__space">
                <m.div variants={variantsSpace} className="flex flex-col align-center study-progress__juno" style={{left: `${junoPosition}%`}}>
                    <m.b className="font-serif">Juno</m.b>
                    <m.div className="study-progress__juno-position" />
                </m.div>
                <m.div variants={variantsSpace} className="flex flex-col align-center study-progress__celestial-body">
                    <m.b className="font-serif">{celestialBodyName}</m.b>
                    <m.div className="study-progress__celestial-body-position" />
                </m.div>
            </m.div>
        </section>
    )
}