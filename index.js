// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];
inquirer.prompt ([
    {
    title: 'title',
    message: 'What is the title of your project?',
    type: 'input'
    },

    {
    title: 'description',
    message: 'What is the description of your project?',
    type: 'input'
    },

    {
    title: 'table of contents',
    message: 'What is included in the table of contents of your project?',
    type: 'list',
    choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
    },

    {
    title: 'installation',
    message: 'How to install of your project?',
    //type: 'input' ? just a message
    },

    {
    title: 'usage',
    message: 'How can we use your project?',
    type: 'input'
    },

    {
    title: 'license',
    message: 'What license is used for your project?',
    type: 'list',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },

    {
    title: 'contributing',
    message: 'Who has contributed to your project?',
    type: 'input'
    },

    {
    title: 'tests',
    message: 'How to test your project?',
    type: 'input'
    },

    {
    title: 'questions',
    message: 'What is your GitHub username?',
    type: 'input'
    },

]).then((answers => {
    console.log(answers);

    fs.watchFile('README.md', answers, (err) => {
        if (err) throw err;
        console.log('success');
    })
}));





// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
