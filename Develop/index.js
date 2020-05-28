const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');



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
        name: "tableofcontents",
        message: "List sections for your table of contents",
    },
    {
        type: "input",
        name: "projectinstall",
        message: "Describe how to install the project?",
    },
    {
        type: "input",
        name: "instructions",
        message: "what are the instructions for the project? Include possible screenshots",
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
        name: "contribute",
        message: "Did anyone else contribute to this project?",
    },
];

function writeToFile(fileName, data) {
    var fileName = 'README.md';
    fs.writeFile(fileName, data , "utf-8", function (err) {
        if (err) throw errl;
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
