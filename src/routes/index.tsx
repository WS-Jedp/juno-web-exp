import React, {useContext, useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BasicLayout } from '../layouts/basic'

import { ProcessCard } from '../components/process/card'

import { GeneralContext } from '../context/generalContext'

export const App:React.FC = () => {

    const { handleTheme } = useContext(GeneralContext)

    const [show, setShow] = useState<boolean>(false)

    return (
        <Router>
            <Switch>
                <Route path="/" component={() => (
                    <BasicLayout>
                        <ProcessCard 
                            title="Storytelling"
                            abstract="Stories for change life"
                            description="Stories are the best way to chagne the life of everybody, this is text to create a longer description and see the result that can happen just a test, so don't worry, so there is more ever more text just for tests and texts and see the result so I will start copy around shit to see what is going on "
                            purposes={['branding', 'ux', 'ui']}
                            showDetail={show}
                            onAction={handleTheme}
                        />
                    </BasicLayout>)} />
            </Switch>
        </Router>
    )
}
