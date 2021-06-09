import React, {useContext} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export const App:React.FC = () => {


    return (
        <Router>
            <Switch>
                <Route path="/" component={() => (<h1>hello world</h1>)} />
            </Switch>
        </Router>
    )
}
