import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  isExpanded: PropTypes.bool,
}

export default function Button({ children, ...props }) {
  return <ButtonExpansion {...props}>{children}</ButtonExpansion>
}

const ButtonExpansion = styled.button`
  width: ${prop => (prop.isExpanded ? '50px' : '40px')};
  height: ${prop => (prop.isExpanded ? '50px' : '40px')};
  font-weight: 700;
  font-size: 20px;
  border-radius: 50%;
  justify-self: center;
  text-align: center;
  border: none;
  background-color: white;
  color: gray;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
`
