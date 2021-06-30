import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import home from '../assets/home.svg'
import lernen from '../assets/lernen.svg'
import quiz from '../assets/quiz.svg'
import settings from '../assets/settings.svg'

export default function NavBar() {
  const active = {
    fontWeight: '700',
    backgroundColor: '#F4889A',
  }

  return (
    <Navigation>
      <StyledLink exact to="/" activeStyle={active} $isLeft>
        <img src={home} alt="home" />
      </StyledLink>
      <StyledLink to="/lernen" activeStyle={active}>
        <img src={lernen} alt="lernen" />
      </StyledLink>
      <StyledLink to="/quiz" activeStyle={active}>
        <img src={quiz} alt="quiz" />
      </StyledLink>
      <StyledLink to="/einstellung" activeStyle={active} $isRight>
        <img src={settings} alt="settings" />
      </StyledLink>
    </Navigation>
  )
}

const Navigation = styled.ul`
  display: flex;
  width: 100%;
  left: 20px;
  right: 20px;
  padding-left: 0;
  list-style: none;
  border-radius: 30px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.15);
  max-width: 400px;
  margin: 0 auto;
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
  background-image: url('https://www.transparenttextures.com/patterns/blizzard.png');
  padding-left: ${prop => (prop.$isLeft ? '10px' : '0')};
  padding-right: ${prop => (prop.$isRight ? '10px' : '0')};
  border-top-right-radius: ${prop => (prop.$isRight ? '30px' : '0')};
  border-bottom-right-radius: ${prop => (prop.$isRight ? '30px' : '0')};
  border-top-left-radius: ${prop => (prop.$isLeft ? '30px' : '0')};
  border-bottom-left-radius: ${prop => (prop.$isLeft ? '30px' : '0')};
  background-color: darkgray;
  color: #f6f6f6;

  img {
    width: 35px;
    height: auto;
  }
`
