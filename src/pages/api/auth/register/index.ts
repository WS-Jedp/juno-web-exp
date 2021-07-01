import nextConnect from 'next-connect'
import Crypto from 'crypto-js'
import { PrismaClient, Being, Credential, CredentialType } from '@prisma/client'
import { NextApiRequest, NextApiResponse,  } from 'next'
import auth from '../../../../middlewares/auth'


const app = nextConnect()

interface RequestBody {
    username: string,
    email: string,
    password: string,
    credentialType: CredentialType,
    name: string,
    lastName: string,
}

app.use(auth).post(async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient()

    const { email, username, name, lastName, password, credentialType } = req.body as RequestBody

    const passHashed = Crypto.AES.encrypt(password, process.env.JUNO_PASWORDS_SECRET || '').toString()

    const credential = await prisma.credential.create({ include: { being: true }, data: {
        email,
        password: passHashed,
        username,
        credentialType,
        being: {
            create: {
                name,
                lastName,
                createdAt: new Date()
            }
        }
    } })
    


    res.status(201).json({
        status: 200,
        data: {
            message: 'Credentials and Being created',
            credential: { ...credential, password: null }
        }
    })

})