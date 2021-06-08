import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import LearningCard from '../components/LearningCard'
import Button from '../components/Button'

LearningCardList.propTypes = {
  emotions: PropTypes.array,
}

export default function LearningCardList({ emotions }) {
  return (
    <PageWrapper>
      <Button>Quiz</Button>
      <CardWrapper>
        {emotions.map(({ name, description, tags, color, id }) => (
          <LearningCard
            key={id}
            name={name}
            description={description}
            tags={tags}
            color={color}
          />
        ))}
      </CardWrapper>
    </PageWrapper>
  )
}

const PageWrapper = styled.section`
  display: block;
`

const CardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  padding: 20px;
  margin: 0;
`
