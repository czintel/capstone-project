import styled from 'styled-components/macro'

export default function StartPage() {
  return (
    <PageWrapper>
      <h2>Willkommen zu AppName!</h2>
      <span>
        Klicke auf "Lernen", um mehr über die Basisemotionen zu erfahren.
      </span>
    </PageWrapper>
  )
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
