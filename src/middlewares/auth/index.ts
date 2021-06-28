import nextConnect from 'next-connect'
import session from '../../lib/auth/session'
import passport from '../../lib/auth/passport'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import Dotenv from 'dotenv'

Dotenv.config()

const auth = nextConnect().use(
    session({
        name: 'token',
        secret: process.env.JUNO_SECRET || 'secret',
        cookie: {
            maxAge: String(60 * 60 * 8),
            httpOnly: String(false),
            secure: String(false),
            path: '/'
        }
    })
).use(passport.initialize()).use(passport.session())

export default auth