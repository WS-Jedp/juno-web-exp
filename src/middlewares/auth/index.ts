import nextConnect from 'next-connect'
import session from '../../lib/auth/session'
import passport from '../../lib/auth/passport'
import Dotenv from 'dotenv'

Dotenv.config()

const auth = nextConnect()
.use(
    session({
        name: 'token',
        secret: process.env.JUNO_SECRET || 'secret',
        cookie: {
            maxAge: 60 * 60 * 8,
            httpOnly: false,
            secure: false,
            path: '/',
            sameSite: 'lax'
        }
    })
)
.use(passport.initialize())
.use(passport.session())

export default auth