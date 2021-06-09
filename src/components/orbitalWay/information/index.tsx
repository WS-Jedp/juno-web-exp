import React from 'react'
import './styles.scss'

interface OrbitalWayInformationProps {
    title: string,
    abstract: string,
    link: string
}

export const OrbitalWayInformation:React.FC<OrbitalWayInformationProps> = ({ abstract, link, title }) => {

    return (
        <article className="orbital-way-information">
            <h3 className="font-sans font-black text-size-lg">
                { title }
            </h3>
            <p className="font-sans font-thin text-size-base-md m-b-lg">
                {abstract}
            </p>
            <a href={link} className="font-sans font-bold text-size-base-md">
                See More
            </a>
        </article>
    )
} 
