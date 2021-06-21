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
  margin-top: 20px;
  text-align: center;
  color: #897869;
`
