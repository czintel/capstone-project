import { render, screen } from '@testing-library/react'
import ButtonExpansion from './ButtonExpansion'

describe('Button', () => {
  it('contains a text', () => {
    render(<ButtonExpansion onClick={() => {}}>Click me</ButtonExpansion>)

    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
  })
})
