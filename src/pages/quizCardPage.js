import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import QuizCard from '../components/quizCard'

quizCardPage.propTypes = {
  data: PropTypes.array,
}

export default function quizCardPage({ data }) {
  return (
    <PageWrapper>
      {data.quiz.map(
        ({ title, scenario, question, answers, isCorrect, id }) => (
          <QuizCard
            key={id}
            title={title}
            scenario={scenario}
            question={question}
            answers={answers}
            isCorrect={isCorrect}
          />
        )
      )}
    </PageWrapper>
  )
}

const PageWrapper = styled.section`
  scroll-behavior: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  max-width: 370px;
  margin: 0 auto;
  padding: 20px;
`
