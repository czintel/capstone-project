import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import GlobalStyle from '../GlobalStyle'

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
  isActive,
  onClick,
  isAnswered,
  // correctAnswerColor,
}) {
  return (
    <>
      <GlobalStyle />
      <Card isAnswered={isAnswered}>
        <h2>{title}</h2>
        <p>{scenario}</p>
        <h3>{question}</h3>
        <ul>
          {answers.map(answer => (
            <li
              key={answer.question}
              isCorrect={answer.isCorrect}
              isAnswered={isAnswered}
            >
              {answer.answer}
            </li>
          ))}
        </ul>
        <button onClick={onClick} isActive={isActive}>
          Beantworten
        </button>
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
    gap: 15px;
    padding-left: 40px;
    padding-right: 60px;
    list-style-type: none;
    justify-content: center;

    li {
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
  button {
    width: fit-content;
    opacity: 100%;
    height: auto;
    padding: 10px 15px;
    font-weight: 600;
    border-radius: 15px;
    justify-self: center;
    border: none;
    background-color: darkgray;
    color: white;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  }
`
//function onAnswer() {
//  return console.log('Hello World!')
// Antwort richtig: hebt richtige Antwort grün hervor. Toggelt setIsAnswered
// Antwort falsch:  falsche Antwort wird rot hervorgehoben
//}
