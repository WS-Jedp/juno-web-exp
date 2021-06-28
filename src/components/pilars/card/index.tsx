import React from 'react'
import { Content } from '../../content'

export interface PilarCardProps {
    index: number,
    title: string,
    description?: string,
    color?: 'purple' | 'light-blue' | 'main',
    link: string
}

export const PilarCard:React.FC<PilarCardProps> = ({ title, index, description, link, color = 'main' }) => {

    return (
        <article className={`m-lg pilar-card pilar-card--color-${color} ${description && 'pilar-card--description'}`} data-testid="pilar-card__container">
            <Content>
                <span className={`font-sans font-bold color-${color}`}>
                    0{index}
                </span>
                <h2 className={`font-sans font-bold color-${color}`}>
                    {title}
                </h2>
            </Content>
            {
                description && (
                    <p className="font-sans color-secondary m-t-md pilar-card__description">{description}</p>
                )
            }


            <a href={link} className={`font-sans font-bold color-${color} pilar-card__action`}>See More</a>
        </article>
    )
}
