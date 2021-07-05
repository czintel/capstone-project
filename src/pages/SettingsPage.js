import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'
import Button from '../components/Button'
import Header from '../components/Header'

export default function SettingsPage() {
  const history = useHistory()
  return (
    <PageWrapper>
      <Header />
      <ButtonResetName onClick={resetName}>Name ändern</ButtonResetName>
      <ButtonDeleteAllData onClick={deleteAllData}>
        Daten löschen
      </ButtonDeleteAllData>
    </PageWrapper>
  )

  function resetName() {
    window.localStorage.removeItem('userName')
    history.push('/')
  }

  function deleteAllData() {
    window.localStorage.clear()
    history.push('/')
  }
}

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
  font-size: 1rem;
  align-items: center;

  button {
    width: 150px;
  }
`

const ButtonResetName = styled(Button)`
  background-color: var(--gray);
`
const ButtonDeleteAllData = styled(Button)`
  background-color: var(--red);
`
