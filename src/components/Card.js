import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import GlobalStyle from '../GlobalStyle'
import ButtonExpansion from './ButtonExpansion'
import { useState } from 'react'

CardTemplate.propTypes = {
  isExpanded: PropTypes.bool,
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
}

export default function CardTemplate({ name, description, tags, color }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <GlobalStyle />
      <Card isExpanded={isExpanded} backgroundColor={color}>
        <h2>{name}</h2>
        {isExpanded && (
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
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? '-' : '+'}
        </ButtonExpansion>
      </Card>
    </>
  )
}

const Card = styled.div`
  display: grid;
  gap: 20px;
  width: ${prop => (prop.isExpanded ? '100%' : '150px')};
  min-width: 158px;
  max-width: 600px;
  padding: 40px;
  border: none;
  color: white;
  border-radius: 30px;

  h2 {
    font-size: ${prop => (prop.isExpanded ? '30px' : '20px')};
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
      color: black;
    }
  }
`
