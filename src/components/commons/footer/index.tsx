import React from 'react' 
import { LogoParticle } from '../../logos/Particle'

interface Footer {
    color?: 'primary' | 'secondary'
}

export const Footer:React.FC<Footer> = ({ color = 'primary' }) => {
    return (
        <footer className={`bg-${color} relative flex flex-col align-center justify-center footer`}>
            <LogoParticle color={color === 'primary' ? 'white' : 'black'} width={42} height={42} />
            <small className={`color-${color === 'primary' ? 'secondary' : 'primary'}`}>
                A son of the humankind
            </small>
        </footer>
    )
}