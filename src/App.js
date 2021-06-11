import styled from 'styled-components/macro'
import QuizCardPage from './pages/quizCardPage'
import data from './data.json'

function App() {
  return (
    <>
      <AppWrapper>
        <QuizCardPage data={data} />
      </AppWrapper>
    </>
  )
}

export default App

const AppWrapper = styled.section`
  justify-content: center;
`
