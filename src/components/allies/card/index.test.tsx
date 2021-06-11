import React from 'react'
import { AllyCard } from './index'
import { render, screen } from '@testing-library/react'

describe("Tests for the component <AllyCard />", () => {
    const ally = "Damas Del Albeldrio"
    const category = "Social"
    const abstract = "Art trough pictures"

    beforeEach(() => {
        render(<AllyCard ally={ally} abstract={abstract} category={category} />)
    })

    test("The component renders correctly", () => {
        expect(screen.getByText(category).tagName.toLowerCase()).toBe('small')
        expect(screen.getByText(category).textContent).toBe(category)
        expect(screen.getByText(category).classList.contains('color-light-blue')).toBeTruthy()

        expect(screen.getByText(ally).tagName.toLowerCase()).toBe('h3')
        expect(screen.getByText(ally).textContent).toBe(ally)

        expect(screen.getByText(abstract).tagName.toLowerCase()).toBe('p')
        expect(screen.getByText(abstract).textContent).toBe(abstract)
    })
})