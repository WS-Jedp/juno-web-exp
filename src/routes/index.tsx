import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LogoStandardParticle } from '../components/logos/StandardParticle'

export const App:React.FC = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" component={() => (<h1>Hello World!</h1>)} />
            </Switch>
        </Router>
    )
}