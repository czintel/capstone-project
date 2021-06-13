import styled from 'styled-components/macro'
import data from './data.json'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import QuizCardPage from './pages/QuizCardPage'
import LearningCardPage from './LearningCardPage'

function App() {
  return (
    <>
      <Router>
        <AppWrapper>
          <QuizCardPage data={data} />
        </AppWrapper>
        <Switch>
          <Route path="/learning" component={QuizCardPage} />
          <Route path="/learning" component={LearningCardPage} />
        </Switch>
      </Router>
    </>
  )
}

export default App

const AppWrapper = styled.section`
  justify-content: center;
`
