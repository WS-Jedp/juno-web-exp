import React from 'react'
import { LocationCard } from './index'
import { render, screen } from '@testing-library/react'

describe("Tests for the component <LocationCard />", () => {
    const title = "test title"
    const abstract = "Test Abstract"
    const link = "/home"
    
    beforeEach(() => {
        render(
            <LocationCard 
                title={title}
                abstract={abstract}
                link={link}
            />
        )
    })

    test("The component renders correclty", () => {
        expect(screen.getByText(title).parentElement?.tagName.toLowerCase()).toBe('a')
        expect(screen.getByText(title).tagName.toLowerCase()).toBe('h2')
        expect(screen.getByText(abstract).tagName.toLowerCase()).toBe('p')
    })

    test("The component renders the data correclty", () => {
        expect(screen.getByText(title).parentElement?.getAttribute('href')).toBe(link)
        expect(screen.getByText(title).textContent).toBe(title)
        expect(screen.getByText(abstract).textContent).toBe(abstract)
    })
})
