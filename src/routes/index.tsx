import React, {useContext} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BasicLayout } from '../layouts/basic'

import { OrbitalWayInformation } from '../components/orbitalWay/information'

export const App:React.FC = () => {


    return (
        <Router>
            <Switch>
                <Route path="/" component={() => (
                    <BasicLayout>
                        <h3 className="font-serif font-thin">
                            Testing!
                        </h3>
                    </BasicLayout>)} />
            </Switch>
        </Router>
    )
}
