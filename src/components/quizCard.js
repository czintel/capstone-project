import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { useState } from 'react'

QuizCardContent.propTypes = {
  onClick: PropTypes.func,
  isAnswered: PropTypes.bool,
  isCorrect: PropTypes.bool,
  title: PropTypes.string,
  scenario: PropTypes.string,
  question: PropTypes.string,
  answers: PropTypes.array,
}

export default function QuizCardContent({
  title,
  scenario,
  question,
  answers,
  onClick,
}) {
  const [isAnswered, setIsAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  return (
    <QuizCard isAnswered={isAnswered}>
      <h3>{title}</h3>
      <p>{scenario}</p>
      <h3>{question}</h3>
      <ul>
        <li isCorrect={isCorrect}>{answers}</li>
      </ul>
      <button onClick={onClick}>beantworten</button>
    </QuizCard>
  )
}

const QuizCard = styled.div`
  padding: 20px;
`
