import { PILLARS } from '../../types/pillars'

type PillarColors = {
    [key:string]: string
}

type DefinePilarColor = {
    pilar: PILLARS
}

const PILAR_COLORS:PillarColors = {
    'science': 'color-purple',
    'art': 'color-light-blue',
    'technology': 'color-main',
}

const DEFAULT_PILAR_COLOR = 'color-purple'

export const definePilarColor = ({ pilar }:DefinePilarColor):string => PILAR_COLORS[pilar] || DEFAULT_PILAR_COLOR