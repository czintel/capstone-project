import styled from 'styled-components/macro'
import data from './data.json'
import QuizPage from './pages/QuizPage'
import LearningPage from './pages/LearningPage'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import StartPage from './pages/StartPage'

function App() {
  return (
    <>
      <Router>
        <AppWrapper data={data}>
          <Switch>
            <Route path="/start" component={StartPage} />
            <Route path="/lernen" component={LearningPage} />
            <Route path="/quiz" component={QuizPage} />
          </Switch>
          <NavBar />
        </AppWrapper>
      </Router>
    </>
  )
}

export default App

const AppWrapper = styled.section`
  display: grid;
  gap: 20px;
  padding: 20px;
  justify-content: center;
`
