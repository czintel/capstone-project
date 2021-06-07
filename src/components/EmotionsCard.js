import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Card.propTypes = {
  isExpanded: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  emotions: PropTypes.arrayOf(
    PropTypes.shape({
      nameOfEmotion: PropTypes.string,
      descriptionOfEmotion: PropTypes.string,
      colorOfEmotion: PropTypes.string,
      infoTagsOfEmotion: PropTypes.string,
    })
  ),
}

export default function Card({ emotions }) {
  return (
    <EmotionsCard>
      <Title>{emotions.map(emotion => emotion.nameOfEmotion)}</Title>
    </EmotionsCard>
  )
}

const EmotionsCard = styled.div`
  width: 42, 5%;
  display: grid;
  padding: 20px;
  border: none;
  background-color: lightgray;
  border-radius: 5px;
`
const Title = styled.h2`
  font-size: 1em;
`
