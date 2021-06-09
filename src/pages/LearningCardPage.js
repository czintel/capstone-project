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
  height: 100vh;
  scroll-behavior: auto;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 370px;
  align-content: center;
  justify-content: flex-start;
  margin: 0 auto;
  gap: 20px;
  padding: 20px;
`
