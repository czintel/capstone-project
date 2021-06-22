import {render, screen} from '@testing-library/react'
import NavBar from './NavBar'
  
describe('NavBar', () => {
    it('renders', () => {
        render(<NavBar />)
        expect(screen.getByText('NavBar')).toBeInTheDocument()
    })
})
          