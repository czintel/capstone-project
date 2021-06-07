import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import GlobalStyle from '../GlobalStyle'

emotionsCard.propTypes = {
  isExpanded: PropTypes.bool,
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.string,
}

export default function emotionsCard({ name, description, tags }) {
  return (
    <>
      <GlobalStyle />
      <Card>
        <h2>{name}</h2>
        <span>
          Was ist {name}? {description}
        </span>
        <ul>
          <li>{tags[0]}</li>
          <li>{tags[1]}</li>
          <li>{tags[2]}</li>
          <li>{tags[3]}</li>
        </ul>
        <ButtonExpansion>+</ButtonExpansion>
      </Card>
    </>
  )
}

const Card = styled.div`
  display: grid;
  gap: 15px;
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
      border-radius: 3px;
      background-color: white;
      color: black;
    }
  }
`
const ButtonExpansion = styled.button`
  width: 50px;
  height: 50px;
  font-weight: 700;
  font-size: 20px;
  border-radius: 50%;
  justify-self: right;
  text-align: center;
  border: none;
  background-color: white;
  color: black;
`
