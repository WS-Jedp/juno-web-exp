export interface Skill {
    id: number,
    image: string,
    skill: string,
    time: string
}

export interface Education {
    id: number,
    study: string,
    link: string,
    icon: string,
    school: string,
    time: string,
    description: string
}

export interface Project {
    id: number,
    title: string,
    description: string
    time: string,
    role: string,
    link: string,
}

export interface Experience {
    id: number,
    icon: string,
    title: string,
    description: string
    time: string,
    role: string,
}

export const LANGUAGES:Skill[] = [
    {
        id: 1,
        image: "images/icons/typescript.svg",
        skill: "TypeScript",
        time: "2 years"
    },
    {
        id: 2,
        image: "images/icons/logo-javascript.svg",
        skill: "JavaScript",
        time: "3 years"
    },
    {
        id: 3,
        image: "images/icons/nodejs.svg",
        skill: "Node",
        time: "2 years"
    },
    {
        id: 4,
        image: "images/icons/php.svg",
        skill: "PHP",
        time: "3 years"
    }
]

export const FRONTEND_TECHNOLOGIES:Skill[] = [
    {
        id: 1,
        image: "images/icons/react.svg",
        skill: "React",
        time: "3 years"
    },
    {
        id: 2,
        image: "images/icons/redux.svg",
        skill: "Redux",
        time: "2 years"
    },
    {
        id: 3,
        image: "images/icons/sass.svg",
        skill: "Sass",
        time: "2 years"
    }
]

export const BACKEND_TECHNOLOGIES:Skill[] = [
    {
        id: 1,
        image: "images/icons/express.svg",
        skill: "Express",
        time: "2 years"
    },
    {
        id: 2,
        image: "images/icons/laravel.svg",
        skill: "Laravel",
        time: "2 years"
    },
    {
        id: 3,
        image: "images/icons/graphql.svg",
        skill: "GraphQL",
        time: "1 year"
    }
]

export const DATABASES:Skill[] = [
    {
        id: 1,
        image: "images/icons/mysql.svg",
        skill: "MySQL",
        time: "2 years"
    },
    {
        id: 2,
        image: "images/icons/postgresql.svg",
        skill: "PostgreSQL",
        time: "2 years"
    },
]

export const EDUCATION:Education[] = [
    {
        id: 1,
        school: "Platzi Master", 
        study: "Software Engineer",
        icon: "images/icons/platzi.svg",
        description: "Personalized and intensive online education program to improve as a professional in web development.",
        link: "https://platzi.com/master/",
        time: "2020 - 2024"
    },
    {
        id: 2,
        school: "WorldSkills", 
        study: "Web Technologies",
        icon: "images/icons/ws-favicon.svg",
        description: "Personalized and intensive training by experts of WorldSkills and SENA on web development technologies.",
        link: "https://worldskills.org/",
        time: "2019 - 2022"
    },
    {
        id: 3,
        school: "SENA", 
        study: "Multimedia Production",
        icon: "images/icons/sena.svg",
        description: "Technological study based on the design and communication of ideas in the digital world, main focused on User Experience and Branding.",
        link: "/vitae",
        time: "2018 - 2020"
    },
]

export const PROJECTS:Project[] = [
    {
        id: 1,
        title: "Sport Team",
        description: "Web Application that helps a basketball team from Pure Vibes Foundation to have a better management of their trainings and results easier.",
        role: "Team's Lead, UX/UI Designer, Fullstack Developer",
        time: "june 2021",
        link: "https://github.com/WS-Jedp/sport-teams-frontend"
    },
    {
        id: 2,
        title: "Web Survey",
        description: "Small and Interactive survey made for Pure Vibes Organization to help them to create a better experience at the moment of interview some of they best prospects.",
        role: "UX/UI Designer, Fullstack Developer",
        time: "may 2021",
        link: "https://github.com/WS-Jedp/survey-pure-vibes"
    },
    {
        id: 3,
        title: "Juno's Website",
        description: "Personal Website build with TypeScript, React, Next for frontend and Node, Express, Prisma and MySQL for backend services.",
        role: "UX/UI Designer, Fullstack Developer",
        time: "july 2021",
        link: "https://github.com/WS-Jedp/juno-web-exp"
    }   
]

export const EXPERIENCES:Experience[] = [
    {
        id: 1,
        title: "SENA's Software Factory",
        description: "I was one of the members of the SENA's Software Factory where his main purpose was analyze , identify and create according web solutions to our clients problems, including the SENA itself as a main client.",
        role: "Team's Lead, UX/UI Designer, Fullstack Developer",
        time: "2019 - 2020",
        icon: "images/icons/sena.svg"
    },
    {
        id: 2,
        title: "Aestudiar",
        description: "The main purpose of Aestudiar is offer new and easier opportunities to the people in Colombia to find educative process that helps them grow up as professionals. I was one the technological leaders but with main focus on the Frontend part and UX/UI process.",
        role: "Team's Lead, UX/UI Designer, Fullstack Developer",
        time: "2020 - 2020",
        icon: "images/icons/aestudiarlogo.svg"
    }
]