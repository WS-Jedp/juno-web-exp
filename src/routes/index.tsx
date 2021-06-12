import React, {useContext} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BasicLayout } from '../layouts/basic'

import { GeneralContext } from '../context/generalContext'

import { StudyCard } from '../components/studies/card'

export const App:React.FC = () => {

    const { handleTheme } = useContext(GeneralContext)


    return (
        <Router>
            <Switch>
                <Route path="/" component={() => (
                    <BasicLayout>
                        <StudyCard 
                            pilar="science"
                            title="Physics"
                            description="Understanding how works the world to change it"
                            purposes={['storytelling', 'ux']}
                        />
                        <StudyCard 
                            pilar="art"
                            title="Blender"
                            description="3D model software to create unique experiences"
                            purposes={['branding', 'ux']}
                        />
                        <StudyCard 
                            pilar="technology"
                            title="Nanotechnology"
                            description="From particles to stars"
                            purposes={['Research']}
                        />

                        <button onClick={handleTheme}>Theme</button>

                    </BasicLayout>)} />
            </Switch>
        </Router>
    )
}
