import styled from 'styled-components/macro'
import data from './data.json'
import QuizCardPage from './pages/QuizCardPage'
import LearningCardPage from './pages/LearningCardPage'
import { useState } from 'react'

function App() {
  const [currentPage, setCurrentPage] = useState('learningCardPage')

  return (
    <>
      <AppWrapper>
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
      </AppWrapper>
    </>
  )
}

export default App

const AppWrapper = styled.section`
  justify-content: center;
`
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
// {
//   /* <Router>
//    <Switch>
//       <Route path="/quiz" component={QuizCardPage} />
//       <Route path="/learning" component={LearningCardPage} />
//     </Switch>
// </Router> */
// }
