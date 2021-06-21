import styled from 'styled-components/macro'
import data from './data.json'
import QuizPage from './pages/QuizPage'
import LearningPage from './pages/LearningPage'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import StartPage from './pages/StartPage'
import Logo from './assets/Logo.svg'

function App() {
  return (
    <>
      <Router>
        <Wrapper data={data}>
          <Header>{Logo}</Header>
          <Body>
            <Switch>
              <Route path="/start" component={StartPage} />
              <Route path="/lernen" component={LearningPage} />
              <Route path="/quiz" component={QuizPage} />
            </Switch>
          </Body>
          <Footer>
            <NavBar />
          </Footer>
        </Wrapper>
      </Router>
    </>
  )
}

export default App

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10vh 80vh 10vh;
  grid-template-areas:
    'header'
    'main'
    'footer';
  justify-content: center;
  overflow: visible;
`

const Header = styled.header`
  grid-area: header;
  justify-content: center;
`

const Body = styled.main`
  grid-area: main;
  overflow: auto;
`

const Footer = styled.footer`
  grid-area: footer;
  justify-self: center;
  align-self: center;
  margin: 0 auto;
`
