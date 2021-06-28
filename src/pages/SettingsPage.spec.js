import {render, screen} from '@testing-library/react'
import SettingsPage from './SettingsPage'
  
describe('SettingsPage', () => {
    it('renders', () => {
        render(<SettingsPage />)
        expect(screen.getByText('SettingsPage')).toBeInTheDocument()
    })
})
          