import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import QuizCard from '../components/QuizCard'
import Button from '../components/Button'
import { uuid } from 'uuidv4'

QuizCardPage.propTypes = {
  data: PropTypes.array,
}

export default function QuizCardPage({ data }) {
  return (
    <PageWrapper>
      <Button>&lt; Lernen</Button>
      {data.quiz.map(({ title, scenario, question, answers }) => (
        <QuizCard
          key={uuid}
          title={title}
          scenario={scenario}
          question={question}
          answers={answers}
          //           correctAnswerColor={
          //             data.emotions.find(emotion => emotion.id === emotionId).color
          //           }
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
