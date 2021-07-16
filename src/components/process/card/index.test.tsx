import React from 'react'
import { ProcessCard } from './index'
import { render, screen, fireEvent } from '@testing-library/react'

describe("Test for the component <ProcessCard />", () => {
    const title = "Test Title"
    const abstract = "Abstract Test"
    const description = "Description test"
    const purposes = ['purpose test', 'purpose test']
    const color = 'white'
    beforeEach(() => {
        render(<ProcessCard title={title} abstract={abstract} description={description} purposes={purposes} color={color} />)
    })

    test("The component renders himself correctly", () => {
        expect(screen.getByText(title)).toBeVisible()
        expect(screen.getByText(abstract)).toBeVisible()
        expect(screen.getByText('See More')).toBeVisible()
    })

    test("The component behaviour is the right one", () => {
        const container = screen.getByTestId('process-card-container')
        fireEvent.click(container) 
        expect(screen.getByText(description).tagName.toLowerCase()).toBe('p')
        expect(screen.getByText(description).textContent?.trim()).toBe(description)
        expect(screen.getByText('Purposes')).toBeVisible()
        expect(screen.getByText('Purposes').tagName.toLowerCase()).toBe('h4')
    })

    test("The component behaviour renders correclty the list", () => {
        const container = screen.getByTestId('process-card-container')
        fireEvent.click(container) 
        const listContainer = screen.getByText('Purposes').parentElement
        const list = listContainer?.children[1]

        expect(list?.tagName.toLowerCase()).toBe('ul')
        expect(list?.childElementCount).toBe(purposes.length)

        for(let i = 0; i < purposes.length; i++) {
            expect(list?.children[i].textContent).toBe(purposes[i])
            expect(list?.children[i].tagName.toLowerCase()).toBe('li')
        }
        
    })
})