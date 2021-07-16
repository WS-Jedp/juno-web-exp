import { PilarCardProps } from '../../../components/pilars/card'

type KnowledgesContent = {
    'science': PilarCardProps,
    'art': PilarCardProps,
    'technology': PilarCardProps,
}
export const KnowledgesContent:KnowledgesContent = {
    science: {
        index: 1,
        link: '/studies/science',
        title: 'Science',
        description: 'Science helps us to understand nature, with Science knowledge we will able to analyze the data that give us our reality that can become meaningful information to create ideas and make actions in our world.',
        color: 'purple'
    },
    art: {
        index: 2,
        link: '/studies/art',
        title: 'Art',
        description: "Art helps us to transmit and create realities to others, once we can understand our world, it isn't only about having and creating ideas in our mind, it is about creating ideas that work on everybody minds. Art will help us to transmit these ideas in the correct way",
        color: 'light-blue'
    },
    technology: {
        index: 3,
        link: '/studies/technology',
        title: 'Technology',
        description: "Technology is essential to make our ideas come true to alter our world, once we have our ideas and transmit them in the right way to others, it is time to apply them to reality, the best way to do it is with technology.",
        color: 'main'
    }
} 