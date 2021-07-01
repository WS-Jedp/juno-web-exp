import nextConnect from 'next-connect'
import { PrismaClient, ProjectCategory, Project, ProjectState } from '@prisma/client'
import { NextApiRequest, NextApiResponse,  } from 'next'

import auth from '../../../middlewares/auth'

interface RequestWithUser extends NextApiRequest {
    user: {[key:string]: string}
}

const app = nextConnect()


interface RequestBody {
    category?: ProjectCategory,
    from: number,
}

interface ResponseGetProjects {
    status: number,
    data: {
        projects: Project[]
    }
}

interface RequestBodyPost {
    name: string,
    abstract: string, 
    cover: string, 
    description: string,
    category: ProjectCategory, 
    createdAt: Date, 
    finishedAt?: Date,
    state: ProjectState,
    content: string
}

interface ResponsePostProject {
    status: number,
    data: {
        message: string,
        projectId?: number,
        error?: string
    }
}

app.get(async (req:RequestWithUser, res:NextApiResponse<ResponseGetProjects>) => {
    const prisma = new PrismaClient() 
    const { category, from } = req.body as RequestBody
    
    const projects = await prisma.project.findMany({ where: { category: category, OR: { state: 'ACCOMPLISHED', } }, skip: from, take: 4})

    res.status(200).json({
        status: 200,
        data: {
            projects
        }
    })
})
.use(auth)
.post(async (req: RequestWithUser, res: NextApiResponse<ResponsePostProject>) => {

    const prisma = new PrismaClient()

    const { name, abstract, cover, category, createdAt, description, finishedAt, state, content } = req.body as RequestBodyPost

    if(!name || !abstract || !cover || !category || !description || !createdAt || !content || !state) {

        res.status(400).json({
            status: 400,
            data: {
                error: 'There is no enough data',
                message: 'There is an error'
            }
        })
    }

    const projectCreated = await prisma.project.create({ data: { 
        name,
        abstract,
        cover,
        category,
        description,
        state,
        createdAt,
        finishedAt,
        storyContent: {
            create: {
                content
            }
        }
     }, include: {
         storyContent: true
     }})

    res.status(201).json({
        status: 201,
        data: {
            message: 'Project created',
            projectId: projectCreated.id
        }
    })
    
})

export default app