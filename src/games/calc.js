const MIN_RANDOM_NUMBER = 1
const MAX_RANDOM_NUMBER = 20

const GAME_DESCRIPTION = 'What is the result of the expression?'

const createTaskAndRightAnswer = () => {
  const a = Math.floor(Math.random() * (MAX_RANDOM_NUMBER - MIN_RANDOM_NUMBER + 1)) + MIN_RANDOM_NUMBER
  const b = Math.floor(Math.random() * (MAX_RANDOM_NUMBER - MIN_RANDOM_NUMBER + 1)) + MIN_RANDOM_NUMBER

  const ops = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
  }

  const op = Object.keys(ops)[Math.floor(Math.random() * 3)]

  return {
    question: `Question: ${a} ${op} ${b}`,
    rightAnswer: ops[op](a, b),
  }
}

export { GAME_DESCRIPTION, createTaskAndRightAnswer }
