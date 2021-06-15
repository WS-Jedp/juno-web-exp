import React, {useContext} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BasicLayout } from '../layouts/basic'

import { GeneralContext } from '../context/generalContext'

import { ButtonCircle } from '../components/buttons/circle'

export const App:React.FC = () => {

    const { handleTheme } = useContext(GeneralContext)


    return (
        <Router>
            <Switch>
                <Route path="/" component={() => (
                    <BasicLayout>
                        <ButtonCircle title="Theme" color="primary" action={handleTheme} />

                    </BasicLayout>)} />
            </Switch>
        </Router>
    )
}
