import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import GlobalStyle from '../GlobalStyle'
import ButtonExpansion from './ButtonExpansion'
import { useState } from 'react'

Card.propTypes = {
  onClick: PropTypes.func,
  isAusgeklappt: PropTypes.bool,
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array,
  color: PropTypes.string,
}

export default function Card({ name, description, tags, color }) {
  const [isAusgeklappt, setIsExpanded] = useState(false)

  return (
    <>
      <GlobalStyle />
      <LearningCard isAusgeklappt={isAusgeklappt} backgroundColor={color}>
        <h2 isAusgeklappt={isAusgeklappt}>{name}</h2>
        {isAusgeklappt && (
          <>
            <span>
              Was ist {name}? {description}
            </span>
            <ul>
              <li>{tags[0]}</li>
              <li>{tags[1]}</li>
              <li>{tags[2]}</li>
              <li>{tags[3]}</li>
            </ul>
          </>
        )}
        <ButtonExpansion
          isAusgeklappt={isAusgeklappt}
          onClick={() => setIsExpanded(!isAusgeklappt)}
        >
          {isAusgeklappt ? '-' : '+'}
        </ButtonExpansion>
      </LearningCard>
    </>
  )
}

const LearningCard = styled.div`
  display: grid;
  gap: 20px;
  width: ${prop => (prop.isAusgeklappt ? '100%' : '155px')};
  height: ${prop => (prop.isAusgeklappt ? '100%' : '155px')};
  min-width: 155px;
  max-width: 600px;
  padding: ${prop => (prop.isAusgeklappt ? '40px' : '40px 20px')};
  border: none;
  color: white;
  border-radius: 30px;
  background-color: ${prop => prop.backgroundColor};
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: ${prop => (prop.isAusgeklappt ? '50px' : '30px')};
    text-align: center;
    line-height: 1;
    margin: 0;
  }

  ul {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 15px;
    list-style-type: none;
    justify-content: space-evenly;
    text-align: left;
    padding-left: 0;

    li {
      padding: 3px 8px;
      border-radius: 10px;
      background-color: white;
      color: gray;
    }
  }
`
