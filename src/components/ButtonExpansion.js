import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Button.propTypes = {
  children: PropTypes.node,
}

export default function Button({ children, ...props }) {
  return (
    <ButtonExpansion {...props}>
      <ChildWrapper>{children}</ChildWrapper>
    </ButtonExpansion>
  )
}

const ButtonExpansion = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  font-weight: 700;
  border-radius: 50%;
  border: none;
  background-color: var(--background-white);
  color: gray;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
  justify-self: center;
  z-index: 0;
`
const ChildWrapper = styled.span`
  position: absolute;
  transform: translate(-50%, -55%);
`
