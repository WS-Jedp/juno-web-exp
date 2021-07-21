import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { Idea, StoryContent, PrismaClient } from '@prisma/client'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { defineCategoryColor } from '../../tools/functions/defineCategoryColor'

import { LayoutStory } from '../../layouts/story'

import { RelatedIdeasContainer } from '../../containers/ideas/related'

interface IdeaProp extends Omit<Idea, 'createdAt'> {
    createdAt?: string,
}

interface PropsStory {
    idea: (IdeaProp & {storyContent: StoryContent | null}) | null
    // relatedIdeas: Idea[],
}

export const getServerSideProps:GetServerSideProps<PropsStory> = async (context) => {

    const prisma = new PrismaClient()
    const idea = await prisma.idea.findUnique({ where: { id: Number(context.query.id) }, include: { storyContent: true } })
    // const relatedIdeas = await prisma.idea.findMany({ where: { category: idea?.category, NOT: { id: idea?.id } }, take: 5 })

    return {
        props: {
            idea: idea ? { ...idea, createdAt: idea?.createdAt.toString() } : null,
            // relatedIdeas: relatedIdeas
        }
    }

}

const IdeaStory:React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ idea }) => {

    const { back } = useRouter()

    if(!idea || !idea.storyContent) {
        return (
            <LayoutStory>
                <section className="flex flex-row align-center justify-center idea-story idea-story__not-found">
                    <h3 className="text-center">
                        Sorry, we can't find that Idea
                    </h3>
                </section>
            </LayoutStory>
        )
    }

    return (
        <LayoutStory color="primary">
            <Head>
                <title>Juno - {idea.title}</title>
                <link rel="shortcut icon" href="images/favicon/juno.ico" type="image/x-icon" />
                <meta name="description" content={idea.abstract}></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content={`Juno's Idea - ${idea.title}`}></meta>
                <meta property="og:description" content={idea.abstract}></meta>
                <meta property="og:image" content={idea.cover}></meta>
                <meta property="og:url" content="permalink"></meta>
            </Head>
            <figure className="idea-story__cover">
                <img title={idea.title} alt={idea.title} src={idea.cover} />
            </figure>
            <section className="idea-story idea-story__header">
                <a className="color-primary" onClick={() => back()}>Go Back</a>
                <div className="idea-story__header-title">
                    <h3 className={defineCategoryColor({ category: idea.category.toLowerCase() })}>{idea.category.toLowerCase()}</h3>
                    <h1 className="color-primary">{idea.title}</h1>
                </div>
                <p className="color-primary">
                    {
                        idea.introductoryQuestion
                    }
                </p>
                <p className="color-primary">
                    {
                        idea.abstract
                    }
                </p>
            </section>
            <section className="idea-story idea-story__content">
                <ReactMarkdown
                    plugins={[gfm]}
                    children={idea.storyContent.content}
                />
            </section>
            {/* {
                relatedIdeas.length > 0 && (
                    <RelatedIdeasContainer 
                        relatedIdeas={relatedIdeas}
                        ideaType={idea.category}
                        color="secondary"
                    />
                )
            } */}
        </LayoutStory>
    )
}

export default IdeaStory