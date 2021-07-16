import React, { useState } from 'react'

interface LocationMenuIcon {
    action: () => void
}

export const LocationMenuIcon:React.FC<LocationMenuIcon> = ({ action }) => {

    const [ open, setOpen ] = useState<boolean>(false)
    const handleAction = () => {
        setOpen(!open)
        action()
    }
    
    return (
        <div className="flex flex-col align-center justify-center location-menu-icon" onClick={handleAction}>
            <div className={`location-menu-icon__line location-menu-icon__line--first ${open && 'location-menu-icon__line--first-close'}`} />
            <div className={`location-menu-icon__line location-menu-icon__line--first ${open && 'location-menu-icon__line--second-close'}`} />
        </div>
    )
}