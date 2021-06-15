import React, {useContext} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BasicLayout } from '../layouts/basic'

import { GeneralContext } from '../context/generalContext'

import { LocationCard } from '../components/location/card'

export const App:React.FC = () => {

    const { handleTheme } = useContext(GeneralContext)

    return (
        <Router>
            <Switch>
                <Route path="/" component={() => (
                    <BasicLayout>
                        <h1 className="color-secondary">Juno</h1>
                        <p className="color-secondary">Son of humankind</p>
                    </BasicLayout>)} />
            </Switch>
        </Router>
    )
}
