import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

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
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  justify-self: end;
  background-color: var(--gray);
  background-image: url('https://www.transparenttextures.com/patterns/blizzard.png');
  color: var(--background-white);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.15);
`
