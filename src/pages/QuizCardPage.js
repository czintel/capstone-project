import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import QuizCard from '../components/QuizCard'
import Button from '../components/Button'

QuizCardPage.propTypes = {
  data: PropTypes.array,
  onClick: PropTypes.func,
}

export default function QuizCardPage({ data, onNavigate }) {
  return (
    <PageWrapper>
      <Button onClick={onNavigate}>&lt; Lernen</Button>
      {data.quiz.map(({ title, scenario, question, answers }, index) => (
        <QuizCard
          key={index}
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
