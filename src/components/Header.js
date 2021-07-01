import styled from 'styled-components/macro'
import appLogo from '../assets/Logo.svg'

export default function Header() {
  return (
    <HeaderWrapper>
      <StyledHeader>
        <Logo src={appLogo} alt="App Logo" />
      </StyledHeader>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  align-self: center;
  width: 100%;
  height: 110px;
  background: rgb(255, 255, 247);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 247, 0) 0%,
    rgba(255, 255, 247, 1) 15%,
    rgba(255, 255, 247, 1) 100%
  );
`

const StyledHeader = styled.header`
  align-self: center;
  grid-area: header;
  text-align: center;
  padding-top: 20px;
`

const Logo = styled.img`
  justify-content: center;
  justify-items: center;
  margin: 0 auto;
  height: 70px;
`
