import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import LearningCard from '../components/LearningCard'
import ButtonRight from '../components/ButtonRight'

LearningCardList.propTypes = {
  emotions: PropTypes.array,
}

export default function LearningCardList({ emotions }) {
  return (
    <PageWrapper>
      <ButtonRight>Quiz &gt;</ButtonRight>
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
  display: grid;
  gap: 20px;
  padding: 20px;
`

const CardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  margin: 0;
`
