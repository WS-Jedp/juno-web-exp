import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export const App:React.FC = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" component={() => (<div>Hello world</div>)} />
            </Switch>
        </Router>
    )
}