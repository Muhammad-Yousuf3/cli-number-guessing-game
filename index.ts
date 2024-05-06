#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.red("\n\t\tWelcome to Yousuf's Number Guessing Game\n"))


let RandomNumber=Math.floor(Math.random() * 6 + 1)
const answer=await inquirer.prompt([
    {name:"Guess the number",type:"number",message:chalk.blue("Guess any number from 1 to 6")}
])
if (RandomNumber===answer.name) {
    console.log(chalk.green("Congrats!You guessed it Right."));
}
else{
    console.log(chalk.yellow("TryAgain!"));
    console.log(chalk.greenBright("You guessed it Wrong!"));
}