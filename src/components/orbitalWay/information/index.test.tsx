import React from 'react'
import { OrbitalWayInformation } from './index'
import { render, screen } from '@testing-library/react'

describe("Tests for the component <OrbitalWayInformation />", () => {
    const title = 'Test'
    const abstract = 'Abstract for the test'
    const link = '/example/routes'
    beforeEach(() => {
        render(<OrbitalWayInformation title={title} abstract={abstract} link={link} />)
    })

    test("The component render correctly", () => {
        expect(screen.getByText(title)).toBeVisible()
        expect(screen.getByText(abstract)).toBeVisible()
        expect(screen.getByText('See More')).toBeVisible()
    })

    test("The tags are working", () => {
        expect(screen.getByText(title).tagName.toLowerCase()).toBe('h3')
        expect(screen.getByText(abstract).tagName.toLowerCase()).toBe('p')
        expect(screen.getByText('See More').tagName.toLowerCase()).toBe('a')
    })

    test("The component shows correctly the passed data", () => {
        expect(screen.getByText(title).textContent).toBe(title)
        expect(screen.getByText(abstract).textContent).toBe(abstract)
        expect(screen.getByText('See More').textContent).toBe('See More')
    })

    test("The component redirect to the correct URL specified", () => {
        expect(screen.getByText('See More').getAttribute('href')).toBe(link)
    })
})