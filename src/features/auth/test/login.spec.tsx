import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import LoginPage from '../pages/LoginPage'

describe('Login Feature', () => {
    it('login page render', () => {
        render(<LoginPage />)
        expect(screen.getAllByText('Login')).toBeTruthy()
    })
})
