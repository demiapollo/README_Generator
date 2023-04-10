// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
// const questions = [];

function generateREADME({
  description,
  installation,
  usage,
  license,
  contributing,
  tests,
  questions,
}) {
  return `## Table of Contents
[Description](#description:)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)

## Description: 
${description},
## Installation: 
${installation},
## Usage: 
${usage},
## License: 
${license},
## Contributing: 
${contributing},
## Tests: 
${tests},
## Questions: 
${questions},
`;
}

inquirer
  .prompt([
    {
      name: "title",
      message: "What is the title of your project?",
      type: "input",
    },

    {
      name: "description",
      message: "What is the description of your project?",
      type: "input",
    },

    {
      name: "installation",
      message: "How to install of your project?",
      type: "input",
    },

    {
      name: "usage",
      message: "How can we use your project?",
      type: "input",
    },

    {
      name: "license",
      message: "What license is used for your project?",
      type: "list",
      choices: ["MIT", "Apache", "GPL", "BSD", "None"],
    },

    {
      name: "contributing",
      message: "Who has contributed to your project?",
      type: "input",
    },

    {
      name: "tests",
      message: "How to test your project?",
      type: "input",
    },

    {
      name: "questions",
      message: "What is your GitHub username?",
      type: "input",
    },
  ])
  .then((answers) => {
    console.log(answers);

    const generateREADMEContent = generateREADME(answers);

    fs.writeFile("README.md", generateREADMEContent, (err) => {
      if (err) throw err;
      console.log("success");
    });
  });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
