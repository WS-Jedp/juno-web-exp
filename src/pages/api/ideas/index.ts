import nextConnect from 'next-connect'
import { PrismaClient, IdeaCategory, Idea } from '@prisma/client'
import { NextApiRequest, NextApiResponse,  } from 'next'

import auth from '../../../middlewares/auth'

interface RequestWithUser extends NextApiRequest {
    user: {[key:string]: string}
}

const app = nextConnect()


interface RequestBody {
    category?: IdeaCategory,
    from: number,
}

interface ResponseGetIdeas {
    status: number,
    data: {
        ideas: Idea[]
    }
}

interface RequestBodyPost {
    abstract: string, 
    cover: string, 
    introductoryQuestion: string, 
    title: string, 
    category: IdeaCategory, 
    createdAt: Date, 
    content: string;
}

interface ResponsePostIdea {
    status: 201,
    data: {
        message: string,
        ideaId: number
    }
}

app.get(async (req:RequestWithUser, res:NextApiResponse<ResponseGetIdeas>) => {
    const prisma = new PrismaClient() 
    req.body as RequestBody
    
    const category = req.body.category 
    const from:number = req.body.from
    
    const ideas = await prisma.idea.findMany({ where: { category: category || '', OR: { category: 'ESSAY', } }, skip: from, take: 4})

    res.status(200).json({
        status: 200,
        data: {
            ideas
        }
    })
})
.use(auth)
.post(async (req: RequestWithUser, res: NextApiResponse<ResponsePostIdea>) => {

    const prisma = new PrismaClient()

    const { abstract, cover, introductoryQuestion, title, category, createdAt, content } = req.body as RequestBodyPost

    const ideaCreated = await prisma.idea.create({ data: { 
        title,
        abstract,
        cover,
        introductoryQuestion,
        category,
        createdAt,
        storyContent: {
            create: {
                content
            }
        }
     }, include: { storyContent: true } })

    res.status(201).json({
        status: 201,
        data: {
            message: 'Idea created',
            ideaId: ideaCreated.id
        }
    })
    
})

export default app