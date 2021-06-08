import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'
import emotions from './Data.json'
import LearningCardPage from './pages/LearningCardPage'

function App() {
  return (
    <AppWrapper emotions={emotions}>
      <GlobalStyle />
      <LearningCardPage emotions={emotions} />
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.section`
  display: block;
  margin: 0;
`
