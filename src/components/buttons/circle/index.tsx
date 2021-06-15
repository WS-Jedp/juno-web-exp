import React, { MouseEventHandler } from 'react'
import './styles.scss'

import { AvailableColors } from '../../../tools/types/colors'
import { defineBackgroundColor } from '../../../tools/functions/defineBackgroundColor'

interface ButtonCircleProps {
    color?: AvailableColors,
    title: string,
    action: MouseEventHandler
}

export const ButtonCircle:React.FC<ButtonCircleProps> = ({ action, title, color = 'secondary' }) => {

    return (
        <button className={`font-thin ${defineBackgroundColor({color})} button-circle`} onClick={action}>
            {
                title
            }
        </button>

    )
} 