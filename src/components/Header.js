import styled from 'styled-components/macro'
import appLogo from '../assets/Logo.svg'

export default function Header() {
  return (
    <StyledHeader>
      <Logo src={appLogo} alt="App Logo" />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  align-self: center;
  top: 0;
  width: 100%;
  max-width: 760px;
  grid-area: header;
  text-align: center;
  padding-top: 20px;
  background-color: #fffff7;
  background-image: url('https://www.transparenttextures.com/patterns/notebook-dark.png');
`

const Logo = styled.img`
  justify-content: center;
  justify-items: center;
  margin: 0 auto;
  height: 70px;
`
