import styled from 'styled-components/macro'
import NavButton from './NavButton'

export default function NavBar(onNavigate) {
  return (
    <NavBarWrapper>
      <NavButton isLeft={true} onClick={onNavigate}>
        Lernen
      </NavButton>
      <NavDivider />
      <NavButton isRight={true} onClick={onNavigate}>
        Quiz
      </NavButton>
    </NavBarWrapper>
  )
}

const NavBarWrapper = styled.section`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-evenly;
`

const NavDivider = styled.div`
  height: 50px;
  width: 5px;
  background: #f2f2f2;
`
