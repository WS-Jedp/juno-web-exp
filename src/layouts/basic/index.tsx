import React from 'react'
import './styles.scss'

export const BasicLayout:React.FC = ({ children }) => {

    return (
        <div className="bg-primary basic-layout">
            {
                children
            }
        </div>
    )
}