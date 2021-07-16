import { AvailableStoryTypes } from '../../types/stories'

type StoryTypeTitles = {
    [key:string]: string
}
const STORY_TYPE_TITLES:StoryTypeTitles = {
    'ARTICLE': 'Articles',
    'ESSAY': 'Essays',
    'STATE': 'States',
    'STORY': 'Stories',
    'PROJECT': 'Projects'
}
const DEFAULT_TYPE_TITLE = 'Projects'

export const defineStoryTypeTitle = (type:AvailableStoryTypes) => STORY_TYPE_TITLES[type] || DEFAULT_TYPE_TITLE