import styled from 'styled-components/macro'
import QuizCard from './components/quizCard'
import data from './data.json'
import LearningCardPage from './pages/LearningCardPage'

function App() {
  return (
    <>
      <AppWrapper>
        <LearningCardPage data={data} />
        <QuizCard />
      </AppWrapper>
    </>
  )
}

export default App

const AppWrapper = styled.section`
  justify-content: center;
`
