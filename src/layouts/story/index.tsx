import React from 'react'

import { AvailableStoryTypes } from '../../tools/types/stories'
import { defineStoryTypeTitle } from '../../tools/functions/defineStoryTypeTitle'

import { Header } from '../../containers/header'
import { Footer } from '../../components/commons/footer'

interface LayoutStory {
    color?: 'primary' | 'secondary',
    storyType?: AvailableStoryTypes,
}

export const LayoutStory:React.FC<LayoutStory> = ({ children, color = 'primary', storyType = 'STORY' }) => {

    return (
        <section className="bg-secondary story-layout">
            <Header color={color} />
            <section className="bg-secondary story-layout__content">
                {
                    children
                }
            </section>
            <Footer color={color} />
        </section>
    )
} 