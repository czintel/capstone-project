import {render, screen} from '@testing-library/react'
import NavButton from './NavButton'
  
describe('NavButton', () => {
    it('renders', () => {
        render(<NavButton />)
        expect(screen.getByText('NavButton')).toBeInTheDocument()
    })
})
          