import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('ButtonExpanded', () => {
  it('contains a text', () => {
    render(<Button onClick={() => {}}>Klick mich</Button>)

    const button = screen.getByRole('button', { name: 'Klick mich' })
    expect(button).toBeInTheDocument()
  })

  it('calls onClick', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Klick mich</Button>)

    const button = screen.getByRole('button', { name: 'Klick mich' })
    userEvent.click(button)

    expect(handleClick).toHaveBeenCalled()
  })

  it('changes with the prop isExpanded', () => {
    const { rerender } = render(<Button onClick={jest.fn()}>Klick mich</Button>)

    const button = screen.getByRole('button')

    const defaultStyle = getComputedStyle(button)

    rerender(
      <Button isExpanded onClick={jest.fn()}>
        Klick mich
      </Button>
    )
    const expandedStyle = getComputedStyle(button)
    expect(expandedStyle).not.toBe(defaultStyle)
  })
})
