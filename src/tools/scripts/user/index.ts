import { PrismaClient } from '@prisma/client'
import Crypto from 'crypto-js'

const { CREDENTIAL_JUNO_USERNAME = '', CREDENTIAL_JUNO_EMAIL = '', CREDENTIAL_JUNO_TYPE = '', CREDENTIAL_JUNO_PASSWORD = '', BEING_JUNO_NAME = '', BEING_JUNO_LAST_NAME = '', JUNO_PASWORD_SECRETS = 'secret-passwords'} = process.env 

const JUNO = {
    name: BEING_JUNO_NAME,
    lastName: BEING_JUNO_LAST_NAME
}
export const createJunoUser = async () => {
    
    const prisma = new PrismaClient()

    const juno = await prisma.being.findFirst({ where: { name: BEING_JUNO_NAME } })

    if(juno) {
        return null
    }

    const being = await prisma.being.create({
        data: {
            name: JUNO.name,
            lastName: JUNO.lastName,
            createdAt: new Date(2001, 2, 5),
            credentialsId: {
                create: {
                    username: CREDENTIAL_JUNO_USERNAME,
                    email: CREDENTIAL_JUNO_EMAIL,
                    password: Crypto.AES.encrypt(CREDENTIAL_JUNO_PASSWORD, JUNO_PASWORD_SECRETS).toString(),
                    credentialType: 'JUNO'
                }
            }
        },
        include: {
            credentialsId: true
        }
    })

    return being || null
} 