import React from 'react'
import { PrismaClient, Service } from '@prisma/client'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { SmallBasicLayout } from '../../../layouts/smallBasic'
import { KnowledgesContent } from '../../../tools/content/studies'

import { ServicesListContainer } from '../../../containers/services/list'

export interface ServiceProps extends Omit<Service, 'offeredSince'|'updatedAt'> {
    offeredSince: string,
    updatedAt?: string
}

interface ServicesProps {
    services: ServiceProps[]
}

export const getStaticProps:GetStaticProps<ServicesProps> = async () => {
    const prisma = new PrismaClient()
    const services = await prisma.service.findMany({ where: { pilar: 'TECHNOLOGY' } })
    const servicesMapped = services.map(service => ({...service, offeredSince: service.offeredSince.toString(), updatedAt: service.updatedAt?.toString()}))

    return {
        props: {
            services: servicesMapped
        }
    }
}

const TechnologyServices:React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ services }) => {

    return (
        <SmallBasicLayout
            color="primary"
            title="Technology Services"
            abstract={KnowledgesContent.science.description || ''}
        >
            <ServicesListContainer 
                color="secondary"
                action={() => {}}
                services={services}
            />
        </SmallBasicLayout>
    )
}

export default TechnologyServices