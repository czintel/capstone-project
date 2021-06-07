import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default function Button({ children, ...props }) {
  return <ButtonExpansion {...props}>{children}</ButtonExpansion>
}

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
