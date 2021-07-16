import { NextApiRequest, NextApiResponse, PageConfig } from 'next'

import nextConnect from 'next-connect'
import auth from '../../../../middlewares/auth'

interface RequestWithUser extends NextApiRequest {
    user: {[key:string]: string},
    logOut: () => void
}

const app = nextConnect()


app.use(auth).post('/api/auth/logout', (req:RequestWithUser, res:NextApiResponse) => {
    req.logOut()
    res.status(204).json({logout: true})
})

export default app