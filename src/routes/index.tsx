import React, {useContext} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BasicLayout } from '../layouts/basic'

import { GeneralContext } from '../context/generalContext'

import { PilarCard } from '../components/pilars/card'

export const App:React.FC = () => {

    const { handleTheme } = useContext(GeneralContext)


    return (
        <Router>
            <Switch>
                <Route path="/" component={() => (
                    <BasicLayout>
                        <PilarCard 
                            index={1}
                            title="Science"
                            link="/science"
                            color="purple"
                        />
                    </BasicLayout>)} />
            </Switch>
        </Router>
    )
}
