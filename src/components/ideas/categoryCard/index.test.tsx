import React from 'react'
import { IdeaCategoryCard } from './index'
import { render, screen } from '@testing-library/react'

describe("Tests for the <IdeaCategoryCard />", () => {
    const title = "Test"
    const abstract = "Test abstract"
    const link = "/articles"
    const color = "main"
    beforeEach(() => {
        render(<IdeaCategoryCard title={title} abstract={abstract} color={color} link={link} />)
    })

    test("The component renders correctly the data", () => {
        expect(screen.getByText(title).parentElement?.tagName.toLowerCase()).toBe('a')
        expect(screen.getByText(title).parentElement?.getAttribute('href')).toBe(link)
        expect(screen.getByText(title).tagName.toLowerCase()).toBe('h2')
        expect(screen.getByText(title).textContent).toBe(title)
        expect(screen.getByText(abstract).tagName.toLowerCase()).toBe('p')
        expect(screen.getByText(abstract).textContent).toBe(abstract)
    })

    test("The component visually renders correctly", () => {
        const container = screen.getByText(title).parentElement
        expect(container?.classList.contains(`idea-category-card--color-${color}`)).toBeTruthy()
    })
})