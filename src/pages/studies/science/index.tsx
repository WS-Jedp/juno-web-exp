import React from 'react'
import { PrismaClient, Study } from '@prisma/client'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { SmallBasicLayout } from '../../../layouts/smallBasic'

import { StudiesAllContainer } from '../../../containers/studies/all'

import { KnowledgesContent } from '../../../tools/content/studies'

export interface StudyProps extends Omit<Study, 'startedAt'|'masteredAt'> {
    startedAt: string,
    masteredAt?: string
}

interface StudiesProps {
    studies: StudyProps[]
}

export const getStaticProps:GetStaticProps<StudiesProps> = async () => {
    const prisma = new PrismaClient()
    const studies = await prisma.study.findMany({  where: { pilar: 'SCIENCE' } })
    const studiesMapped = studies.map(study => ({...study, startedAt: study.startedAt.toString(), masteredAt: study.masteredAt?.toString()}))

    return {
        props: {
            studies: studiesMapped
        }
    }
}

const ScienceStudies:React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ studies }) => {

    return (
        <SmallBasicLayout
            color="primary"
            title="Science Knowledges"
            abstract={KnowledgesContent.science.description || ''}
        >
            <StudiesAllContainer 
                color="secondary"
                action={() => {}}
                studies={studies}
            />
        </SmallBasicLayout>
    )
}

export default ScienceStudies