import { parse, serialize } from 'cookie'
import { NextApiHandler, NextApiRequest, NextApiResponse, } from 'next';
import { NextApiRequestCookies } from 'next/dist/next-server/server/api-utils';

import { createLoginSession, getLoginSession } from './auth'

export type CookiesSession = {
    [key:string]: string | number | boolean | any[]
}

export interface RequestWithSession extends NextApiRequest{
    session: CookiesSession
}

function parseCookies(req:NextApiRequest) {
    if(req.cookies) return req.cookies
    
    const cookie = req.headers?.cookie
    return parse(cookie || '')
}

type Session = {
    name: string,
    secret: string,
    cookie: CookiesSession
}

export default function session({name, secret, cookie: cookieOpts}:Session) {
    return async (req:RequestWithSession, res: NextApiResponse, next:any) => {
        const cookies = parseCookies(req)
        const token = cookies[name]
        let unsealed = {}

        if(token) {
            try {
                unsealed = await getLoginSession(token, secret)
            } catch(error) {
                throw new Error('Invalid token!')
            }
        }

        req.session = unsealed
        
        const oldEnd = res.end
        res.end = async function resEndProxy(...args:any) { 

            if(res.finished || res.writableEnded || res.headersSent) return
            if(cookieOpts.maxAge) {
                req.session.maxAge = cookieOpts.maxAge
            }
            
            const token = await createLoginSession(req.session, secret)
            
            res.setHeader('Set-Cookie', serialize(name, token, cookieOpts))
            oldEnd.apply(this, args)
        }

        next()

    }
}
