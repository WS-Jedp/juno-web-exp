import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { BasicLayout } from '../../layouts/basic'

export const getStaticProps:GetStaticProps<{}> = () => {
    return {
        props: {}
    }
}

const Manifest:React.FC<InferGetStaticPropsType<typeof getStaticProps>> = () => {
    return (
        <BasicLayout color="primary">
            <section className="bg-secondary flex flex-col align-center justify-start manifest">
                <h2 className="color-primary">Manifest</h2>
                <article className="manifest-content">
                    <p className="font-serif color-primary">
                    Curiosity, dreams and knowledge are the main source of forces that guides and inspires Humankind to make actions in this world.
                    <br/>
                    <br/>
                    Everybody should be in the freedom to have their own dreams and ideas and take their own actions.
                    <br/>
                    <br/>
                    I want to make this world a reality, a world where everybody can live and create their dreams. One of my main dreams is to help people dream and make these dreams come true.
                    And to make these dreams reality I will give all my energy to this purpose, working and creating projects that are related to keep moving forward the humankind. 
                    <br/>
                    <br/>
                    I want my ideas to inspire people to create a new way of seeing our world and life to change it and make dreams reality. I believe that we don’t have to be the “chosen ones” to make a big change in our world and we don’t have to make a big change to change our world or to be special, changing the life of one person is the more beautiful thing that we can do and we are already changing his world and that is enough. Here it doesn’t matter where we are from, how much money we have, what we do, our past history or how many people are affected by our ideas. The only thing that matters is that we can have dreams, dreams created by our own will and once we have our own dreams we just become a person capable of doing anything.
                    </p>
                </article>
            </section>
        </BasicLayout>
    )
}

export default Manifest