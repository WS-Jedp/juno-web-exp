import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

import nextConnect from 'next-connect'
import auth from '../../../../middlewares/auth'

interface RequestWithUser extends NextApiRequest {
    user: {[key:string]: string}
}

const app = nextConnect()

app.use(auth).get((req:RequestWithUser, res:NextApiResponse) => {

    const user = {...req.user, password: undefined}
    res.json({
        
        status: 200,
        user
    })
})
.use((req:RequestWithUser, res: NextApiResponse, next: NextApiHandler) => {
    if(!req.user) {
        res.status(401).send('Unauthenticated')
    } else {
        next(req, res)
    }
})

export default app