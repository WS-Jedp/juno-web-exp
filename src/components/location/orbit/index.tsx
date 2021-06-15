import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import { AnimationLeftToRight } from '../../../assets/styles/animations/variants'
import { TransitionSlow } from '../../../assets/styles/animations/transitions'
import './styles.scss'

export type Location = {
    title: string,
    link: string,
    action: (title: string) => void
}

interface LocationOrbit {
    locations: Location[],
    selected?: string,
}

const variants = {
    initial: {
        opacity: 0,
        height: 0
    },
    animate: {
        opacity: 1,
        height: 'auto',
        transition: {
            duration: 2.1,
            ease: 'easeInOut',
            when: 'beforeChildren',
            staggerChildren: .3
        }
    }
}

export const LocationOrbit:React.FC<LocationOrbit> = ({ locations, selected  = ""}) => {

    const [explore, setExplore] = useState<string>('')

    const handleLocation = (title: string, cb: (title: string) => void) => {
        setExplore(title)
        cb(title)
    }
    
    return (
        <article className="relative flex align-center justify-center location-orbit" data-testid="location-orbit-container">
            <m.ul variants={variants} initial="initial" animate="animate" className="flex flex-col align-start justify-center location-orbit__locations">
                {
                    locations.map(location => (
                        <m.li variants={AnimationLeftToRight(TransitionSlow)} className={`relative location-orbit__location ${selected?.toLowerCase() === location.title.toLowerCase() && 'location-orbit__location--selected'} ${explore.toLowerCase() === location.title.toLowerCase() && 'location-orbit__location--explore'}`} key={location.title}>
                            <a 
                                href={location.link} 
                                onClick={(ev) => {
                                 ev.preventDefault()
                                 handleLocation(location.title, location.action)   
                                }}
                            >
                                {location.title}
                            </a>
                        </m.li>    
                    ))
                }
            </m.ul>
        </article>
    )
}