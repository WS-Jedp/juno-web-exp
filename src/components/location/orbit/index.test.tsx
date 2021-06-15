import React from 'react'
import { LocationOrbit } from './index'
import { fireEvent, render, screen } from '@testing-library/react'

describe("Tests for the component <LocationOrbit />", () => {
    const mockFn = jest.fn()
    const secondMockFn = jest.fn()

    const locations = [
        {title: "Home", link: "/home", action: (title:string) => mockFn()},
        {title: "About", link: "/about", action: (title:string) => secondMockFn()},
    ]
    const selected = 'home'

    beforeEach(() => {
        render(<LocationOrbit locations={locations} selected={selected} />)
    })

    test("The component renders correclty", () => {
        const container = screen.getByTestId('location-orbit-container')
        expect(container.children[0].tagName.toLowerCase()).toBe('ul')
        expect(container.children[0].childElementCount).toBe(locations.length)
        expect(container.children[0].children[0].tagName.toLowerCase()).toBe('li')
        expect(container.children[0].children[0].children[0].textContent).toBe(locations[0].title)
    })

    test("The component behaviours is working correctly", () => {
        const firstLocation = screen.getByTestId('location-orbit-container').children[0].children[0].children[0]
        const secondLocation = screen.getByTestId('location-orbit-container').children[0].children[1].children[0]

        expect(mockFn).not.toHaveBeenCalled()
        expect(secondMockFn).not.toHaveBeenCalled()

        fireEvent.click(firstLocation)
        expect(mockFn).toHaveBeenCalled()
        expect(firstLocation.parentElement?.classList.contains('location-orbit__location--explore')).toBeTruthy()
        expect(secondLocation.parentElement?.classList.contains('location-orbit__location--explore')).not.toBeTruthy()

        fireEvent.click(secondLocation)
        expect(mockFn).toHaveBeenCalled()
        expect(secondLocation.parentElement?.classList.contains('location-orbit__location--explore')).toBeTruthy()
        expect(firstLocation.parentElement?.classList.contains('location-orbit__location--explore')).not.toBeTruthy()
    })

    test("The data passed renders correctly", () => {
        const locationsNode = screen.getByTestId('location-orbit-container').children[0]

        expect(locationsNode.children[0].classList.contains('location-orbit__location--selected')).toBeTruthy()

        for(let i = 0; i < locations.length; i++) {
            expect(locationsNode.children[i].children[0].textContent).toBe(locations[i].title)
            expect(locationsNode.children[i].children[0].getAttribute('href')).toBe(locations[i].link)
        }

    })
})