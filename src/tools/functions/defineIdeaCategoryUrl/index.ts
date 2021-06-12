type IdeaCategoriesUrl = {
    [key:string]: string
}

type DefineIdeaCategoryUrl = {
    category: string
}

const IDEA_CATEGORIES_URL:IdeaCategoriesUrl = {
    'article': '/state/articles',
    'essays': '/state/essays',
    'state': '/state/states'
}

const DEFAULT_CATEGORY_URL = '/state'

export const defineIdeaCategoryUrl = ({ category }:DefineIdeaCategoryUrl):string => IDEA_CATEGORIES_URL[category.toLowerCase()] || DEFAULT_CATEGORY_URL