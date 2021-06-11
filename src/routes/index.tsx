import React, {useContext} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BasicLayout } from '../layouts/basic'

import { GeneralContext } from '../context/generalContext'

import { IdeaCategoryCard } from '../components/ideas/categoryCard'

export const App:React.FC = () => {

    const { handleTheme } = useContext(GeneralContext)


    return (
        <Router>
            <Switch>
                <Route path="/" component={() => (
                    <BasicLayout>
                        <IdeaCategoryCard 
                            title="Articles"
                            abstract="Learn Something New"
                            link="/articles"
                            color="main"
                        />
                        <IdeaCategoryCard 
                            title="Articles"
                            abstract="Learn Something New"
                            link="/articles"
                            color="light-blue"
                        />
                        <IdeaCategoryCard 
                            title="Articles"
                            abstract="Learn Something New"
                            link="/articles"
                            color="purple"
                        />
                    </BasicLayout>)} />
            </Switch>
        </Router>
    )
}
