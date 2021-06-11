import React from 'react'
import './styles.scss'

import { defineCategoryColor } from '../../../tools/functions/defineCategoryColor'
import { defineBackgroundColor } from '../../../tools/functions/defineBackgroundColor'
import { AvailableColors } from '../../../tools/types/colors'

interface AllyCardProps {
    ally: string,
    abstract: string,
    category: string,
    color?: AvailableColors
}

export const AllyCard:React.FC<AllyCardProps> = ({ category, ally, abstract, color = 'primary' }) => {

    return (
        <article className={`flex flex-col m-xl relative ${defineBackgroundColor({ color })} ally-card ally-card--color-${color}`}>
            <small className={`font-sans font-bold ${defineCategoryColor({category})}`}>{category}</small>
            <h3 className="font-sans color-secondary">{ally}</h3>
            <p className="font-sans font-thin">{abstract}</p>
        </article>
    )
}