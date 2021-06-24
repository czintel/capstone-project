import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import LearningCard from '../components/LearningCard'
import data from '../data.json'

LearningCardList.propTypes = {
  name: PropTypes.string,
  tags: PropTypes.array,
  color: PropTypes.string,
  key: PropTypes.number,
  description: PropTypes.string,
  nameOfUser: PropTypes.string,
}

export default function LearningCardList(userName) {
  const nameOfUser = localStorage.getItem(userName)

  return (
    <PageWrapper>
      <Welcome>
        <h3>Hallo {nameOfUser}!</h3>
        <p>
          <strong> Willkommen im Lernbereich von Hpmf! </strong>
          Klicke auf eine Themenkarte, die dich interessiert lies dir die Texte
          aufmerksam durch, um ein echter Emotions-Profi zu werden!
        </p>
      </Welcome>
      <CardWrapper>
        {data.emotions.map(({ name, description, tags, color, emId }) => (
          <LearningCard
            key={emId}
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
  padding: 0 20px;
  max-width: 375px;
  margin: 0 auto;
`

const CardWrapper = styled.section`
  margin-top: 20px;
  padding-left: 3px;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: 20px;
`

const Welcome = styled.section`
  background-color: #fffcfd;
  background-image: url('https://www.transparenttextures.com/patterns/blizzard.png');
  color: #897869;
  padding: 30px;
  border-radius: 30px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
`
