import React from "react";
import { render, screen } from '@testing-library/react'
import Header from './Header';

describe('Header Component', () => {
    test('renders the logo', () => {
        render(<Header />)
        const logoElement = screen.getByRole('img', { name: /logo/i })
        expect(logoElement).toBeInTheDocument()
    })

})