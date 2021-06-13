import styled from 'styled-components/macro'
import data from './data.json'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import QuizCardPage from './pages/QuizCardPage'
import LearningCardPage from './pages/LearningCardPage'

function App() {
  return (
    <>
      <Router>
        <AppWrapper>
          <LearningCardPage data={data} />
          <QuizCardPage data={data} />
          <Switch>
            <Route path="/quiz" component={QuizCardPage} />
            <Route path="/learning" component={LearningCardPage} />
          </Switch>
        </AppWrapper>
      </Router>
    </>
  )
}

export default App

const AppWrapper = styled.section`
  justify-content: center;
`
