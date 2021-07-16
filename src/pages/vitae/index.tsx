import React from 'react'
import Link from 'next/link'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { BACKEND_TECHNOLOGIES, DATABASES, FRONTEND_TECHNOLOGIES, LANGUAGES, EDUCATION, PROJECTS, EXPERIENCES } from '../../tools/content/vitae'

import { ListKnowledgesContainer } from '../../containers/knowledges/renderListKnowledges'
import { StudiesMediumCardList } from '../../containers/studies/mediumCardList'
import { ProjectsList } from '../../containers/projects/vitaeProjects'
import { ExperiencesList } from '../../containers/experiences/list'

type VitaeProps = {
    
}

export const getStaticProps:GetStaticProps<VitaeProps> = async (context) => {

    return {
        props: {}
    }
}

const Vitae:React.FC<InferGetStaticPropsType<typeof getStaticProps>> = () => {

    return (
        <section className="bg-primary relative flex flex-col align-center vitae">
            <header className="flex flex-row align-center justify-between vitae__header">
                <p className="font-serif color-secondary">Willing to dream</p>
                <p className="font-serif color-secondary">Let's create a new world</p>
            </header>
            <div className="relative flex flex-col vitae__container">
                <Link href="/">
                    <div className="flex flex-col w-100 align-center justify-center vitae__juno">
                        <h1 className="font-serif color-secondary">juno</h1>
                        <small className="font-serif color-secondary">A son of the humankind</small>
                        <img src="images/logos/JunoLogoWaves-White.svg" width="150" height="150" />
                    </div>
                </Link>

                <p className="font-serif color-secondary vitae__container-resume">
                    Welcome, <br/><br/>

                    I'm Juan Esteban Deossa Pertuz a Sotfware Engineer, focused on web development, based on Medellin, Colombia.<br/><br/>

                    I have been related to the world of software for more than 3 years thanks to WorldSkills and Platzi Master that guide me to become a better professional, day by day.<br/>
                    Currently I'm the representative of my State, Antioquia, in the WorldSkills representing the Web Technologies skill. I'm receiving special training by them to become the national representative and compete in WorldSkills Shanghái 2022.<br/><br/>

                    I really like to describe myself  as Not Only A Software Engineer, I'm always looking for new knowledge or experiences that helps me grow up as a person and a professional. This is why I have some studies such as Multimedia Production as well and a near future I hope start a career in a Physics or Astronomy.<br/>
                </p>

                <article className="font-serif color-secondary vitae__container-skills">
                    <h1 className="vitae__container-skills-title">Main Skills</h1>
                    <p className="font-serif">I'm focused in Web Development, that is why my main stack of technologies are:</p>

                    <ListKnowledgesContainer 
                        title="Languages"
                        knowledges={LANGUAGES}
                    />
                    <ListKnowledgesContainer 
                        title="Frontend Technologies"
                        knowledges={FRONTEND_TECHNOLOGIES}
                    />
                    <ListKnowledgesContainer 
                        title="Backend Technologies"
                        knowledges={BACKEND_TECHNOLOGIES}
                    />
                    <ListKnowledgesContainer 
                        title="Databases"
                        knowledges={DATABASES}
                    />
                </article>

                <article className="font-serif color-secondary vitae__container-skills">
                    <h1 className="vitae__container-skills-title">Studies</h1>
                    <p className="font-serif">
                        I'm a curious mind, I don't like to stay in just one place, for that I'm always learning something new even if is not related with other knowledges:
                    </p>
                    <StudiesMediumCardList
                        education={EDUCATION}
                    />
                </article>
                <article className="font-serif color-secondary vitae__container-skills">
                    <h1 className="vitae__container-skills-title">
                        Projects
                    </h1>
                    <p className="font-serif">
                        I like to work in projects that helps my community, here are some of the most important projects that I've been working on:
                    </p>
                    <ProjectsList
                        projects={PROJECTS} 
                    />
                </article>
                <article className="font-serif color-secondary vitae__container-skills">
                    <h1 className="vitae__container-skills-title">
                        Experiences
                    </h1>
                    <p className="font-serif">
                        I like to work with projects that have a social purpose that helps humankind to keep moving forward, here are some projects where I worked:
                    </p>
                    <ExperiencesList 
                        experiences={EXPERIENCES}
                    />
                </article>
                
            </div>


            <footer className="bg-secondary color-primary relative flex flex-col align-center justify-center vitae__footer">
                <article className="flex flex-col align-center justify-center text-center vitae__footer-text">
                    <h1 className="font-serif">Juan E. Deossa Pertuz</h1>
                    <h2 className="font-serif">Software Engineer</h2>
                    <p className="font-serif">Medellín, Antioquia, Colombia</p>
                </article>
                <article className="flex flex-col align-center justify-center text-center vitae__footer-text">
                    <a target="_blank" className="color-primary font-serif" href="mailto:jedp082@gmail.com">jedp082@gmail.com</a>
                    <a target="_blank" className="color-primary font-serif" href="https://www.linkedin.com/in/juan-esteban-deossa-pertuz-6351261ba/">Linkedin</a>
                    <a target="_blank" className="color-primary font-serif" href="https://github.com/WS-Jedp">Github</a>
                </article>
                <article className="vitae__footer-text">
                    <p className="color-primary font-serif">You can download my CV <a target="_blank" className="color-primary font-serif" href="cv/juno-cv.pdf">Here</a></p>
                </article>
            </footer>
        </section>
    )
}

export default Vitae