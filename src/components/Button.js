import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

RegButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default function RegButton({ onClick, children, ...props }) {
  return (
    <Button onClick={onClick} {...props}>
      {children}
    </Button>
  )
}

const Button = styled.button`
  width: fit-content;
  height: auto;
  font-weight: 400;
  font-size: 20px;
  border-radius: 50%;
  justify-self: center;
  text-align: center;
  border: none;
  background-color: lightgray;
  color: white;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
`
