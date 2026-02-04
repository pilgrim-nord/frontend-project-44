import randInt from '../my-random.js'

const MAX_RANDOM_NUMBER = 100
const MIN_RANDOM_NUMBER = 1

const GAME_DESCRIPTION
  = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = num => num % 2 === 0

const createTaskAndRightAnswer = () => {
  const randomNumber = randInt(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER)
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no'
  return {
    question: `Question: ${randomNumber}`,
    rightAnswer: rightAnswer,
  }
}

export { GAME_DESCRIPTION, createTaskAndRightAnswer }
