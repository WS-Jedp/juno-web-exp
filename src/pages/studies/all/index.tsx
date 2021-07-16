import React from 'react'
import { PrismaClient, Study } from '@prisma/client'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { SmallBasicLayout } from '../../../layouts/smallBasic'

import { StudiesAllContainer } from '../../../containers/studies/all'

export interface StudyProps extends Omit<Study, 'startedAt'|'masteredAt'> {
    startedAt: string,
    masteredAt?: string | null
}

interface StudiesProps {
    studies: StudyProps[]
}

export const getStaticProps:GetStaticProps<StudiesProps> = async () => {
    const prisma = new PrismaClient()
    const studies = await prisma.study.findMany({ take: 6 })
    const studiesMapped = studies.map(study => ({...study, startedAt: study.startedAt.toString(), masteredAt: study.masteredAt && study.masteredAt.toString()}))

    return {
        props: {
            studies: studiesMapped
        }
    }
}

const StudiesAll:React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ studies }) => {

    return (
        <SmallBasicLayout
            color="primary"
            title="All Studies"
            abstract="Discover all the skills and knowledge that Juno has been learned and how they can help make dreams come true"
        >
            <StudiesAllContainer 
                color="secondary"
                action={() => {}}
                studies={studies}
            />
        </SmallBasicLayout>
    )
}

export default StudiesAll