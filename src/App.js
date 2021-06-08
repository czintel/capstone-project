import styled from 'styled-components'
import emotions from './Data.json'
import LearningCardPage from './pages/LearningCardPage'

function App() {
  return (
    <AppWrapper emotions={emotions}>
      <LearningCardPage emotions={emotions} />
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.section`
  display: block;
  margin: 0;
  background-color: #f6f6eb;
  height: 100vh;
  width: 100vw;
`
