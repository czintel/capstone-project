import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'
import emotions from './Data.json'
import LearningCardPage from './pages/LearningCardPage'
import Button from './components/Button'

function App() {
  return (
    <AppWrapper emotions={emotions}>
      <GlobalStyle />
      <Button>Quiz</Button>
      <LearningCardPage />
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.section`
  display: block;
  margin: 0;
`
