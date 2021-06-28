import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import LearningCard from '../components/LearningCard'
import data from '../data.json'

LearningPage.propTypes = {
  userName: PropTypes.string,
}

export default function LearningPage({ userName }) {
  return (
    <PageWrapper>
      <Welcome>
        <h3>Hallo {userName}!</h3>
        <p>
          <strong> Willkommen im Lernbereich von Hpmf! </strong>
          Klicke auf eine Themenkarte, die dich interessiert lies dir die Texte
          aufmerksam durch, um ein echter Emotions-Profi zu werden!
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
  )
}

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1rem;
`

const CardWrapper = styled.section`
  margin: 0 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`

const Welcome = styled.section`
  background-color: #fffcfd;
  background-image: url('https://www.transparenttextures.com/patterns/blizzard.png');
  color: #897869;
  margin: 20px 40px;
  padding: 30px;
  border-radius: 30px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.15);
`
