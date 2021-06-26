import styled from 'styled-components/macro'
import LabeledInput from '../components/LabeledInput'
import { NavLink } from 'react-router-dom'

export default function HomePage() {
  return (
    <PageWrapper>
      <h2>Willkommen zu Hmpf!</h2>
      <p>Schön, dass du da bist! 😇</p>
      <p>
        <strong>
          <em>Hmpf!</em>
        </strong>{' '}
        hilft dir, dich und deine Gefühle besser zu verstehen. Oft überkommen
        uns unsere Gefühle, wir werden wütend, weinen und wissen nicht so recht
        warum es uns gerade so geht wie es uns geht.
      </p>
      <Form onSubmit={handleSubmit}>
        <LabeledInput
          label="Wie ist dein Name?"
          name="name"
          placeholder="Dein Name"
          autoComplete="off"
          required
        />
        <GoButton to="/lernen">Los geht's!</GoButton>
      </Form>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    display: grid;
    gap: 4px;
    font-weight: bold;
  }

  input {
    padding: 4px;
  }
`

const GoButton = styled(NavLink)`
  align-self: center;
  text-decoration: none;
  width: fit-content;
  padding: 10px 15px;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 20px;
  justify-self: end;
  border: none;
  background-color: #79d45e;
  background-image: url('https://www.transparenttextures.com/patterns/blizzard.png');
  color: #f6f6f6;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.15);
  margin-top: 20px;
`
