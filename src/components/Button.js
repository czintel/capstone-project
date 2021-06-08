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
  padding: 10px 15px;
  font-weight: 400;
  font-size: 20px;
  border-radius: 15px;
  justify-self: end;
  border: none;
  background-color: darkgray;
  color: white;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
`
