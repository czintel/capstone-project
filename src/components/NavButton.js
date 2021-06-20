import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Button.propTypes = {
  onClick: PropTypes.func,
  onNavigate: PropTypes.func,
  isActive: PropTypes.bool,
  children: PropTypes.node,
  isRight: PropTypes.bool,
  isLeft: PropTypes.bool,
}

export default function Button({ children, ...props }) {
  return <NavButton {...props}>{children}</NavButton>
}

const NavButton = styled.button`
  height: 50px;
  width: 100%;
  border-style: none;
  font-weight: ${prop => (prop.isActive ? '600' : '400')};
  border-top-right-radius: ${prop => (prop.isRight ? '25px' : '0')};
  border-bottom-right-radius: ${prop => (prop.isRight ? '25px' : '0')};
  border-top-left-radius: ${prop => (prop.isLeft ? '25px' : '0')};
  border-bottom-left-radius: ${prop => (prop.isLeft ? '25px' : '0')};
  background-color: ${prop => (prop.isActive ? '#a8b8d0' : '#cccccc')};
  color: white;
`
