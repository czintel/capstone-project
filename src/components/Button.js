import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

RegButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export default function RegButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>
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
  color: gray;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
`
