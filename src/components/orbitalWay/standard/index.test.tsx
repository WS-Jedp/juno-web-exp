import React, { Children } from 'react'
import { OrbitalWayStandard } from './index'
import { render, screen } from '@testing-library/react'

describe("Tests for the component <OrbitalWayStandard />", () => {

    const contents = [
        {title: 'test title 1', id: '#id1'},
        {title: 'test title 2', id: '#id2'},
        {title: 'test title 3', id: '#id3'},
    ]

    beforeEach(() => [
        render(<OrbitalWayStandard contents={contents} />)
    ])

    test("The component renders correctly", () => {
        const container = screen.getByText(contents[0].title).parentElement?.parentElement
        expect(container?.tagName.toLowerCase()).toBe('ul')
        expect(container?.hasChildNodes).toBeTruthy()
    })

    test("The data passed works correctly", () => {
        const container = screen.getByText(contents[0].title).parentElement?.parentElement
        expect(container?.childElementCount).toBe(contents.length)
        for(let i = 0; i < contents.length; i++) {
            expect(container?.children[i].getAttribute('href')).toBe(contents[i].id)
            expect(container?.children[i].lastChild?.textContent).toBe(contents[i].title)
        }
    })

})