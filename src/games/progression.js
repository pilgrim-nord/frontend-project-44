import randInt from '../my-random.js'

const MIN_START_PROGRESSION = 1
const MAX_START_PROGRESSION = 15

const MIN_STEP_PROGRESSION = 2
const MAX_STEP_PROGRESSION = 9

const MIN_PROGRESSION_LENGTH = 5
const MAX_PROGRESSION_LENGTH = 12

const GAME_DESCRIPTION = 'What number is missing in the progression?'

const makeProgression = (start, step, length) => {
  const progressionArray = []
  for (let i = 0; i < length; i++) {
    const currentElement = start + i * step
    progressionArray.push(currentElement.toString())
  }
  return progressionArray
}

const createTaskAndRightAnswer = () => {
  const startNumber = randInt(MIN_START_PROGRESSION, MAX_START_PROGRESSION)
  const step = randInt(MIN_STEP_PROGRESSION, MAX_STEP_PROGRESSION)
  const length = randInt(MIN_PROGRESSION_LENGTH, MAX_PROGRESSION_LENGTH)
  const answerPosition = randInt(0, length - 1)
  const draftProgression = makeProgression(startNumber, step, length)
  const rightAnswer = draftProgression[answerPosition]
  draftProgression[answerPosition] = '..'
  const progression = draftProgression.join(' ')

  return {
    question: `Question: ${progression}`,
    rightAnswer: rightAnswer,
  }
}
export { GAME_DESCRIPTION, createTaskAndRightAnswer }
