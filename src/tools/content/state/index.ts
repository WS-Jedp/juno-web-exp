import { IdeaCategoryCardProps } from '../../../components/ideas/categoryCard'

type IdeaCategories = {
    [key:string]: IdeaCategoryCardProps
} 

export const ideaCategories:IdeaCategories = {
    'articles': {
        title: 'Articles',
        abstract: 'Learn something new',
        link: '/ideas/articles',
        color: 'purple'
    },
    'essays': {
        title: 'Essays',
        abstract: 'Find out the ideas of Juno',
        link: '/ideas/essays',
        color: 'light-blue'
    },
    'state': {
        title: 'State',
        abstract: 'Find out the state of juno',
        link: '/ideas/blog',
        color: 'main'
    }
}