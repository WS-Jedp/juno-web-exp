import React from 'react'

import { Header } from '../../containers/header'

export const BasicLayout:React.FC = ({ children }) => {

    return (
        <>
            <Header />
            <div className="bg-secondary basic-layout">
                {
                    children
                }
            </div>
        </>
    )
}