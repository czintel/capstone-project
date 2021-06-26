import PropTypes from 'prop-types'
import styled, { css } from 'styled-components/macro'
import { useState } from 'react'

QuizCard.propTypes = {
  title: PropTypes.string,
  scenario: PropTypes.string,
  question: PropTypes.string,
  answers: PropTypes.array,
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
                answer.answerText === selectedAnswer ? bgColor : '#cccccc'
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
  gap: 20px;
  margin: 0 40px 20px;
  width: 100%;
  line-height: 1;
  background-color: #fffcfd;
  background-image: url('https://www.transparenttextures.com/patterns/blizzard.png');
  padding: 0 0 30px;
  border-radius: 30px;
  color: gray;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.15);
  text-align: center;

  h2 {
    background-color: ${props => props.bgColor};
    background-image: url('https://www.transparenttextures.com/patterns/blizzard.png');
    color: #f6f6f6;
    font-size: 1.8rem;
    padding: 20px 20px 15px;
    border-radius: 30px 30px 0 0;
  }
  h3 {
    color: #565656;
    padding: 0 30px;
    font-size: 1.1rem;
    line-height: 1.4;
  }
  p {
    padding: 0 40px;
    text-align: left;
    font-size: 1rem;
    line-height: 1.4;
  }
`
const AnswerSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-left: 40px;
  padding-right: 50px;
  list-style-type: none;
  justify-content: center;
`
const AnswerButton = styled.button`
  font-size: 0.9rem;
  line-height: 1;
  padding: 7px 10px;
  border-radius: 20px;
  border: none;
  color: gray;
  ${props =>
    props.bgColor &&
    css`
      background-color: ${props.bgColor};
      color: #f6f6f6;
      background-image: url('https://www.transparenttextures.com/patterns/blizzard.png');
    `}
`
