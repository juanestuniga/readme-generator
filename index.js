const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const api = require("./utils/api");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        name: "title",
        message: "What is the title of your project?"
    },
    {
        name: "description",
        message: "Enter a description for your project:"
    },
    {
        name: "install",
        message: "How on Earth do you install this project?"
    },
    {
        name: "usage",
        message: "Give some instructions/examples of use:"
    },
    {
        name: "license",
        message: "What is it licensed under?"
    },
    {
        name: "contributing",
        message: "Who were the folks who contributed to this project?"
    },
    {
        name: "testing",
        message: "Enter info about tests for this project:"
    },
];



function writeToFile(fileName, data) {
    const readMe = generateMarkdown(data);
    return writeFileAsync(fileName, readMe)
}

function init() {
    inquirer.prompt(questions)
        .then((data) => {
            api.getUser(data.username).then(function (gitRes) {
                let newData = Object.assign(data, gitRes);
                console.log(newData);
                writeToFile("README.md", newData)
            });
        });
};
init();