import styled from 'styled-components/macro'
import QuizCard from './components/quizCard'
import emotions from './Data.json'
import LearningCardPage from './pages/LearningCardPage'

function App() {
  return (
    <>
      <AppWrapper>
        <LearningCardPage emotions={emotions} />
        <QuizCard />
      </AppWrapper>
    </>
  )
}

export default App

const AppWrapper = styled.section`
  justify-content: center;
`
