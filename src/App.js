import styled from 'styled-components/macro'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { loadFromLocal, saveToLocal } from './utils/localStorage'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'
import LearningPage from './pages/LearningPage'
import SettingsPage from './pages/SettingsPage'
import NavBar from './components/NavBar'
import appLogo from './assets/Logo.svg'

function App() {
  const [userName, setUserName] = useState(loadFromLocal('userName') ?? [])

  useEffect(() => {
    saveToLocal('userName', userName)
  }, [userName])

  return (
    <Router>
      <AppGrid>
        <Header>
          <Logo src={appLogo} alt="App Logo" />
        </Header>

        <Main>
          <Switch>
            <Route exact path="/">
              <HomePage onSubmit={handleNameSubmit} />
            </Route>

            <Route path="/lernen">
              <LearningPage userName={userName} />
            </Route>

            <Route path="/quiz">
              <QuizPage />
            </Route>

            <Route path="/einstellung">
              <SettingsPage onClick={handleNameSubmit} />
            </Route>
          </Switch>
        </Main>

        <Footer>
          <NavBar />
        </Footer>
      </AppGrid>
    </Router>
  )

  function handleNameSubmit(userName) {
    setUserName(userName)
  }
}

export default App

const AppGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
  margin: 0 auto;
  width: auto;
  max-width: 840px;
`

const Header = styled.header`
  position: fixed;
  left: 20px;
  right: 20px;
  grid-area: header;
  text-align: center;
  padding-top: 20px;
  background-color: #fffff7;
  background-image: url('https://www.transparenttextures.com/patterns/notebook-dark.png');
`

const Main = styled.main`
  padding-top: 100px;
  padding-bottom: 100px;
  grid-area: main;
`

const Footer = styled.footer`
  grid-area: footer;
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 20px;
`
const Logo = styled.img`
  justify-content: center;
  justify-items: center;
  margin: 0 auto;
  height: 70px;
`
