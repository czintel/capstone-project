import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Card.propTypes = {
  isExpanded: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

export default function Card({ name, description }) {
  return (
    <EmotionsCard>
      <Title>{name}</Title>
      <span>
        Was ist {name}? {description}
      </span>
      <ButtonExpansion>+</ButtonExpansion>
    </EmotionsCard>
  )
}

const EmotionsCard = styled.div`
  display: grid;
  gap: 20px;
  width: 42.5%;
  padding: 40px;
  border: none;
  background-color: lightgray;
  border-radius: 30px;
`

const Title = styled.h2`
  font-size: 30px;
  line-height: 1;
`
const ButtonExpansion = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  justify-self: right;
  text-align: center;
  border: none;
  background-color: white;
  color: black;
`
