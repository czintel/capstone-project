import styled from 'styled-components/macro'
import emotions from './Data.json'
import LearningCardPage from './pages/LearningCardPage'

function App() {
  return (
    <AppWrapper>
      <LearningCardPage emotions={emotions} />
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.section`
  justify-content: center;
`
