import styled from 'styled-components/macro'
import data from './data.json'
import QuizPage from './pages/QuizPage'
import LearningPage from './pages/LearningPage'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <AppWrapper data={data}>
          <NavBar />
          <Route path="/lernen" component={LearningPage} />
          <Route path="/quiz" component={QuizPage} />
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
{currentPage === 'LearningPage' && (
  <LearningPage
    onNavigate={() => setCurrentPage('QuizPage')}
    data={data}
  />
)}
{currentPage === 'QuizPage' && (
  <QuizPage
    onNavigate={() => setCurrentPage('LearningPage')}
    data={data}
  />
)}
</AppWrapper> */
}
