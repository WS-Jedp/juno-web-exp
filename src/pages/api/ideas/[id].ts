import nextConnect from 'next-connect'
import { PrismaClient, IdeaCategory, Idea, StoryContent } from '@prisma/client'
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
        idea: (Idea & { storyContent: StoryContent | null}) | null
    }
}

app.get(async (req:RequestWithUser, res:NextApiResponse<ResponseGetIdeas>) => {
    const prisma = new PrismaClient() 
    req.query as RequestQuery

    const id = Number(req.query.id)    
    const idea = await prisma.idea.findUnique({ where: { id: id }, include: { storyContent: true }})

    res.status(200).json({
        status: 200,
        data: {
            idea
        }
    })
})

export default app