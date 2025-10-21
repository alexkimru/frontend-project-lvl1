#!/usr/bin/env node

import { isEven, playEvenGame } from '../src/cli.js';

playEvenGame(isEven, 'Answer "yes" if the number is even, otherwise answer "no".');
