import styled from 'styled-components/macro'
import QuizCard from '../components/QuizCard'
import PropTypes from 'prop-types'
import data from '../data.json'

QuizPage.propTypes = {
  key: PropTypes.number,
  title: PropTypes.string,
  scenario: PropTypes.string,
  question: PropTypes.string,
  answers: PropTypes.array,
}

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
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  max-width: 330px;
  margin: 0 auto;
`
