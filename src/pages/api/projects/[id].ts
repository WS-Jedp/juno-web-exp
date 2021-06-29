import nextConnect from 'next-connect'
import { PrismaClient, Project, StoryContent } from '@prisma/client'
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
        project?: (Project & { storyContent: StoryContent | null}) | null,
        error?: string
    }
}

app.get(async (req:RequestWithUser, res:NextApiResponse<ResponseGetIdeas>) => {
    const prisma = new PrismaClient() 
    const { id } = req.query as RequestQuery

    const project = await prisma.project.findUnique({ where: { id: Number(id) }, include: { storyContent: true }})

    res.status(200).json({
        status: 200,
        data: {
            project
        }
    })
})

export default app