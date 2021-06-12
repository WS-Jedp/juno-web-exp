import { PILLARS } from '../../types/pillars'

type PilarsURL = {
    [key: string]: string
}

type DefinePilarUrl = {
    pilar: PILLARS;
}

const PILLARS_URL:PilarsURL = {
    'science': '/pilars/science',
    'art': '/pilars/art',
    'technology': '/pilars/technology'
}

const DEFAULT_PILAR_URL = '/pilars'

export const definePilarUrl = ({ pilar }:DefinePilarUrl):string => PILLARS_URL[pilar] || DEFAULT_PILAR_URL