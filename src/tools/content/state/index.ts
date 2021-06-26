import { IdeaCategoryCardProps } from '../../../components/ideas/categoryCard'

type IdeaCategories = {
    [key:string]: IdeaCategoryCardProps
} 

export const ideaCategories:IdeaCategories = {
    'articles': {
        title: 'Articles',
        abstract: 'Learn something new',
        link: '/state/articles',
        color: 'purple'
    },
    'essays': {
        title: 'Essays',
        abstract: 'Find out the ideas of Juno',
        link: '/state/essays',
        color: 'light-blue'
    },
    'state': {
        title: 'State',
        abstract: 'Find out the state of juno',
        link: '/state/blog',
        color: 'main'
    }
}