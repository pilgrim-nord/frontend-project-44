#!/usr/bin/env node

import { greeting } from './../src/cli.js'
import readlineSync from 'readline-sync'

const MIN_RANDOM_NUMBER = 1
const MAX_RANDOM_NUMBER = 100
const ATTEMPTS_COUNT = 3

const isEven = num => num % 2 === 0
let fullCycle = true

const name = greeting()
console.log('Answer "yes" if the number is even, otherwise answer "no".')
for (let attempt = 0; attempt < ATTEMPTS_COUNT; attempt += 1) {
  const randomNumber
    = Math.floor(Math.random() * (MAX_RANDOM_NUMBER - MIN_RANDOM_NUMBER + 1))
      + MIN_RANDOM_NUMBER
  console.log(`Question: ${randomNumber}`)
  const userAnswer = readlineSync.question('Your answer: ')

  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no'
  if (userAnswer.toLowerCase() === rightAnswer) {
    console.log('Correct!')
  }
  else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`,
    )
    console.log('Let\'s try again, ' + name + '!')
    fullCycle = false
    break
  }
}
if (fullCycle) {
  console.log('Congratulations, ' + name + '!')
}
