import styled from 'styled-components/macro'
import QuizCard from '../components/QuizCard'
import data from '../data.json'

export default function QuizPage() {
  return (
    <PageWrapper>
      {data.quiz.map(({ title, scenario, question, answers, qId }) => (
        <QuizCard
          key={qId}
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
  gap: 20px;
  width: 100%;
  max-width: 370px;
  margin: 0 auto;
  scroll-behavior: auto;
`
