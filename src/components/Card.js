import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import GlobalStyle from '../GlobalStyle'
import ButtonExpansion from './ButtonExpansion'
import { useState } from 'react'

EmotionsCard.propTypes = {
  isExpanded: PropTypes.bool,
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.string,
  onClick: PropTypes.func,
}

export default function EmotionsCard({ name, description, tags }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <GlobalStyle />
      <Card>
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
        <ButtonExpansion onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? '-' : '+'}
        </ButtonExpansion>
      </Card>
    </>
  )
}

const Card = styled.div`
  display: grid;
  gap: 20px;
  width: 42.5%;
  padding: 40px;
  border: none;
  background-color: darkgray;
  color: white;
  border-radius: 30px;

  h2 {
    font-size: 30px;
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
