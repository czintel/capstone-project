import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function HomePage() {
  return (
    <PageWrapper>
      <h2>Willkommen zu Hmpf!</h2>
      <p>
        Schön, dass du da bist! 😇
        <br />
        <br />
        <strong>
          <em>Hmpf!</em>
        </strong>{' '}
        hilft dir, dich und deine Gefühle besser zu verstehen. Oft überkommen
        uns unsere Gefühle, wir werden wütend, weinen und wissen nicht so recht
        warum es uns gerade so geht wie es uns geht.
        <br /> <br />
      </p>
      <form onSubmit={handleSubmit}>
        <Label>
          <strong>Wie ist dein Name?</strong>
          <input
            name="name"
            type="text"
            placeholder="Dein Name"
            autoComplete="off"
          />
          <br />
          <GoButton to="/lernen">Los geht's!</GoButton>
        </Label>
      </form>
    </PageWrapper>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const nameInput = form.elements.name
    const userName = nameInput.value
    localStorage.setItem('currywurst', userName)
  }
}

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #fffcfd;
  background-image: url('https://www.transparenttextures.com/patterns/blizzard.png');
  color: #897869;
  border-radius: 30px;
  padding: 30px;
  margin: 20px 40px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.15);
  font-size: 1rem;
`

const GoButton = styled(NavLink)`
  background-color: #79d45e;
  align-self: center;
  width: fit-content;
  padding: 10px 15px;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 20px;
  justify-self: end;
  border: none;
  background-color: darkgray;
  background-image: url('https://www.transparenttextures.com/patterns/blizzard.png');
  color: #f6f6f6;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.15);
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
