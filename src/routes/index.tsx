import React, {useContext} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BasicLayout } from '../layouts/basic'

import { GeneralContext } from '../context/generalContext'

import Image from '../assets/images/2x/CelestialBody-Black@2x.png'
import { StoryCard } from '../components/stories/card'

export const App:React.FC = () => {

    const { handleTheme } = useContext(GeneralContext)


    return (
        <Router>
            <Switch>
                <Route path="/" component={() => (
                    <BasicLayout>
                        <h1>
                            Building!
                        </h1>

                    </BasicLayout>)} />
            </Switch>
        </Router>
    )
}
