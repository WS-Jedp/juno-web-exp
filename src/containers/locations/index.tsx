import React, {useState} from 'react'
import { defineBackgroundColor } from '../../tools/functions/defineBackgroundColor'
import { AvailableColors } from '../../tools/types/colors'
import { locationsOptions } from '../../tools/functions/defineLocations'
import { LocationCard, LocationCardProps } from '../../components/location/card'
import { LocationOrbit } from '../../components/location/orbit'
import { motion as m } from 'framer-motion'

interface Locations {
    color?: AvailableColors,
    defaultLocation?: string
}

const variantsOptions = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1.8,
            ease: 'easeInOut',
            when: 'beforeChildren',
            staggerChildren: .9
        }
    }
}

const variantsLocations = {
    initial: {
        width: 0,
    },
    animate: {
        opacity: 1,
        width: '100%',
        transition: {
            duration: 1.2,
            ease: 'easeInOut',
            when: 'beforeChildren'
        }
    },
    exit: {
        opacity: 0,
        width: 0,
        x: -100,
        transition: {
            duration: .9,
            when: 'beforeChildren'
        }
    }
}


export const Locations:React.FC<Locations> = ({ color = 'primary', defaultLocation = 'Home' }) => {

    const defineActionOnOptions = (title:string) => {
        setContents(defineContents(title))
    }
    const locations = locationsOptions(defineActionOnOptions)
    const defineContents = (title:string) => {
        const location = locations.filter(location => location.locationOption.title === title)
        return location[0].contents
    }
    const [contents, setContents] = useState<LocationCardProps[]>(defineContents(defaultLocation))


    return (
        <m.section variants={variantsLocations} initial="initial" animate="animate" exit="exit" className={`${defineBackgroundColor({color})} locations`}>
            <m.div className="locations__options">
                <LocationOrbit locations={locations.map(location => location.locationOption)} selected={defaultLocation} />
            </m.div>
            <m.ul variants={variantsOptions} initial="initial" animate="animate" className="locations__contents">
                {
                    contents.map(content => (
                            <LocationCard 
                                key={content.title}
                                title={content.title}
                                link={content.link}
                                abstract={content.abstract}
                            />
                        ))
                }
            </m.ul>
        </m.section>
    )
}