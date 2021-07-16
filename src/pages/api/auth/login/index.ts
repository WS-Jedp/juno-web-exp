import { NextApiRequest, NextApiResponse, PageConfig } from 'next'

import nextConnect from 'next-connect'
import auth from '../../../../middlewares/auth'
import passport from '../../../../lib/auth/passport'

interface RequestWithUser extends NextApiRequest {
    user: {[key:string]: string}
}

const app = nextConnect()


app.use(auth).post(passport.authenticate('local'), (req:RequestWithUser, res:NextApiResponse) => {
    res.status(200).json({
        status: 200,
        data: {
            user: req.user
        }
    })
})

export default app