import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import GlobalStyle from '../GlobalStyle'
import Button from './Button'
import { uuid } from 'uuidv4'
import { useState } from 'react'

QuizCard.propTypes = {
  onClick: PropTypes.func,
  isAnswered: PropTypes.bool,
  isCorrect: PropTypes.bool,
  isActive: PropTypes.bool,
  title: PropTypes.string,
  scenario: PropTypes.string,
  question: PropTypes.string,
  answers: PropTypes.array,
  answer: PropTypes.string,
}

export default function QuizCard({
  title,
  scenario,
  question,
  answers,
  // correctAnswerColor
}) {
  const [isActive, setIsActive] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)
  const [isSelected, setIsSelected] = useState(false)

  return (
    <>
      <GlobalStyle />
      <Card isAnswered={isAnswered}>
        <h2>{title}</h2>
        <p>{scenario}</p>
        <h3>{question}</h3>
        <ul>
          {answers.map(answer => (
            <li>
              <button
                key={uuid}
                isCorrect={answer.isCorrect}
                isSelected={isSelected}
                onClick={() => {
                  setIsSelected(!isSelected)
                  setIsActive(!isActive)
                }}
              >
                {answer.answer}
              </button>
            </li>
          ))}
        </ul>
        <ButtonSolution onClick={setIsAnswered} isActive={isActive}>
          Beantworten
        </ButtonSolution>
      </Card>
    </>
  )
}

const Card = styled.div`
  display: grid;
  gap: 30px;
  max-width: 670px;
  line-height: 1;
  background-color: white;
  padding: 0 0 40px;
  border-radius: 30px;
  color: gray;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;

  h2 {
    background-color: #565656;
    color: white;
    padding: 20px;
    border-radius: 30px 30px 0 0;
  }

  h3 {
    color: #565656;
    padding: 0 40px;
    line-height: 1.4;
  }

  p {
    padding: 0 40px;
    text-align: left;
    line-height: 1.4;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding-left: 40px;
    padding-right: 50px;
    list-style-type: none;
    justify-content: center;

    li {
      button {
        scale: 100%;
        font-size: 14px;
        opacity: 100%;
        line-height: 1;
        padding: 6px 10px 5px;
        border-radius: 25px;
        border: 2px gray solid;
        background-color: white;
        color: gray;
      }
    }
  }
`

const ButtonSolution = styled(Button)`
  justify-self: center;
  width: fit-content;
`

//function onAnswer() {
//  return console.log('Hello World!')
// Antwort richtig: hebt richtige Antwort grün hervor. Toggelt setIsAnswered
// Antwort falsch:  falsche Antwort wird rot hervorgehoben
//}
