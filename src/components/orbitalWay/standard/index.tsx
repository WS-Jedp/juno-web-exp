import React from 'react'
import { motion as m } from 'framer-motion'
import { AnimationLeftToRight } from '../../../assets/styles/animations/variants'
import { TransitionSlow } from '../../../assets/styles/animations/transitions'

type TitleContent = {
    title: string,
    id: string
}

interface OrbitalWayStandardProps {
    contents: TitleContent[]
}

const variants = {
    initial: {
        height: 0,
        opacity: 0
    },
    animate: {
        height: "100%",
        opacity: 1,
        transition: {
            duration: 2.1,
            staggerChildren: .6,
            when: "beforeChildren",
            ease: "easeInOut"
        }
    }
}

export const OrbitalWayStandard:React.FC<OrbitalWayStandardProps> = ({ contents }) => {

    return (
        <m.ul variants={variants} initial="initial" animate="animate" className="relative flex flex-col align-start justify-around orbital-way-standard">
            {
                contents.map(content => (
                    <m.a variants={AnimationLeftToRight({...TransitionSlow, duration: 1.8})} key={content.id} href={content.id} className="relative flex flex-row align-center orbital-way-standard__item ">
                        <div className="orbital-way-standard__item-position" />
                        <li className="font-sans font-thin orbital-way-standard__title">{content.title}</li>
                    </m.a>
                ))
            }
        </m.ul>
    )
}