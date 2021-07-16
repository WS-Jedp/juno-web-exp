import nextConnect from 'next-connect'
import { PrismaClient, Partner, PartnerCategory } from '@prisma/client'
import { NextApiRequest, NextApiResponse,  } from 'next'

import auth from '../../../middlewares/auth'

interface RequestWithUser extends NextApiRequest {
    user: {[key:string]: string}
}

const app = nextConnect()


interface RequestBody {
    category?: PartnerCategory,
    from: number,
}

interface ResponseGetIdeas {
    status: number,
    data: {
        partners: Partner[]
    }
}

interface RequestBodyPost {
    name: string,
    abstract: string,
    beingId: number,
    category: PartnerCategory,
}

interface ResponsePostIdea {
    status: 201,
    data: {
        message: string,
        partnerId: number
    }
}

app.get(async (req:RequestWithUser, res:NextApiResponse<ResponseGetIdeas>) => {
    const prisma = new PrismaClient() 

    const { from, category } = req.body as RequestBody

    const partners = await prisma.partner.findMany({ where: { partnerCategory: category }, skip: from, take: 6})

    res.status(200).json({
        status: 200,
        data: {
            partners
        }
    })
})
.use(auth)
.post(async (req: RequestWithUser, res: NextApiResponse<ResponsePostIdea>) => {

    const prisma = new PrismaClient()

    const { name, abstract , beingId, category } = req.body as RequestBodyPost

    const partnerCreated = await prisma.partner.create({ data: { 
        name,
        abstract,
        beingId,
        partnerCategory: category,
     }})

    res.status(201).json({
        status: 201,
        data: {
            message: 'Partner created',
            partnerId: partnerCreated.id
        }
    })
    
})

export default app