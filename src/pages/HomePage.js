import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import Header from '../components/Header'
import LabeledInput from '../components/LabeledInput'

HomePage.propTypes = {
  onSubmit: PropTypes.func,
  userName: PropTypes.string,
}

export default function HomePage({ onSubmit }) {
  const history = useHistory()

  return (
    <PageWrapper>
      <Header />
      <h2>Willkommen zu Hmpf!</h2>
      <p>Schön, dass du da bist! 😇</p>
      <p>
        Oft überkommen unsere Emotionen uns wie aus dem Nichts. Wir werden
        wütend, weinen und wissen gar nicht so recht was mit uns los ist.
      </p>
      <p>
        <strong>
          <em>Hmpf!</em>
        </strong>
        {'  '}
        hilft dir dabei, dich und deine Gefühle besser zu verstehen.
      </p>
      <Form onSubmit={handleSubmit}>
        <LabeledInput
          label="Wie ist dein Name?"
          name="name"
          type="text"
          placeholder="Dein Name"
          autoComplete="off"
          required
        />
        <GoButton type="submit">Los geht's!</GoButton>
      </Form>
    </PageWrapper>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const nameInput = form.elements.name
    const userName = nameInput.value
    onSubmit(userName)
    history.push('/lernen')
  }
}

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  margin: 20px 40px;
  border-radius: 30px;
  font-size: 1rem;
  background-color: var(--background-white);
  background-image: url('https://www.transparenttextures.com/patterns/blizzard.png');
  color: var(--text-1);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.15);
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

const GoButton = styled.button`
  width: fit-content;
  padding: 10px 15px;
  margin-top: 20px;
  align-self: center;
  justify-self: end;
  border-radius: 20px;
  border: none;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  background-color: var(--green);
  background-image: url('https://www.transparenttextures.com/patterns/blizzard.png');
  color: var(--background-white);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.15);
`
