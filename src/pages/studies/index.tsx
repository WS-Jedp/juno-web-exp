import React from 'react'
import { CurrentStudy, PrismaClient, Service, Study } from '@prisma/client'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

import { StudiesCelestialBodies } from '../../tools/content/celestialBodies'

import { BasicLayout } from '../../layouts/basic'
import { ExploreContainer } from '../../containers/explore'
import { KnowledgesContainer } from '../../containers/studies/knowledges'
import { CurrentStudyContainer } from '../../containers/studies/current'


interface StudyProps extends Omit<Study, 'startedAt'|'masteredAt'> {
    startedAt: string,
    masteredAt?: string | null
}

export type CurrentStudyWithStudy = (CurrentStudy & { study: StudyProps | null }) | null

interface StudiesProps {
    currentStudy: CurrentStudyWithStudy
}

export const getStaticProps:GetStaticProps<StudiesProps> = async (context) => {

    const prisma = new PrismaClient()
    const currentStudy = await prisma.currentStudy.findFirst({include: { study: true }})
    
    // if(!currentStudy || !currentStudy.study) {
    //     return {
    //         props: {
    //             currentStudy: null
    //         }    
    //     }
    // }

    // {...currentStudy, study: { ...study, masteredAt: study.masteredAt?.toString(), startedAt: study.startedAt.toString() }}

    // const study = currentStudy.study
    return {
        props: {
            currentStudy: {
                id: 1,
                progress: 90,
                studyId: 1,
                study: {
                    id: 1,
                    description: 'Programming language with great focus on data management and mathematics.',
                    name: 'Python',
                    experience: 'Mid',
                    pilar: 'SCIENCE',
                    startedAt: new Date().toString(),
                    state: 'MASTERED',
                    masteredAt: new Date().toString(),
                    whyNeeded: null
                }
            }
        }
    }
}

const Studies:React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ currentStudy }) => {

    const router = useRouter()

    if(!currentStudy || !currentStudy.study) {
        return (
            <BasicLayout color="primary">
                <h3 className="color-secondary">Not Found</h3>
            </BasicLayout>
        )
    }


    return (
        <BasicLayout color="primary">
            <ExploreContainer
                title="Studies"
                description="Dreams can come true, but to make this happen we need to understand our world and how it works. The best way to do this is always learning something new, from science, art and/or technology."
                content={StudiesCelestialBodies}
                onExplore={() => router.push('#knowledges')}
                color="primary"
            />
            <KnowledgesContainer 
                position="end"
                color="secondary"
            />
            <CurrentStudyContainer 
                currentStudy={currentStudy}
                color="secondary"
            />
        </BasicLayout>
    )
}

export default Studies
