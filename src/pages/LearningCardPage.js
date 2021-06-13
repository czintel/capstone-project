import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import LearningCard from '../components/LearningCard'

LearningCardList.propTypes = {
  emotions: PropTypes.array,
}

export default function LearningCardList({ emotions }) {
  return (
    <PageWrapper>
      {emotions.map(({ name, description, tags, color, id }) => (
        <LearningCard
          key={id}
          name={name}
          description={description}
          tags={tags}
          color={color}
        />
      ))}
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