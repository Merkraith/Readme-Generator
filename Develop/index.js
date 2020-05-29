const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');



const questions = [
    {
        type: "input",
        name: "githubusername",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "projecttitle",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "projectdescription",
        message: "Give a description of your project",
    },
    {
        type: "input",
        name: "projectinstall",
        message: "Describe how to install the project?",
    },
    {
        type: "input",
        name: "usage",
        message: "what are the instructions for the project?",
    },
    {
        type: "input",
        name: "licenses",
        message: "Are there any licences to list?",
    },
    {
        type: "input",
        name: "contribute",
        message: "Did anyone else contribute to this project?",
    },
    {
        type: "input",
        name: "tests",
        message: "Did you create any?",
    },
];

function writeToFile(fileName, data) {
    var fileName = 'README.md';
    fs.writeFile(fileName, data , "utf-8", function (err) {
        if (err) throw err;
        console.log("Success!")
    });
}

function init() {

    inquirer.prompt(questions)
        .then(function (data) {
        let readme = generateMarkdown(data);
        var fileName = 'README.md';
        return writeToFile(fileName, readme);
    });
}

init();
