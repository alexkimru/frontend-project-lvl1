import readlineSync from 'readline-sync';

const getUserName = () => {
    console.log('May I have your name?');
    return readlineSync.question('Your answer: ');
}

const welcomeUser = () => {
    console.log('Welcome to the Brain Games!');
};

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getCorrectAnswer = (number, conditionFunction) => {
    if (conditionFunction(number)) {
        return 'yes';
    }
    return 'no';
};

export const helloUser = () => {
    welcomeUser();
    const name = getUserName();
    console.log(`Hello, ${name}!`);
};

export const isEven = (number) => number % 2 === 0;

export const playEvenGame = (conditionFunction, questionText) => {
    welcomeUser();
    const name = getUserName();
    console.log(`Hello, ${name}!`);
    console.log(questionText);

    const rounds = 3;
    for (let i = 0; i < rounds; i += 1) {
        const randomNumber = generateRandomNumber(1, 100);
        console.log(`Question: ${randomNumber}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = getCorrectAnswer(randomNumber, conditionFunction);

        if (userAnswer.toLowerCase() === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
};
