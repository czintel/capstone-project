import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from '../components/Button'

HomePage.propTypes = {
  onSubmit: PropTypes.func,
  onClick: PropTypes.func,
}

export default function HomePage(onSubmit) {
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
        <br />
        <br />
        Lass{' '}
        <strong>
          <em>Hmpf!</em>
        </strong>{' '}
        dir genau in solchen Momenten helfen.
      </p>
      <form onSubmit={handleSubmit}>
        <Label>
          Wie ist dein Name?
          <input name="name" type="text" placeholder="Dein Name" />
          <br />
          <GoButton>Los geht's!</GoButton>
        </Label>
      </form>
    </PageWrapper>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const nameInput = form.elements.name
    const userName = nameInput.value
    localStorage.setItem('user name', userName)
    form.reset()
    nameInput.focus()
  }
}

const PageWrapper = styled.section`
  color: #897869;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
`

const GoButton = styled(Button)`
  background-color: #79d45e;
  align-self: center;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
