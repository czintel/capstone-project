import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import QuizCard from '../components/QuizCard'

QuizCardPage.propTypes = {
  data: PropTypes.array,
}

export default function QuizCardPage({ data }) {
  return (
    <PageWrapper>
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
  gap: 20px;
  width: 100%;
  max-width: 370px;
  margin: 0 auto;
  padding: 20px;
  scroll-behavior: auto;
`
