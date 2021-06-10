import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ButtonExpansion from './ButtonExpansion'
import { useState } from 'react'

Card.propTypes = {
  onClick: PropTypes.func,
  isExpanded: PropTypes.bool,
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array,
  color: PropTypes.string,
}

export default function Card({ name, description, tags, color }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <LearningCard isExpanded={isExpanded} backgroundColor={color}>
        <h2 isExpanded={isExpanded}>{name}</h2>
        {isExpanded && (
          <>
            <span>
              Was ist {name}? {description}
            </span>
            <ul>
              {tags.map(tag => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </>
        )}
        <ButtonExpansion
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? '-' : '+'}
        </ButtonExpansion>
      </LearningCard>
    </>
  )
}

const LearningCard = styled.div`
  display: grid;
  gap: 20px;
  width: ${prop => (prop.isExpanded ? '100%' : '155px')};
  height: ${prop => (prop.isExpanded ? 'auto' : '155px')};
  min-width: 155px;
  max-width: 680px;
  padding: ${prop => (prop.isExpanded ? '35px' : '35px 20px')};
  border: none;
  color: white;
  border-radius: 30px;
  background-color: ${prop => prop.backgroundColor};
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: ${prop => (prop.isExpanded ? '50px' : '30px')};
    text-align: center;
    line-height: 1;
    margin: 0;
  }

  span {
    font-size: 17px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0 10px;
    font-size: 14px;
    list-style-type: none;
    justify-content: left;

    li {
      padding: 3px 8px;
      border-radius: 10px;
      background-color: white;
      color: gray;
    }
  }
`
