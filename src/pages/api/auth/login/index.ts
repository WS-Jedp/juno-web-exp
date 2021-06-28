import { NextApiRequest, NextApiResponse } from 'next'

import nextConnect from 'next-connect'
import auth from '../../../../middlewares/auth'
import passport from '../../../../lib/auth/passport'

interface RequestWithUser extends NextApiRequest {
    user: {[key:string]: string}
}

const handler = nextConnect()

handler.use(auth).post(passport.authenticate('local'), (req:RequestWithUser, res:NextApiResponse) => {
    res.json(req.user)
})

export default handler