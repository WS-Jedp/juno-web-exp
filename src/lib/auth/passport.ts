import { PrismaClient, Credential } from '@prisma/client'
import Crypto from 'crypto-js'
import { NextApiRequest } from 'next'
import passport from 'passport'
import { Strategy } from 'passport-local' 

const validatePassword = (user:Credential, inputPassword:string) => {
    const pass = Crypto.AES.decrypt(user.password, process.env.JUNO_PASWORDS_SECRET || 'SECRET').toString(Crypto.enc.Utf8)
    return inputPassword === pass
}

const prisma = new PrismaClient()

passport.serializeUser(function (user:any, done) {
    done(null, user.email)
})

passport.deserializeUser(async function(req:NextApiRequest, id:string, done:any){
    const user = await prisma.credential.findUnique({ where: { email: id } })
    done(null, user)
})

passport.use(
    new Strategy(
        { passReqToCallback: false, usernameField: 'email', passwordField: 'password' },
        async (email, password, done) => {
            const user = await prisma.credential.findUnique({ where: { email: email } }) 
            
            if(!user || !validatePassword(user, password)) {
                done(null, null)
            } else {
                
                const userData = {...user, password: undefined}
                done(null, userData)
            }
        }
    )
)

export default passport