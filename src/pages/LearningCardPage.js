import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import LearningCard from '../components/LearningCard'
import Button from '../components/Button'

LearningCardList.propTypes = {
  data: PropTypes.array,
  onClick: PropTypes.func,
}

export default function LearningCardList({ data, onNavigate }) {
  return (
    <PageWrapper>
      <Button onClick={onNavigate}>Quiz &gt;</Button>
      <CardWrapper>
        {data.emotions.map(({ name, description, tags, color, id }) => (
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
  width: 100%;
  max-width: 370px;
  margin: 0 auto;
  padding: 20px;
  scroll-behavior: auto;
`

const CardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`
