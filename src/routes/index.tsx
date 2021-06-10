import React, {useContext} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BasicLayout } from '../layouts/basic'

import { OrbitalWay } from '../components/orbitalWay'
import { CelestialBodyProps } from '../components/orbitalWay/celestialBody'

import { GeneralContext } from '../context/generalContext'

export const App:React.FC = () => {

    const { handleTheme } = useContext(GeneralContext)

    const sections: CelestialBodyProps[] = [
        {
            title: 'About',
            abstract: 'Know more about Juno',
            link: '/'
        },
        {
            title: 'Studio',
            abstract: 'Learn about the project of Juno',
            link: '/studio'
        }
    ]

    return (
        <Router>
            <Switch>
                <Route path="/" component={() => (
                    <BasicLayout>
                        <OrbitalWay 
                            celestialBodies={sections}
                        />
                    </BasicLayout>)} />
            </Switch>
        </Router>
    )
}
