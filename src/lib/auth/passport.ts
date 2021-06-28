import { PrismaClient, Credential } from '@prisma/client'
import Crypto from 'crypto-js'
import passport from 'passport'
import LocalStrategy from 'passport-local' 

const validatePassword = (user:Credential, inputPassword:string) => {
    const inputPassHashed = Crypto.AES.encrypt(inputPassword, process.env.JUNO_PASWORDS_SECRET || 'SECRET').toString()
    return inputPassHashed === user.password
}

const prisma = new PrismaClient()

passport.serializeUser(function (user:any, done) {
    done(null, user.email)
})

passport.deserializeUser(async function(id:string, done){
    const user = await prisma.credential.findUnique({ where: { email: id } })
    done(null, user)
})

passport.use(
    new LocalStrategy.Strategy(
        { passReqToCallback: true },
        async (req, email, password, done) => {
            const user = await prisma.credential.findUnique({ where: { email: email } }) 
            
            if(!user || !validatePassword(user, password)) {
                done(null, null)
            } else {
                done(null, user)
            }
        }
    )
)

export default passport