import styled from 'styled-components/macro'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useRef, useState } from 'react'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'
import LearningPage from './pages/LearningPage'
// import ScrollToTop from './components/ScrollToTop'
import NavBar from './components/NavBar'
import appLogo from './assets/Logo.svg'

function App() {
  const mainRef = useRef(null)
  const [userName, setUserName] = useState('')

  return (
    <Router>
      <Wrapper>
        {/* <ScrollToTop elementToScrollUp={mainRef} /> */}
        <Header>
          <Logo src={appLogo} alt="App Logo" />
        </Header>
        <Main ref={mainRef}>
          <Switch>
            <Route exact path="/">
              <HomePage onSubmit={userName => setUserName(userName)} />
            </Route>
            <Route path="/lernen">
              <LearningPage userName={userName} />
            </Route>
            <Route path="/quiz" component={QuizPage} />
          </Switch>
        </Main>
        <Footer>
          <NavBar />
        </Footer>
      </Wrapper>
    </Router>
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
  justify-self: center;
  margin: 0 auto;
  overflow: visible;
  max-width: 840px;
`

const Header = styled.header`
  margin-top: 20px;
  grid-area: header;
  justify-content: center;
`

const Main = styled.main`
  grid-area: main;
  height: 80vh;
  align-content: center;
  overflow: auto;
`

const Footer = styled.footer`
  grid-area: footer;
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
`
const Logo = styled.img`
  height: 70px;
  svg {
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  }
`
