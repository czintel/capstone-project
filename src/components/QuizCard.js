import PropTypes from 'prop-types'
import styled, { css } from 'styled-components/macro'
import { useState } from 'react'
QuizCard.propTypes = {
  onClick: PropTypes.func,
  isAnsweredCorrectly: PropTypes.bool,
  isCorrect: PropTypes.bool,
  title: PropTypes.string,
  scenario: PropTypes.string,
  question: PropTypes.string,
  answers: PropTypes.array,
  answer: PropTypes.string,
  className: PropTypes.string,
  isClicked: PropTypes.bool,
}
export default function QuizCard({ title, scenario, question, answers }) {
  const [bgColor, setBgColor] = useState('darkgray')
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const handleAnswerClick = (isCorrect, answer) => {
    const color = isCorrect ? '#99c140' : '#cc3232'
    setBgColor(color)
    setSelectedAnswer(answer)
  }

  return (
    <>
      <Card bgColor={bgColor}>
        <h2>{title}</h2>
        <p>{scenario}</p>
        <h3>{question}</h3>
        <AnswerSection>
          {answers.map(answer => (
            <AnswerButton
              key={answer.answerText}
              onClick={() =>
                handleAnswerClick(answer.isCorrect, answer.answerText)
              }
              isCorrect={answer.isCorrect}
              bgColor={
                answer.answerText === selectedAnswer ? bgColor : 'darkgray'
              }
            >
              {answer.answerText}
            </AnswerButton>
          ))}
        </AnswerSection>
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
    background-color: ${props => props.bgColor};
    color: white;
    font-size: 1.8rem;
    padding: 20px 20px 15px;
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
`
const AnswerSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding-left: 40px;
  padding-right: 50px;
  list-style-type: none;
  justify-content: center;
`
const AnswerButton = styled.button`
  scale: 100%;
  font-size: 0.9rem;
  line-height: 1;
  padding: 5px 10px 5px;
  border-radius: 15px;
  border: 2px gray solid;
  color: gray;
  ${props =>
    props.bgColor &&
    css`
      background-color: ${props.bgColor};
      border: 2px ${props.bgColor} solid;
      color: white;
    `}
`
