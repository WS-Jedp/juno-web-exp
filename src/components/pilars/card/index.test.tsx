import React from 'react'
import { PilarCard } from './index'
import { render, screen } from '@testing-library/react'

describe("Tests for the component <PilarCard />", () => {
    const title = "Test"
    const index = 1
    const description = "Test description"
    const link = "/Science"
    const color = "purple"
    beforeEach(() => {
        render(<PilarCard  title={title} index={index} link={link} color={color} />)
    })

    test("The components render correctly" , () => {
        expect(screen.getByText(title).tagName.toLowerCase()).toBe('h2')
        expect(screen.getByText(title).textContent).toBe(title)
        expect(screen.getByText(`0${index}`).tagName.toLowerCase()).toBe('span')
        expect(screen.getByText(`0${index}`).textContent).toBe(`0${index}`)
        expect(screen.getByText('See More').getAttribute('href')).toBe(link)
        expect(screen.getByText('See More').textContent).toBe('See More')
    })

    test("The class names of the component work correctly", () => {
        const container = screen.getByTestId('pilar-card__container')
        expect(container.classList.contains(`pilar-card--color-${color}`)).toBeTruthy()
        expect(container.classList.contains(`pilar-card--description`)).not.toBeTruthy()
    })

    test("The component behaviour works correctly", () => {
        render(<PilarCard  title={title} index={index} link={link} color={color} description={description} />)
        expect(screen.getByText(description)).toBeVisible()
        expect(screen.getByText(description).tagName.toLowerCase()).toBe('p')
        expect(screen.getByText(description).textContent).toBe(description)
    })
})