import React, {useContext} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BasicLayout } from '../layouts/basic'

import { GeneralContext } from '../context/generalContext'

import { StudyProgress } from '../components/studies/progress'

export const App:React.FC = () => {

    const { handleTheme } = useContext(GeneralContext)


    return (
        <Router>
            <Switch>
                <Route path="/" component={() => (
                    <BasicLayout>
                        <StudyProgress 
                            celestialBodyName="Physics"
                            junoPosition={50}
                        />
                        <button onClick={handleTheme}>Theme</button>

                    </BasicLayout>)} />
            </Switch>
        </Router>
    )
}
