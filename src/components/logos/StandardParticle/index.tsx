import React from 'react'
import './styles.scss'

type LogoStandardParticleProps = {
    width?: number,
    height?: number,
    color?: 'white' | 'black'
}

export const LogoStandardParticle = ({width = 30, height = 30, color='black'}:LogoStandardParticleProps) => { 
    
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 26.5" width={width} height={height}>
                <title>JunoLogoStandardParticle-Black</title>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Visual_Language" data-name="Visual Language">
                        <circle id="celestial-body" className={`cls-1 svg-${color}`} cx="4.3" cy="1.5" r="1.5"/>
                        <line id="line-1" className={`cls-2 svg-line-${color}`} x1="12" y1="14.5" x2="12" y2="2.5"/>
                        <line id="line-2" className={`cls-2 svg-line-${color}`} x1="12" y1="14.5" x2="18" y2="4.11"/>
                        <line id="line-3" className={`cls-2 svg-line-${color}`} x1="12" y1="14.5" x2="22.39" y2="8.5"/>
                        <line id="line-4" className={`cls-2 svg-line-${color}`} x1="12" y1="14.5" x2="24" y2="14.5"/>
                        <line id="line-5" className={`cls-2 svg-line-${color}`} x1="12" y1="14.5" x2="22.39" y2="20.5"/>
                        <line id="line-6" className={`cls-2 svg-line-${color}`} x1="12" y1="14.5" x2="18" y2="24.89"/>
                        <line id="line-7" className={`cls-2 svg-line-${color}`} x1="12" y1="14.5" x2="12" y2="26.5"/>
                        <line id="line-8" className={`cls-2 svg-line-${color}`} x1="12" y1="14.5" x2="6" y2="24.89"/>
                        <line id="line-9" className={`cls-2 svg-line-${color}`} x1="12" y1="14.5" x2="1.61" y2="20.5"/>
                        <line id="line-10" className={`cls-2 svg-line-${color}`} x1="12" y1="14.5" y2="14.5"/>
                        <line id="line-11" className={`cls-2 svg-line-${color}`} x1="12" y1="14.5" x2="1.61" y2="8.5"/>
                        <line id="line-12" className={`cls-2 svg-line-${color}`} x1="12" y1="14.5" x2="6" y2="4.11"/>
                    </g>
                </g>
            </svg>
    )
}