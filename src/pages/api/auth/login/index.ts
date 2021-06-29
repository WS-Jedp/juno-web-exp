import { NextApiRequest, NextApiResponse, PageConfig } from 'next'

import nextConnect from 'next-connect'
import auth from '../../../../middlewares/auth'
import passport from '../../../../lib/auth/passport'

interface RequestWithUser extends NextApiRequest {
    user: {[key:string]: string}
}

const app = nextConnect()


app.use(auth).post('/api/auth/login', passport.authenticate('local'), (req:RequestWithUser, res:NextApiResponse) => {
    res.json(req.user)
})

export default app