import React from 'react'
import { StudyProgress } from './index'
import { render, screen } from '@testing-library/react'

describe("Tests for the component <StudyProgress />", () => {
    const study = "Test Study"
    const junoPosition = 9

    beforeEach(() => {
        render(<StudyProgress celestialBodyName={study} junoPosition={junoPosition} />)
    })

    test("The component renders correctly", () => {
        const container = screen.getByTestId("study-progress-container")
        expect(container.childElementCount).toBe(2)
        expect(container.children[0].tagName.toLowerCase()).toBe('div')
        expect(container.children[0].classList.contains('study-progress__orbit')).toBeTruthy()
        expect(container.children[1].classList.contains('study-progress__space')).toBeTruthy()
        expect(container.children[1].childElementCount).toBe(2)
    })

    test("The data passed is being render correctly", () => {
        const space = screen.getByTestId("study-progress-container").children[1]

        expect(space.children[0]).toHaveStyle(`left: ${junoPosition}%`)
        expect(space.children[0].children[0].textContent).toBe('Juno')
        expect(space.children[1].children[0].textContent).toBe(study)
        
    })
})