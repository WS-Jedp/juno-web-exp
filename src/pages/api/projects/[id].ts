import nextConnect from 'next-connect'
import { PrismaClient, Project, ProjectCategory, ProjectState, StoryContent } from '@prisma/client'
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
        project?: (Project & { storyContent: StoryContent | null}) | null,
        error?: string
    }
}

interface RequestContentUpdate {
    content?: string
    name?: string,
    abstract?: string, 
    cover?: string, 
    description?: string,
    category?: ProjectCategory, 
    createdAt?: Date, 
    finishedAt?: Date,
    state?: ProjectState,
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
}).use(auth).put(async (req:RequestWithUser, res:NextApiResponse) => {
    const prisma = new PrismaClient() 
    const { id } = req.query as RequestQuery

    
    const { content, ...data } = req.body as RequestContentUpdate
    if(!content) res.status(404).json({error: 'There is no content'})
    
    const project = await prisma.project.update({where: { id: Number(id) }, data: { ...data, storyContent: { update: { content: content } } }, include: { storyContent: true }})
    res.status(201).json({
        status: 201,
        data: {
            project
        }
    })

})

export default app