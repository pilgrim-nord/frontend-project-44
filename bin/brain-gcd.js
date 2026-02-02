#!/usr/bin/env node

import playGame from '../src/index.js'
import { GAME_DESCRIPTION, createTaskAndRightAnswer } from '../src/games/gcd.js'

playGame(GAME_DESCRIPTION, createTaskAndRightAnswer)
