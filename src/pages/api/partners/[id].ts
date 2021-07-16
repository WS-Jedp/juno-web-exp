import nextConnect from 'next-connect'
import { PrismaClient, Partner, Being } from '@prisma/client'
import { NextApiRequest, NextApiResponse,  } from 'next'

interface RequestWithUser extends NextApiRequest {
    user: {[key:string]: string}
}

const app = nextConnect()

interface RequestQuery {
    id?: number,
}

interface ResponseGetIdeas {
    status: number,
    data: {
        partner: (Partner & {being: Being | null}) | null
    }
}

app.get(async (req:RequestWithUser, res:NextApiResponse<ResponseGetIdeas>) => {
    const prisma = new PrismaClient() 
    const { id } = req.query as RequestQuery

    const partner = await prisma.partner.findUnique({ where: { id: Number(id) }, include: { being: true }})

    res.status(200).json({
        status: 200,
        data: {
            partner
        }
    })
})

export default app