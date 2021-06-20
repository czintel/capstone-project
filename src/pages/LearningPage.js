import styled from 'styled-components/macro'
import LearningCard from '../components/LearningCard'
import data from '../data.json'

export default function LearningCardList() {
  return (
    <PageWrapper>
      <CardWrapper>
        {data.emotions.map(({ name, description, tags, color, emId }) => (
          <LearningCard
            key={emId}
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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  max-width: 370px;
`

const CardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: 20px;
  max-width: 330px;
`
