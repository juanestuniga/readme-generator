const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        name: "username",
        message: "What is your GitHub username?"
    },

    {
        type: 'input',
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: "description",
        message: "Enter a description for your project:"
    },
    {
        type: 'input',
        name: "installation",
        message: "How do you install this project?"
    },
    {
        type: 'input',
        name: "usage",
        message: "Give some instructions/examples of use:"
    },
    {
        type: 'list',
        name: "license",
        choices: ['MIT', 'GPLv2', 'Apache', 'Other']
    },
    {
        type: 'input',
        name: "contributing",
        message: "Who contributed to this project?"
    },
    {
        type: 'input',
        name: "tests",
        message: "Enter info about tests for this project:"
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}

const writeFileAsync = util.promisify(writeToFile);

async function init() {
    try {

        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your responses! Fetching your GitHub data next...");
    
        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);
    
        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);
    
        await writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

init();