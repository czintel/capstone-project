// import PropTypes from 'prop-types'
// import styled from 'styled-components/macro'
// import Button from './Button'
// import { useState } from 'react'

// QuizCard.propTypes = {
//   onClick: PropTypes.func,
//   isAnswered: PropTypes.bool,
//   isCorrect: PropTypes.bool,
//   isActive: PropTypes.bool,
//   title: PropTypes.string,
//   scenario: PropTypes.string,
//   question: PropTypes.string,
//   answers: PropTypes.array,
//   answer: PropTypes.string,
// }

// export default function QuizCard({
//   title,
//   scenario,
//   question,
//   answers,
//   // correctAnswerColor
// }) {
//   const [isActive, setIsActive] = useState(false)
//   const [isAnswered, setIsAnswered] = useState(false)
//   // ist der Index: answers[selectedAnswer] = {answer: "Freude", isCorrect: true}
//   const [selectedAnswer, setSelectedAnswer] = useState(null)
//   const [answeredCorrectly, setAnsweredCorrectly] = useState()

//   function selectAnswer(index) {
//     if (selectedAnswer === index) {
//       setSelectedAnswer(null)
//       setIsActive(false)
//     } else {
//       setSelectedAnswer(index)
//       setIsActive(true)
//     }
//   }

//   function showAnswer() {
//     const list = document.querySelector('ul')

//     if (answers[selectedAnswer].isCorrect) {
//       setAnsweredCorrectly(true)
//       // const item = list.childNodes[selectedAnswer]
//       // const correctButton = item.querySelector('button')
//       // correctButton.style.backgroundColor = 'green'
//     } else {
//       setAnsweredCorrectly(false)
//       // const item = list.childNodes[selectedAnswer]
//       // const wrongButton = item.querySelector('button')
//       // wrongButton.style.backgroundColor = 'red'
//     }
//     //setIsAnswered(true)
//   }

//   return (
//     <>
//       <Card isAnswered={isAnswered}>
//         <h2>{title}</h2>
//         <p>{scenario}</p>
//         <h3>{question}</h3>
//         <ul>
//           {answers.map((answer, index) => (
//             <li key={index}>
//               <ButtonAnswerOption
//                 selectedAnswer={selectedAnswer === index}
//                 isCorrect={answer.isCorrect}
//                 onClick={() => selectAnswer(index)}
//                 answeredCorrectly={answeredCorrectly}
//               >
//                 {answer.answer}
//               </ButtonAnswerOption>
//             </li>
//           ))}
//         </ul>
//         <ButtonSolution onClick={showAnswer} isActive={isActive}>
//           Beantworten
//         </ButtonSolution>
//       </Card>
//     </>
//   )
// }

// const Card = styled.div`
//   display: grid;
//   gap: 30px;
//   max-width: 670px;
//   line-height: 1;
//   background-color: white;
//   padding: 0 0 40px;
//   border-radius: 30px;
//   color: gray;
//   box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
//   text-align: center;

//   h2 {
//     background-color: #565656;
//     color: white;
//     padding: 20px;
//     border-radius: 30px 30px 0 0;
//   }

//   h3 {
//     color: #565656;
//     padding: 0 40px;
//     line-height: 1.4;
//   }

//   p {
//     padding: 0 40px;
//     text-align: left;
//     line-height: 1.4;
//   }

//   ul {
//     display: flex;
//     flex-wrap: wrap;
//     gap: 12px;
//     padding-left: 40px;
//     padding-right: 50px;
//     list-style-type: none;
//     justify-content: center;
//   }
// `

// const ButtonSolution = styled(Button)`
//   justify-self: center;
//   width: fit-content;
//   background-color: #72d3fe;
//   color: white;
//   opacity: ${prop => (prop.isActive ? '100%' : '40%')};
//   height: 40px;
// `
// const ButtonAnswerOption = styled.button`
//   scale: 100%;
//   font-size: 14px;
//   line-height: 1;
//   padding: 5px 10px 5px;
//   border-radius: 15px;
//   border: 2px gray solid;
//   background-color: ${prop => (prop.selectedAnswer ? 'gray' : 'white')};
//   background-color: ${prop => (prop.answeredCorrectly ? 'green' : 'red')};
//   color: ${prop => (prop.selectedAnswer ? 'white' : 'gray')};
// `
