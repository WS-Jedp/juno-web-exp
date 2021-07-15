import nextConnect from 'next-connect'
import { PrismaClient, Idea, StoryContent, IdeaCategory } from '@prisma/client'
import { NextApiRequest, NextApiResponse,  } from 'next'
import auth from '../../../middlewares/auth'

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

interface RequestContentUpdate {
    abstract?: string, 
    cover?: string, 
    introductoryQuestion?: string, 
    title?: string, 
    category?: IdeaCategory, 
    createdAt?: Date, 
    content?: string;
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
}).use(auth).put(async (req:RequestWithUser, res:NextApiResponse) => {
    const prisma = new PrismaClient() 
    const { id } = req.query as RequestQuery

    
    const { content, ...data } = req.body as RequestContentUpdate
    
    const project = await prisma.idea.update({where: { id: Number(id) }, data: { ...data, storyContent: { update: { content: content } } }, include: { storyContent: true }})
    res.status(201).json({
        status: 201,
        data: {
            project
        }
    })

})

export default app