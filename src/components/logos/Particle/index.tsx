import React from 'react'

type LogoParticleProps = {
    width?: number,
    height?: number,
    color?: 'white' | 'black'
}

export const LogoParticle = ({ width = 30, height=30, color="black" }:LogoParticleProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.61 44.51" width={width} height={height}>
    <title>JunoLogoParticle-Black</title>
    <g id="Layer_2" data-name="Layer 2">
        <g id="Visual_Language" data-name="Visual Language">
            <circle className={`p-cls-1 p-svg-${color}`} cx="8.81" cy="7.67" r="1.5"/>
            <line className={`p-cls-2 p-svg-line-${color}`} x1="17.61" y1="23.03" x2="17.61" y2="6.17"/>
            <line className={`p-cls-2 p-svg-line-${color}`} x1="17.61" y1="23.02" x2="30.62" y2="0.5"/>
            <line className={`p-cls-2 p-svg-line-${color}`} x1="17.61" y1="23.02" x2="30.45" y2="15.61"/>
            <line className={`p-cls-2 p-svg-line-${color}`} x1="17.61" y1="23.02" x2="62.61" y2="23.02"/>
            <line className={`p-cls-2 p-svg-line-${color}`} x1="17.61" y1="23.02" x2="37.17" y2="34.31"/>
            <line className={`p-cls-2 p-svg-line-${color}`} x1="17.61" y1="23.02" x2="29.73" y2="44.01"/>
            <line className={`p-cls-2 p-svg-line-${color}`} x1="17.61" y1="23.02" x2="17.61" y2="37.24"/>
            <line className={`p-cls-2 p-svg-line-${color}`} x1="17.61" y1="23.02" x2="12.66" y2="31.6"/>
            <line className={`p-cls-2 p-svg-line-${color}`} x1="17.61" y1="23.02" x2="10.49" y2="27.14"/>
            <line className={`p-cls-2 p-svg-line-${color}`} x1="17.61" y1="23.02" y2="23.02"/>
            <line className={`p-cls-2 p-svg-line-${color}`} x1="17.61" y1="23.02" x2="7.13" y2="16.97"/>
            <line className={`p-cls-2 p-svg-line-${color}`} x1="17.61" y1="23.02" x2="10.19" y2="10.17"/>
        </g>
    </g>
</svg>
)