import randInt from '../my-random.js'

const MIN_RANDOM_NUMBER = 1
const MAX_RANDOM_NUMBER = 20

const GAME_DESCRIPTION = 'What is the result of the expression?'

const createTaskAndRightAnswer = () => {
  const a = randInt(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER)
  const b = randInt(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER)

  const ops = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
  }

  const opKeys = Object.keys(ops)
  const randomIndex = randInt(0, opKeys.length - 1)
  const op = opKeys[randomIndex]

  return {
    question: `Question: ${a} ${op} ${b}`,
    rightAnswer: ops[op](a, b),
  }
}

export { GAME_DESCRIPTION, createTaskAndRightAnswer }
