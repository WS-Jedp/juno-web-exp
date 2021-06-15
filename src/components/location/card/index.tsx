import React from 'react'
import './styles.scss'

export interface LocationCardProps {
    title: string,
    abstract: string,
    link: string
}

export const LocationCard:React.FC<LocationCardProps> = ({ abstract, link, title }) => {

    return (
        <a href={link} className="flex flex-col align-start justify-center location-card">
            <h2 className="font-sans font-bold">{title}</h2>
            <p className="font-sans font-thin">{abstract}</p>
        </a>
    )
}