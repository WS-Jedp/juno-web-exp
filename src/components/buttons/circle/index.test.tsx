import React, {MouseEventHandler} from 'react'
import { ButtonCircle } from './index'
import { render, screen, fireEvent } from '@testing-library/react'

describe("Tests for the component <ButtonCircle />", () => {

    const title = "Title button"
    const action:MouseEventHandler = jest.fn<MouseEventHandler, []>()

    beforeEach(() => {
        render(<ButtonCircle title={title} action={action} />)
    })

    test("The component renders correctly", () => {
        expect(screen.getByText(title).tagName.toLowerCase()).toBe('button')
        expect(screen.getByText(title).textContent).toBe(title)
        expect(screen.getByText(title).classList.contains('bg-secondary')).toBeTruthy()
    })

    test("The component behavious works correctly", () => {
        fireEvent.click(screen.getByText(title))
        expect(action).toHaveBeenCalled()
        fireEvent.click(screen.getByText(title))
        fireEvent.click(screen.getByText(title))
        expect(action).toHaveBeenCalledTimes(3)
    })

})