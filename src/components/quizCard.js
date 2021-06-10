import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { useState } from 'react'
import GlobalStyle from '../GlobalStyle'

QuizCard.propTypes = {
  onClick: PropTypes.func,
  isAnswered: PropTypes.bool,
  isCorrect: PropTypes.bool,
  title: PropTypes.string,
  scenario: PropTypes.string,
  question: PropTypes.string,
  answers: PropTypes.array,
}

export default function QuizCard({
  title,
  scenario,
  question,
  answers,
  isCorrect,
}) {
  const [isAnswered, setIsAnswered] = useState(false)

  return (
    <>
      <GlobalStyle />
      <Card isAnswered={isAnswered}>
        <h3>{title}</h3>
        <p>{scenario}</p>
        <h3>{question}</h3>
        <ul>
          {answers.map(answer => (
            <li key={answer} isCorrect={isCorrect}>
              {answer}
            </li>
          ))}
        </ul>
        <button onClick={(showSolution, setIsAnswered)}>Beantworten</button>
      </Card>
    </>
  )
}

const Card = styled.div`
  padding: 20px;
`

function showSolution() {
  // Antwort richtig: hebt richtige Antwort grün hervor. Toggelt setIsAnswered
  // Antwort falsch:  falsche Antwort wird rot hervorgehoben
}
