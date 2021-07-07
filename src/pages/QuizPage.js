import styled from 'styled-components/macro'
import { useState } from 'react'
import QuizCard from '../components/QuizCard'
import Header from '../components/Header'
import filterActive from '../assets/filterActive.svg'
import filterInactive from '../assets/filterInactive.svg'

import data from '../data.json'

export default function QuizPage() {
  const [isActive, setIsActive] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState([])

  return (
    <PageWrapper>
      <FilterButton
        src={isActive ? filterActive : filterInactive}
        alt=""
        role="button"
        isActive={false}
        onClick={() => setIsActive(!isActive)}
      />
      <Header />

      <Welcome>
        <h3>Jetzt geht es an's Gelernte!</h3>
        <p>
          Lies dir die Quizkarten durch und versetze dich so gut du kannst in
          die Situation hinein! Wenn du die passende Antwort kennst, dann klicke
          sie an.
        </p>
      </Welcome>

      {isActive
        ? correctAnswers.map(({ title, scenario, question, answers, id }) => (
            <QuizCard
              key={id}
              title={title}
              scenario={scenario}
              question={question}
              answers={answers}
              onAddCorrectAnswer={() => handleCorrectAnswer(id)}
            />
          ))
        : data.quiz.map(({ title, scenario, question, answers, id }) => (
            <QuizCard
              key={id}
              title={title}
              scenario={scenario}
              question={question}
              answers={answers}
              onAddCorrectAnswer={() => handleCorrectAnswer(id)}
            />
          ))}
    </PageWrapper>
  )

  function handleCorrectAnswer(id) {
    const correctAnsweredQuizCard = data.quiz.find(card => card.id === id)
    setCorrectAnswers([...correctAnswers, correctAnsweredQuizCard])
  }
}

const PageWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
`
const FilterButton = styled.img`
  height: 45px;
  width: auto;
  position: fixed;
  right: 15%;
  top: 30px;
  z-index: 1200;
`
const Welcome = styled.section`
  padding: 30px;
  margin: 20px 40px;
  border-radius: 30px;
  color: var(--text-1);
  background-color: var(--background-white);
  background-image: url('https://www.transparenttextures.com/patterns/blizzard.png');
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.15);
`
