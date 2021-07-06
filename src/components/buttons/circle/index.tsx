import React, { MouseEventHandler } from 'react'
import { motion as m } from 'framer-motion'

import { AvailableColors } from '../../../tools/types/colors'
import { defineBackgroundColor } from '../../../tools/functions/defineBackgroundColor'

interface ButtonCircleProps {
    color?: AvailableColors,
    title: string,
    action: MouseEventHandler,
    variants?: {[key:string]: any}
}

export const ButtonCircle:React.FC<ButtonCircleProps> = ({ action, title, color = 'secondary', variants }) => {

    return (
        <m.button variants={variants} className={`font-thin ${defineBackgroundColor({color})} button-circle`} onClick={action}>
            {
                title
            }
        </m.button>

    )
} 