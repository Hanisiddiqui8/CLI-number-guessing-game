#! /usr/bin/env node 
import inquirer from "inquirer";

console.log("\n\Welcome to CodeWithHani - CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random()* 5 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guessed number(Number Limit from 1 to 5):",
    },
]);

if (answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! You guessed the right number.");
}
else{
    console.log("Sorry, you guessed the wrong number.");
}
