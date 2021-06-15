import React, {useState} from 'react'
import { Locations } from '../locations'
import { AvailableColors } from '../../tools/types/colors'
import { defineBackgroundColor } from '../../tools/functions/defineBackgroundColor'
import { AnimatePresence } from 'framer-motion'

import { LogoParticle } from '../../components/logos/Particle'
import { LogoWaves } from '../../components/logos/Waves'
import './styles.scss'

interface Header {
    color?: AvailableColors
}

export const Header:React.FC<Header> = ({ color = 'primary' }) => {

    const [showLocations, setShowLocations] = useState<boolean>(false)

    return (
        <header className={`${defineBackgroundColor({color})} header ${showLocations && 'header--show-locations'} header--color-${color}`}>
            <article className="flex flex-row align-center justify-between header__menu">
                <div className="flex flex-flow font-serif">
                    Juno
                </div>
                <div className="font-serif header__particle" onClick={() => setShowLocations(!showLocations)}>
                    <LogoParticle color={`${color == 'purple' || color == 'black' || color == 'primary' ? 'white' : 'black'}`} />
                </div>
            </article>

            <AnimatePresence>   
                {
                    showLocations && (
                        <Locations color={color} />
                        )
                }
            </AnimatePresence>

            
        </header>
    )
}