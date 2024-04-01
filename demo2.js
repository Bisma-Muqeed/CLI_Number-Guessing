#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a Number Between 1 to 6 : ",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congtratulations! You Guessed The Correct Number");
}
else {
    console.log("You Guessed The Wrong Number");
    console.log(`Correct Guessed Number Is ${randomNumber}`);
}
