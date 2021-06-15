import React from 'react'

type LogoWavesProps = {
    width?: number,
    height?: number,
    color?: 'white' | 'black'
}

export const LogoWaves:React.FC<LogoWavesProps> = ({ color = 'white', height = 30, width = 30 }) => {

    return (
        <svg className={`svg-color-${color}`} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 90.25 90.25">
            <defs>
                <clipPath id="clip-path" transform="translate(22.5 22.5)">
                    <rect className="cls-1" x="0.13" y="0.13" width="45" height="45"/>

                </clipPath>
            </defs>
            <title>JunoLogoWaves-Small-White</title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Visual_Language" data-name="Visual Language">
                    <g className="cls-2">
                        <path className="cls-3" d="M22.63,22.63a45,45,0,0,0-45-45" transform="translate(22.5 22.5)"/>

                        <path className="cls-3" d="M22.63,22.63c0-24.86-14.15-45-39-45" transform="translate(22.5 22.5)"/>

                        <path className="cls-3" d="M22.63,22.63c0-24.86,2.35-45-22.51-45" transform="translate(22.5 22.5)"/>

                        <line className="cls-4" x1="45.13" y1="6.12" x2="22.59" y2="6.13"/>
                        <line className="cls-4" x1="45.13" y1="22.62" x2="39.1" y2="22.62"/>
                        <line className="cls-3" x1="45.13" y1="0.12" x2="45.13" y2="45.12"/>
                        <path className="cls-3" d="M22.68,22.63a45,45,0,0,1,45-45" transform="translate(22.5 22.5)"/>
                        <path className="cls-3" d="M22.68,22.63c0-24.86,14.15-45,39-45" transform="translate(22.5 22.5)"/>
                        <path className="cls-3" d="M22.68,22.63c0-24.86-2.35-45,22.5-45" transform="translate(22.5 22.5)"/>
                        <line className="cls-4" x1="45.18" y1="6.13" x2="67.72" y2="6.13"/>
                        <line className="cls-4" x1="45.18" y1="22.63" x2="51.21" y2="22.63"/>
                        <line className="cls-3" x1="45.18" y1="0.13" x2="45.18" y2="45.13"/>
                        <path className="cls-3" d="M22.63,22.63a45,45,0,0,1-45,45" transform="translate(22.5 22.5)"/>
                        <path className="cls-3" d="M22.63,22.63c0,24.85-14.15,45-39,45" transform="translate(22.5 22.5)"/>
                        <path className="cls-3" d="M22.63,22.63c0,24.85,2.35,45-22.51,45" transform="translate(22.5 22.5)"/>
                        <line className="cls-4" x1="45.13" y1="84.13" x2="22.59" y2="84.13"/>
                        <line className="cls-4" x1="45.13" y1="67.63" x2="39.1" y2="67.63"/>
                        <line className="cls-3" x1="45.13" y1="90.13" x2="45.13" y2="45.13"/>
                        <path className="cls-3" d="M22.68,22.63a45,45,0,0,0,45,45" transform="translate(22.5 22.5)"/>
                        <path className="cls-3" d="M22.68,22.63c0,24.85,14.15,45,39,45" transform="translate(22.5 22.5)"/>
                        <path className="cls-3" d="M22.68,22.63c0,24.85-2.35,45,22.5,45" transform="translate(22.5 22.5)"/>
                        <line className="cls-4" x1="45.18" y1="84.13" x2="67.72" y2="84.13"/>
                        <line className="cls-4" x1="45.18" y1="67.63" x2="51.21" y2="67.63"/>
                        <line className="cls-3" x1="45.18" y1="90.13" x2="45.18" y2="45.13"/>
                        <rect className="cls-4" x="0.13" y="0.13" width="90" height="90"/>
                        <circle className="cls-5" cx="45.18" cy="45.13" r="3"/>
                        <line className="cls-4" x1="84.18" y1="90.13" x2="84.18" y2="0.13"/>
                        <line className="cls-4" x1="67.68" y1="90.13" x2="67.68" y2="0.13"/>
                        <line className="cls-4" x1="22.63" y1="90.13" x2="22.63" y2="0.13"/>
                        <line className="cls-4" x1="6.13" y1="90.13" x2="6.13" y2="0.13"/>
                    </g>
                <rect className="cls-3" x="22.63" y="22.62" width="45" height="45"/>
            </g>
            </g>
        </svg>
    )
}