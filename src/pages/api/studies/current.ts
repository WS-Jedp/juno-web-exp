import nextConnect from 'next-connect'
import { PrismaClient, Study, StudyState, CurrentStudy } from '@prisma/client'
import { NextApiRequest, NextApiResponse,  } from 'next'

import auth from '../../../middlewares/auth'

interface RequestWithUser extends NextApiRequest {
    user: {[key:string]: string}
}

const app = nextConnect()

interface ResponseGetIdeas {
    status: number,
    data: {
        currentStudy: (CurrentStudy & {study: Study | null})[]
    }
}

interface RequestBodyPost {
    progress: number,
    studyId: number
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

    const currentStudy = await prisma.currentStudy.findMany({ include: { study: true } })

    res.status(200).json({
        status: 200,
        data: {
            currentStudy
        }
    })
})
.use(auth)
.post(async (req: RequestWithUser, res: NextApiResponse<ResponsePostIdea>) => {

    const prisma = new PrismaClient()

    const { progress, studyId } = req.body as RequestBodyPost

    const currentStudy = await prisma.currentStudy.create({data: {
        progress,
        studyId
    } })

    res.status(201).json({
        status: 201,
        data: {
            message: 'Current Study created',
            studyId: currentStudy.id
        }
    })
    
})
.put(async (req: RequestWithUser, res: NextApiResponse<ResponsePostIdea>) => {

    const prisma = new PrismaClient()

    const { progress, studyId } = req.body as RequestBodyPost

    const currentStudy = await prisma.currentStudy.update({ where: { id: 1 }, data: {
        progress,
        studyId
    } })

    res.status(201).json({
        status: 201,
        data: {
            message: 'Current Study updated',
            studyId: currentStudy.id
        }
    })
    
})

export default app