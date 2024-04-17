//Import the 'inquirer' from the module:
import inquirer from "inquirer";

//Declare a constant 'answers' and assign it to the result of inquirer.prompt function

const answer:{
    Sentence: string
} = await inquirer.prompt([
    {
        name : "Sentence",
        type : "input",
        message : "Enter your sentence to count the word: "

    }

])

const words = answer.Sentence.trim().split(" ")

const myname = "Faqeha Noor";

//Print array of words
console.log(words);

//Print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);