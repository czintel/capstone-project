import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
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
}

export default function QuizCard({
  title,
  scenario,
  question,
  answers,
  className,
}) {
  const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState()

  function handleAnswerClick(isCorrect) {
    if (isCorrect === true) {
      setIsAnsweredCorrectly(true)
      console.log('richtig')
    } else {
      setIsAnsweredCorrectly(false)
      console.log('falsch')
    }
  }

  return (
    <>
      <Card isAnsweredCorrectly={isAnsweredCorrectly}>
        <h2 className={isAnsweredCorrectly ? 'correctAnswer' : 'wrongAnswer'}>
          {title}
        </h2>
        <p>{scenario}</p>
        <h3>{question}</h3>
        <AnswerSection>
          {answers.map((answer, index) => (
            <AnswerButton
              key={index}
              onClick={() => handleAnswerClick(answer.isCorrect)}
              isCorrect={answer.isCorrect}
              className={isAnsweredCorrectly ? 'correctAnswer' : 'wrongAnswer'}
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
    background-color: #565656;
    color: white;
    padding: 20px;
    border-radius: 30px 30px 0 0;

    &.correctAnswer {
      background-color: #99c140;
      color: white;
    }

    &.wrongAnswer {
      background-color: #cc3232;
      color: white;
    }
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
  font-size: 14px;
  line-height: 1;
  padding: 5px 10px 5px;
  border-radius: 15px;
  border: 2px gray solid;
  color: gray;

  &.correctAnswer {
    scale: 115%;
    background-color: #99c140;
    border: 2px #99c140 solid;
    color: white;
  }

  &.wrongAnswer {
    background-color: #cc3232;
    border: 2px #cc3232 solid;
    color: white;
  }
`

// ${props => props.primary && css`
// background: white;
// color: palevioletred;
// `}

// background-color: ${prop => (prop.isAnsweredCorrectly ? 'green' : 'red')};
// color: ${prop => (prop.isAnsweredCorrectly ? 'white' : 'white')};
