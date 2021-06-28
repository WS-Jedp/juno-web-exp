import Iron from '@hapi/iron'

import { CookiesSession } from './session'

export async function createLoginSession(session:CookiesSession, secret: string) {
    const createdAt:number = Date.now()
    const obj = { ...session, createdAt }
    const token = await Iron.seal(obj, secret, Iron.defaults)

    return token
}

export async function getLoginSession(token:string, secret: string) {
    const session:CookiesSession = await Iron.unseal(token, secret, Iron.defaults)
    const expiresAt = Number(session.createdAt) + Number(session.maxAge) * 1000

    if(Number(session.maxAge) && Date.now() > expiresAt) {
        throw new Error('Session Expired!')
    }

    return session
}