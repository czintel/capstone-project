import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'
import emotions from './Data.json'
import LearningCardPage from './pages/LearningCardPage'

function App() {
  return (
    <AppWrapper emotions={emotions}>
      <GlobalStyle />
      <LearningCardPage />
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.section`
  margin: 0;
`
