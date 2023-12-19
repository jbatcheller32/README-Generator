// all required packages below

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');



// Array of questions to be passed into the README file

const questions = [

    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your Github email?'
    },

    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?'
    },

    {
        type: "checkbox",
        name: 'License',
        message: 'What license do you want to use?',
        choices: ['MIT', 'Apache', 'Boost']

    },

    {
        type: 'input',
        name: 'Description',
        message: 'Please give a brief description of your project.'
    },

    {
        type: "input",
        name: 'Installation',
        message: 'Add installation steps here.'

    },

    {
        type: "input",
        name: 'Usage',
        message: 'Add usage steps here.'

    },


    {
        type: "input",
        name: 'Contribution',
        message: 'What are some steps for contribution?',

    },

    {
        type: "input",
        name: 'Tests',
        message: 'How can this app be tested?',

    },

    {
        type: "input",
        name: 'Questions',
        message: 'Any questions?',

    },


]

// Function that will take the answers and add them to the README file

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Generating your README.md..')
    })
};

// function that will initialize the README app

function init() {

    //this part should initialize the questions above 

    inquirer.prompt(questions)
    .then((response) => {
        writeToFile('README.md', generateMarkdown(response));
    })

};

init();
















