import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  const active = {
    fontWeight: '700',
    backgroundColor: '#FFAF68',
  }

  return (
    <NavBarWrapper>
      <StyledLink to="/start" activeStyle={active} isLeft={true}>
        Start
      </StyledLink>
      <StyledLink to="/lernen" activeStyle={active}>
        Lernen
      </StyledLink>
      <StyledLink to="/quiz" activeStyle={active} isRight={true}>
        Quiz
      </StyledLink>
    </NavBarWrapper>
  )
}

const NavBarWrapper = styled.ul`
  display: flex;
  width: 330px;
  position: fixed;
  bottom: 0;
  margin: 0 20px 20px;
  padding-left: 0;
  justify-content: space-around;
  justify-self: center;
  align-items: center;
  list-style: none;
  transform: translateX(-20px);
`

const StyledLink = styled(NavLink)`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  width: 100%;
  text-decoration: none;
  border-style: none;
  font-weight: 400;
  padding-left: ${prop => (prop.isLeft ? '10px' : '0')};
  padding-right: ${prop => (prop.isRight ? '10px' : '0')};
  border-top-right-radius: ${prop => (prop.isRight ? '30px' : '0')};
  border-bottom-right-radius: ${prop => (prop.isRight ? '30px' : '0')};
  border-top-left-radius: ${prop => (prop.isLeft ? '30px' : '0')};
  border-bottom-left-radius: ${prop => (prop.isLeft ? '30px' : '0')};
  background-color: #b7bcb6;
  color: #f6f6f6;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`
