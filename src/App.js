import styled from 'styled-components/macro'
import data from './data.json'
import QuizPage from './pages/QuizPage'
import LearningPage from './pages/LearningPage'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import StartPage from './pages/StartPage'
import AppLogo from './assets/Logo.svg'

function App() {
  return (
    <>
      <Router>
        <Wrapper data={data}>
          <Header>
            <Logo src={AppLogo} alt="App Logo" />
          </Header>
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
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
  justify-content: center;
  justify-items: center;
  overflow: visible;
`

const Header = styled.header`
  position: sticky;
  margin-top: 20px;
  grid-area: header;
  justify-content: center;
`

const Body = styled.main`
  grid-area: main;
  height: 80vh;
  align-content: center;
  overflow: auto;
`

const Footer = styled.footer`
  grid-area: footer;
  margin-bottom: 20px;
  position: fixed;
  bottom: 0;
`
const Logo = styled.img`
  height: 70px;
  svg {
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  }
`
