import nextConnect from 'next-connect'
import { PrismaClient, Service, PILLARS } from '@prisma/client'
import { NextApiRequest, NextApiResponse,  } from 'next'

import auth from '../../../middlewares/auth'

interface RequestWithUser extends NextApiRequest {
    user: {[key:string]: string}
}

const app = nextConnect()


interface RequestBody {
    from: number,
}

interface ResponseGetIdeas {
    status: number,
    data: {
        services: Service[]
    }
}

interface RequestBodyPost {
    name: string,
    description: string,
    pilar: PILLARS,
    offeredSince: number,
    whyJuno?: string,
    whyNeeded: string,
    studies: number[]
}

interface ResponsePostIdea {
    status: 201,
    data: {
        message: string,
        studyId: number
    }
}

app.get(async (req:RequestWithUser, res:NextApiResponse<ResponseGetIdeas>) => {
    const prisma = new PrismaClient() 

    const { from } = req.body as RequestBody
    const services = await prisma.service.findMany({ skip: from, take: 3})

    res.status(200).json({
        status: 200,
        data: {
            services
        }
    })
})
.use(auth)
.post(async (req: RequestWithUser, res: NextApiResponse<ResponsePostIdea>) => {

    const prisma = new PrismaClient()

    const { name, description, pilar, offeredSince, studies, whyJuno, whyNeeded } = req.body as RequestBodyPost

    const studiesMapped = studies.map(study => ({id: study}))

    const serviceCreated = await prisma.service.create({ data: { 
        name,
        description,
        pilar,
        offeredSince,
        whyJuno,
        whyNeeded,
        studies: {
            connect: studiesMapped || []
        }
     }})

    res.status(201).json({
        status: 201,
        data: {
            message: 'Service created',
            studyId: serviceCreated.id
        }
    })
    
})

export default app