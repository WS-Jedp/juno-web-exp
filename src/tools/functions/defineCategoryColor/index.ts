type CategoryColors = {
    [key:string]: string
}

const CATEGORY_COLORS:CategoryColors = {
    'social': 'color-light-blue',
    'agency': 'color-main',
    'research': 'color-purple'
}

const DEFAULT_CATEGORY_COLOR = 'color-secondary'

export const defineCategoryColor = ({category}:{category:string}):string => CATEGORY_COLORS[category.toLowerCase()] || DEFAULT_CATEGORY_COLOR
