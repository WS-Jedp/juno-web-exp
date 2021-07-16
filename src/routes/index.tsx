import React, {useContext} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BasicLayout } from '../layouts/basic'

import { GeneralContext } from '../context/generalContext'


export const App:React.FC = () => {

    const { handleTheme } = useContext(GeneralContext)


    return (
        <Router>
            <Switch>
                <Route path="/" component={() => (
                    <BasicLayout>
                        <h1 className="color-primary">Building</h1>
                        <button onClick={handleTheme}>theme</button>

                    </BasicLayout>)} />
            </Switch>
        </Router>
    )
}
