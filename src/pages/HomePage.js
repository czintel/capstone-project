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
      <ContentWrapper>
        <h2>Willkommen zu Hmpf!</h2>
        <p>
          Schön, dass du da bist! 😇
          <br />
          <br />
          <strong>
            <em>Hmpf!</em>
          </strong>{' '}
          hilft dir, dich und deine Gefühle besser zu verstehen. Oft überkommen
          uns unsere Gefühle, wir werden wütend, weinen und wissen nicht so
          recht warum es uns gerade so geht wie es uns geht.
          <br /> <br />
        </p>
        <form onSubmit={handleSubmit}>
          <Label>
            <strong>Wie ist dein Name?</strong>
            <input name="name" type="text" placeholder="Dein Name" />
            <br />
            <GoButton>Los geht's!</GoButton>
          </Label>
        </form>
      </ContentWrapper>
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
  display: flex;
  gap: 20px;
  padding: 20px;
  flex-direction: column;
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
`

const ContentWrapper = styled.section`
  background-color: #fffcfd;
  background-image: url('https://www.transparenttextures.com/patterns/blizzard.png');
  color: #897869;
  padding: 30px;
  border-radius: 30px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
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
