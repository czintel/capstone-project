import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import home from '../assets/home.svg'
import lernen from '../assets/lernen.svg'
import quiz from '../assets/quiz.svg'
import settings from '../assets/settings.svg'

export default function NavBar() {
  const active = {
    fontWeight: '700',
    backgroundColor: 'var(--wut)',
  }

  return (
    <NavigationWrapper>
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
    </NavigationWrapper>
  )
}

const NavigationWrapper = styled.div`
  background: rgb(255, 255, 247);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 247, 1) 0%,
    rgba(255, 255, 247, 1) 70%,
    rgba(255, 255, 247, 0) 100%
  );
  height: 100px;
  width: auto;
  z-index: 1100;
`

const Navigation = styled.ul`
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
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
  background-color: var(--gray);
  color: #f6f6f6;

  img {
    width: 35px;
    height: auto;
  }
`
