import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ButtonExpansion from './ButtonExpansion'
import { useState } from 'react'

Card.propTypes = {
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
  color: #f6f6f6;
  border-radius: 30px;
  background-color: ${prop => prop.backgroundColor};
  background-image: url('https://www.transparenttextures.com/patterns/blizzard.png');
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: ${prop => (prop.isExpanded ? '3rem' : '1.6rem')};
    text-align: center;
    line-height: 1;
    margin: 0;
  }

  span {
    font-size: 1rem;
  }

  ul {
    padding: 0 10px;
    font-size: 0.9rem;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    list-style-type: none;
    justify-content: left;

    li {
      padding: 3px 8px;
      border-radius: 10px;
      background-color: #f6f6f6;
      color: gray;
    }
  }
`
