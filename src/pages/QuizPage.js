import styled from 'styled-components/macro'
import { useState } from 'react'
import QuizCard from '../components/QuizCard'
import Header from '../components/Header'
import filterActive from '../assets/filterActive.svg'
import filterInactive from '../assets/filterInactive.svg'

import data from '../data.json'

export default function QuizPage() {
  const [isActive, setIsActive] = useState(false)

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

      {data.quiz.map(({ title, scenario, question, answers, id }) => (
        <QuizCard
          key={id}
          title={title}
          scenario={scenario}
          question={question}
          answers={answers}
        />
      ))}
    </PageWrapper>
  )
}

const PageWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin: 0 auto;
`
const FilterButton = styled.img`
  height: 45px;
  width: auto;
  position: fixed;
  right: 15%;
  top: 30px;
  z-index: 1000;
`
