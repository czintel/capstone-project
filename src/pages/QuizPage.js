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
  padding: 20px 0;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin: 0 auto;
`
