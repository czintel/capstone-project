import styled from 'styled-components/macro'
import data from './data.json'
import QuizCardPage from './pages/QuizCardPage'
import LearningCardPage from './pages/LearningCardPage'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <AppWrapper data={data}>
          <NavBar />
          <Route path="/lernen" component={LearningCardPage} />
          <Route path="/quiz" component={QuizCardPage} />
        </AppWrapper>
      </Router>
    </>
  )
}

export default App

const AppWrapper = styled.section`
  padding: 20px;
  justify-content: center;
`

{
  /* <AppWrapper>
{currentPage === 'learningCardPage' && (
  <LearningCardPage
    onNavigate={() => setCurrentPage('quizCardPage')}
    data={data}
  />
)}
{currentPage === 'quizCardPage' && (
  <QuizCardPage
    onNavigate={() => setCurrentPage('learningCardPage')}
    data={data}
  />
)}
</AppWrapper> */
}
