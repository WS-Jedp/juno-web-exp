import React, {useContext} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BasicLayout } from '../layouts/basic'

import { Content } from '../components/content'

import { GeneralContext } from '../context/generalContext'

export const App:React.FC = () => {

    const { handleTheme } = useContext(GeneralContext)

    return (
        <Router>
            <Switch>
                <Route path="/" component={() => (
                    <BasicLayout>
                        <Content
                            color="white"
                            size="full"
                            position="center"
                        >
                            
                        </Content>
                    </BasicLayout>)} />
            </Switch>
        </Router>
    )
}
