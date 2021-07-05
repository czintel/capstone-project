import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import data from '../data.json'
import Header from '../components/Header'
import LearningCard from '../components/LearningCard'

LearningPage.propTypes = {
  userName: PropTypes.string,
}

export default function LearningPage({ userName }) {
  return (
    <>
      <PageWrapper>
        <Header />
        <Welcome>
          <h3>Hallo {userName}!</h3>
          <p>
            <strong> Willkommen im Lernbereich von Hpmf! </strong>
            Klicke auf eine Themenkarte, die dich interessiert und lies dir die
            Texte aufmerksam durch, um ein echter Emotions-Profi zu werden!
          </p>
        </Welcome>
        <CardWrapper>
          {data.emotions.map(({ name, description, tags, color, id }) => (
            <LearningCard
              key={id}
              name={name}
              description={description}
              tags={tags}
              color={color}
            />
          ))}
        </CardWrapper>
      </PageWrapper>
    </>
  )
}

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1rem;
`

const CardWrapper = styled.section`
  display: flex;
  gap: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 20px;
  justify-content: center;
`

const Welcome = styled.section`
  padding: 30px;
  margin: 20px 40px;
  border-radius: 30px;
  color: var(--text-1);
  background-color: var(--background-white);
  background-image: url('https://www.transparenttextures.com/patterns/blizzard.png');
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.15);
`
