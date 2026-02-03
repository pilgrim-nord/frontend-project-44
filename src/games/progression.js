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
  const startNumber = Math.floor(Math.random() * (MAX_START_PROGRESSION - MIN_START_PROGRESSION + 1)) + MIN_START_PROGRESSION
  const step = Math.floor(Math.random() * (MAX_STEP_PROGRESSION - MIN_STEP_PROGRESSION + 1)) + MIN_STEP_PROGRESSION
  const length = Math.floor(Math.random() * (MAX_PROGRESSION_LENGTH - MIN_PROGRESSION_LENGTH + 1)) + MIN_PROGRESSION_LENGTH
  const answerPosition = Math.floor(Math.random() * length)
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
