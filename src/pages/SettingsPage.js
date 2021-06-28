import styled from 'styled-components/macro'
import Button from '../components/Button'

export default function SettingsPage(onClick) {
  return (
    <PageWrapper>
      <Button onClick={resetName}>Name löschen</Button>
      <Button onClick={deleteAllData}>Daten löschen</Button>
    </PageWrapper>
  )

  function resetName() {
    window.localStorage.removeItem('userName')
  }

  function deleteAllData() {
    window.localStorage.clear()
  }
}

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1rem;
  align-items: center;
  margin-top: 50px;

  button {
    width: 150px;
  }
`
