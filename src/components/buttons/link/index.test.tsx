import React from 'react'
import { ButtonLink } from './index'
import { render, screen } from '@testing-library/react'

describe("Tests for the component <ButtonCircle />", () => {

    const title = "Title button"
    const link = "/some/link"
    const color = "secondary"

    beforeEach(() => {
        render(<ButtonLink title={title} link={link} color={color} />)
    })

    test("The component renders correctly", () => {
        expect(screen.getByText(title).tagName.toLowerCase()).toBe('a')
        expect(screen.getByText(title).textContent).toBe(title)
        expect(screen.getByText(title).classList.contains(`button-link--color-${color}`)).toBeTruthy()
    })

})