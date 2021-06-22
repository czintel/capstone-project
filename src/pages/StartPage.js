import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

StartPage.propTypes = {
  onSubmit: PropTypes.func,
}

export default function StartPage(onSubmit) {
  return (
    <PageWrapper>
      <h2>Willkommen zu Hmpf!</h2>
      <span>Schön, dass du da bist 😇</span>
      <form>
        <label onSubmit={handleSubmit}>
          Wie ist dein Name?
          <input name="name" type="text" placeholder="Dein Name" />
        </label>
      </form>
    </PageWrapper>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.name
    onSubmit(input.value)
    form.reset()
    input.focus()
  }
}

const PageWrapper = styled.section`
  color: #897869;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
`
