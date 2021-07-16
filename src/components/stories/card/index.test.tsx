import React from 'react'
import { StoryCard } from './index'
import { render, screen } from '@testing-library/react'

describe("Tests for the component <StoryCard />", () => {
    const title = "Test title"
    const category = "Category Test"
    const imageUrl = "/url/image"
    const link = "/story"

    beforeEach(() => {
        render(<StoryCard title={title} category={category} imageUrl={imageUrl} link={link} />)
    })

    test("The component renders correctly the data passed", () => {
        expect(screen.getByText(title).tagName.toLowerCase()).toBe('h2')
        expect(screen.getByText(title).textContent).toBe(title)

        expect(screen.getByText(category).tagName.toLowerCase()).toBe('b')
        expect(screen.getByText(category).textContent).toBe(category)

        expect(screen.getByTestId('story-card__figure').children[0].children[0].getAttribute('src')).toBe(imageUrl)
    })

    test("The component redirectes correctly", () => {
        expect(screen.getByTestId('story-card__figure').getAttribute('href')).toBe(link)
        expect(screen.getByText(category).parentElement?.getAttribute('href')).toBe(link)
    })
})