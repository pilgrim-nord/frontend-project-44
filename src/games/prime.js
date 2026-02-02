const MIN_RANDOM_NUMBER = 1
const MAX_RANDOM_NUMBER = 100

const GAME_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (num) => {
  if (num < 2) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const createTaskAndRightAnswer = () => {
  const randomNumber
    = Math.floor(Math.random() * (MAX_RANDOM_NUMBER - MIN_RANDOM_NUMBER + 1))
      + MIN_RANDOM_NUMBER
  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no'
  return {
    question: `Question: ${randomNumber}`,
    rightAnswer: rightAnswer,
  }
}

export { GAME_DESCRIPTION, createTaskAndRightAnswer }
