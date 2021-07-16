import { AvailableColors } from '../../types/colors'

type BackgroundColors = {
    [key:string]: string
}

type DefineBackgroundColor = {
    color: AvailableColors
}

const BACKGROUND_COLORS:BackgroundColors = {
    'black': 'bg-dark',
    'white': 'bg-light',
    'main': 'bg-main',
    'purple': 'bg-purple',
    'light-blue': 'bg-light-blue',
    'primary': 'bg-primary',
    'secondary': 'bg-secondary',
}

const DEFAULT_BACKGROUND_COLOR:string = 'bg-secondary'

export const defineBackgroundColor = ({ color }:DefineBackgroundColor):string => BACKGROUND_COLORS[color.toLowerCase()] || DEFAULT_BACKGROUND_COLOR
