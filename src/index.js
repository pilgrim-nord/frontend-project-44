import readlineSync from 'readline-sync'

const ATTEMPTS_COUNT = 3

const playGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(description)

  for (let i = 0; i < ATTEMPTS_COUNT; i++) {
    const { question, rightAnswer } = generateRound()

    console.log(question)
    const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase()
    const correct = String(rightAnswer).toLowerCase()

    if (userAnswer !== correct) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. `
        + `Correct answer was '${correct}'.`,
      )
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}

export default playGame
