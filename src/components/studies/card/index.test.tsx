import React from 'react'
import { StudyCard } from './index'
import { render, screen } from '@testing-library/react'

describe("Tests for the component <StoryCard />", () => {
    const title = "Test title"
    const description = "Test description"
    const pilar = "art"
    const purposes = ['branding', 'url']

    beforeEach(() => {
        render(<StudyCard title={title} pilar={pilar} purposes={purposes} description={description} />)
    })

    test("The component renders correctly the data passed", () => {
        expect(screen.getByText(pilar).tagName.toLowerCase()).toBe('h1')
        expect(screen.getByText(pilar).textContent).toBe(pilar)

        expect(screen.getByText(title).tagName.toLowerCase()).toBe('h2')
        expect(screen.getByText(title).textContent).toBe(title)

        expect(screen.getByText(description).tagName.toLowerCase()).toBe('p')
        expect(screen.getByText(description).textContent).toBe(description)

        expect(screen.getByText("Related Services").tagName.toLowerCase()).toBe('h3')
        expect(screen.getByText("Related Services").textContent).toBe("Related Services")

        expect(screen.getByText("Related Services").parentElement?.children[1].tagName.toLowerCase()).toBe('ul')
        expect(screen.getByText("Related Services").parentElement?.children[1].childElementCount).toBe(purposes.length)
    })
})