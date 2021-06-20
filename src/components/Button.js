import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default function Button({ onClick, children, ...props }) {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  width: fit-content;
  height: auto;
  padding: 10px 15px;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 15px;
  justify-self: end;
  border: none;
  background-color: darkgray;
  color: #f6f6f6;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
`
