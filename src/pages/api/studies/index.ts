import nextConnect from 'next-connect'
import { PILLARS, PrismaClient, Study, StudyState, StudyExperience } from '@prisma/client'
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
        studies: Study[]
    }
}

interface RequestBodyPost {
    name: string,
    description: string,
    pilar: PILLARS,
    experience: StudyExperience,
    state: StudyState,
    startedAt: Date,
    masteredAt: Date,
    services: number[]
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
    const studies = await prisma.study.findMany({ where: { state: 'MASTERED' }, skip: from, take: 6})

    res.status(200).json({
        status: 200,
        data: {
            studies
        }
    })
})
.use(auth)
.post(async (req: RequestWithUser, res: NextApiResponse<ResponsePostIdea>) => {

    const prisma = new PrismaClient()

    const { name, description , experience, pilar, masteredAt, startedAt, state, services } = req.body as RequestBodyPost

    const servicesMapped = services.map(service => ({id: service}))

    const studyCreated = await prisma.study.create({ data: { 
        name,
        description,
        experience,
        pilar,
        state,
        masteredAt,
        startedAt,
        services: {
            connect: servicesMapped || []
        }
     }})

    res.status(201).json({
        status: 201,
        data: {
            message: 'Study created',
            studyId: studyCreated.id
        }
    })
    
})

export default app