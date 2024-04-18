// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What does your project installation require?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your project used?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license is for this project?',
        choices: ['ISC', 'MIT', 'GNU', 'Apache', 'Mozilla'],
        default: 'ISC'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How does someone contribute to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are some project tests?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Do any credits or acknowledgments need to be made?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What GitHub profile link is the creator and maintainer?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'If someone has questions, what email can they use to reach you?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

console.log('----------README Generator----------')
// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile('README.md', answers); // Use user feedback for writing new file function
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log('Error with current environment'); // Prompt couldn't be rendered in the current environment
        } else {
            console.log(error);
            console.log('Something went wrong.'); // Something else went wrong
        }
    });
}

// Function call to initialize app
init();
