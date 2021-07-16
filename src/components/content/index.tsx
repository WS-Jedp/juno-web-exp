import React from 'react'
import { motion as m } from 'framer-motion'

interface ContentProps {
    position?: 'start' | 'center' | 'end',
    size?: 'mid' | 'full',
    color?: 'white' | 'black'
    variants?: {[key:string]: any},
}

export const Content:React.FC<ContentProps> = ({ position = 'start', size = 'full', color = 'black', children, variants  }) => {

    return (
        <m.section 
            variants={variants}
            className={`
                content 
                color-${color == 'black' ? 'primary' : 'secondary'} 
                content-position--${position} 
                content-size--${size}`}
        >
            {
                children
            }
        </m.section>
    )
}