import React from 'react'
import { BasicLayout } from '../layouts/basic'

import { HomeCelestialBodies } from '../tools/content/celestialBodies'
import { Processes } from '../tools/content/processes'
import { ideaCategories } from '../tools/content/state'

import { OrbitalWay } from '../components/orbitalWay'
import { Content } from '../components/content'
import { ButtonCircle } from '../components/buttons/circle'
import { PilarCard } from '../components/pilars/card'
import { ProcessCard } from '../components/process/card'
import { IdeaCategoryCard } from '../components/ideas/categoryCard'




const Home:React.FC = () => {

    return (
        <BasicLayout>
            <section className="home home__title">
                <article className="home__title-text">
                    <Content
                        position="start"
                    >
                        <h1 className="color-secondary">One Person Creative Studio</h1>
                        <p className="color-secondary">Let's bring your ideas into reality</p>
                    </Content>
                    <ButtonCircle 
                        title="Explore"
                        action={() => {}}
                        color="primary"
                    />
                </article>

                <article className="home__title-content">
                   <OrbitalWay
                        celestialBodies={HomeCelestialBodies}
                        color="white"
                   /> 
                </article>
            </section>
            <section className="bg-secondary flex flex-col justify-between home home__purposes">
                    <Content
                        position="end"
                        size="mid"
                    >
                        <h2 className="color-primary">Purposes</h2>
                        <p className="color-primary">Let’s create a new world where every person can live their dreams and keep alive the gift of life.</p>
                    </Content>

                    <Content
                        position="start"
                        size="mid"
                    >
                        <p className="color-primary">Let’s create new ideas that help humankind to find reasons to live, to enjoy life and keep moving forward.</p>
                    </Content>
                    
            </section>
            <section className="bg-secondary flex flex-col home home__services">
                    <Content
                        position="start"
                        size="mid"
                    >
                        <h2 className="color-primary">Services</h2>
                        <p className="color-primary">Know how we can bring your idea into reality.</p>
                    </Content>                    

                    <ul className="flex flex-row home__services-list">
                        <PilarCard 
                            index={1}
                            link="/services/science"
                            title="Science"
                            color="purple"
                        />
                        <PilarCard 
                            index={2}
                            link="/services/art"
                            title="Art"
                            color="light-blue"
                        />
                        <PilarCard 
                            index={3}
                            link="/services/technology"
                            title="Technology"
                            color="main"
                        />
                    </ul>
            </section>
            <section className="bg-primary flex flex-col  home home__processes">
                    <Content
                        position="end"
                        size="mid"
                    >
                        <h2 className="color-secondary">Processes</h2>
                        <p className="color-secondary">Stories are the best ways to connect with people. Working with Juno is working through a story creation process, where each project is unique that will tell and express his vision of reality.</p>
                    </Content>

                    <ul className="home__processes-list">
                        <ProcessCard 
                            {...Processes['storytelling']}
                            color="white"
                        />
                    </ul>
            </section>
            <section className="bg-secondary flex flex-col  home home__projects">
                    <Content
                        position="start"
                        size="mid"
                    >
                        <h2 className="color-primary">Special Projects</h2>
                        <p className="color-primary">The best ideas are created when we think about others. Social entrepreneurship is really special in this world and we needed more than ever in times like today. So please, if you can support them we'll be really grateful.</p>
                    </Content>

                    <ul className="home__projects-list">
                        
                    </ul>
            </section>
            <section className="bg-secondary flex flex-col  home home__state">
                    <Content
                        position="start"
                        size="mid"
                    >
                        <h2 className="color-primary">Juno's State</h2>
                        <p className="color-primary">Read about the ideas, vision, news and possible future projects that Juno will  create. Find the latest states and ways of work that Juno has.</p>
                    </Content>

                    <ul className="flex flex-row align-start justify-start home__state-list">
                        <IdeaCategoryCard 
                            {...ideaCategories['articles']}
                        />
                        <IdeaCategoryCard 
                            {...ideaCategories['essays']}
                        />
                        <IdeaCategoryCard 
                            {...ideaCategories['state']}
                        />
                    </ul>
            </section>
        </BasicLayout>
    )
}  

export default Home
