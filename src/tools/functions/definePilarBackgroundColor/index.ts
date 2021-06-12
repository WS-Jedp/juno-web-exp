import { PILLARS } from '../../types/pillars'

type PillarColors = {
    [key:string]: string
}

type DefinePilarColor = {
    pilar: PILLARS
}


const PILAR_BACKGRUOND_COLORS:PillarColors = {
    'science': 'bg-purple',
    'art': 'bg-light-blue',
    'technology': 'bg-main',
}
const DEFAULT_PILAR_BACKGROUND_COLOR = 'color-purple'

export const definePilarBackgroundColor = ({ pilar }:DefinePilarColor):string => PILAR_BACKGRUOND_COLORS[pilar] || DEFAULT_PILAR_BACKGROUND_COLOR