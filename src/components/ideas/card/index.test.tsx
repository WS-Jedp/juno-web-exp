import React from 'react'
import { IdeaCard } from './index'
import { render, screen } from '@testing-library/react'
import { defineIdeaCategoryUrl } from '../../../tools/functions/defineIdeaCategoryUrl'

describe("Tests for the component <IdeaCard />", () => {
    const title = "Test Title"
    const abstract = "Test Abstract"
    const category = "Article"
    const link = "/science"
    const size = "lg"
    const imageUrl = '/url/image'
    
    beforeEach(() => {
        render(<IdeaCard title={title} abstract={abstract} category={category} imageUrl={imageUrl} link={link} size={size} />)
    })

    test("The component renders the data correctly", () => {
        expect(screen.getByText(title).tagName.toLowerCase()).toBe('h1')
        expect(screen.getByText(title).textContent).toBe(title)

        expect(screen.getByText(abstract).tagName.toLowerCase()).toBe('p')
        expect(screen.getByText(abstract).textContent).toBe(abstract)

        expect(screen.getByText(category).tagName.toLowerCase()).toBe('a')
        expect(screen.getByText(category).textContent).toBe(category)

        expect(screen.getByTestId('idea-card__figure').children[1].tagName.toLowerCase()).toBe('img')
        expect(screen.getByTestId('idea-card__figure').children[1].getAttribute('src')).toBe(imageUrl)
    })

    test("The component redirects correctly", () => {
        expect(screen.getByText(category).getAttribute('href')).toBe(defineIdeaCategoryUrl({category}))
        
        expect(screen.getByText(title).parentElement?.getAttribute('href')).toBe(link)

        expect(screen.getByText('Read').parentElement?.getAttribute('href')).toBe(link)
    })

    test("The component behaviours is correctly", () => {
        expect(screen.getByText(category).parentElement?.classList.contains('idea-card--size-lg')).toBeTruthy()
    })
})