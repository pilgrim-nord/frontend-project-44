const MIN_RANDOM_NUMBER = 1
const MAX_RANDOM_NUMBER = 100

const GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.'

const createTaskAndRightAnswer = () => {
  const randomNumber1
    = Math.floor(Math.random() * (MAX_RANDOM_NUMBER - MIN_RANDOM_NUMBER + 1))
      + MIN_RANDOM_NUMBER
  const randomNumber2
    = Math.floor(Math.random() * (MAX_RANDOM_NUMBER - MIN_RANDOM_NUMBER + 1))
      + MIN_RANDOM_NUMBER
  const calculateGCD = (x, y) => {
    if (y === 0) return x
    return calculateGCD(y, x % y)
  }

  return {
    question: `Question: ${randomNumber1} ${randomNumber2}`,
    rightAnswer: calculateGCD(randomNumber1, randomNumber2).toString(),
  }
}

export { GAME_DESCRIPTION, createTaskAndRightAnswer }
