import React from 'react'
import { OrbitalWay } from './index'
import { CelestialBodyProps } from './celestialBody'
import { render, screen } from '@testing-library/react'

describe("Tests for the component <OrbitalWay />", () => {

    const celestialBodies:CelestialBodyProps[] = [{ title: 'test', abstract: 'text test', link: 'testLink' }, { title: 'test2', abstract: 'text test2', link: 'testLink2' }]

    beforeEach(() => {
        render(<OrbitalWay celestialBodies={celestialBodies} />)
    })

    test("The component render himself correctly", () => {
        const container = screen.getByTestId('orbital-way-container') 
        const child = container.children[0]
        expect(container.tagName.toLowerCase()).toBe('div')
        expect(child?.nodeName.toLowerCase()).toBe('ul')
        expect(child.firstChild?.nodeName.toLowerCase()).toBe('li')
        expect(child.childElementCount).toBe(celestialBodies.length)
    })

    test("The component render the class names correctly", () => {
        const child = screen.getByTestId('orbital-way-container').children[0]
        expect(child.classList.contains('bg-secondary')).toBeTruthy()
    })

})