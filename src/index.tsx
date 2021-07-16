import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './routes'
import { GeneralProvider } from './context/generalContext'

import './assets/styles/main.scss'


ReactDOM.render(
    (
        <GeneralProvider>
            <App />
        </GeneralProvider>
    ), 
    window.document.getElementById('juno-exp')
)