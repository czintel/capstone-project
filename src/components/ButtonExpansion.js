import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  isExpanded: PropTypes.bool,
}

export default function Button({ children, ...props }) {
  return <ButtonExpansion {...props}>{children}</ButtonExpansion>
}

const ButtonExpansion = styled.button`
  width: ${prop => (prop.isExpanded ? '50px' : '30px')};
  height: ${prop => (prop.isExpanded ? '50px' : '30px')};
  font-weight: 700;
  font-size: 20px;
  border-radius: 50%;
  justify-self: center;
  text-align: center;
  border: none;
  background-color: white;
  color: black;
`
