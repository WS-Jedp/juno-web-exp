import React from 'react'
import { AvailableColors } from '../../../tools/types/colors'

interface ButtonLink {
    title: string,
    color?: AvailableColors,
    link: string
}

export const ButtonLink:React.FC<ButtonLink> = ({ title, color = 'primary', link  }) => {

    return (
        <a  title={title} href={link} className={`button-link button-link--${color}`}>
            {title}
        </a>
    )
}