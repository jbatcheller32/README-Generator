// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'Title',
        message: 'What is the name of your project?'
    },

    {
        type: 'input',
        name: 'Descirption',
        message: 'Please give a brief description of your project.'
    },

    {
        type: "input",
        name: 'Table of Contents',
        message: 'Add table of contents information here.'

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
        type: "checkbox",
        name: 'License',
        message: 'Yes / No',
        choices: ['Yes', 'No']

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


];
inquirer.prompt(questions)
    .then((data) =>
        console.log(data));



// TODO: Create a function to write README file
// function writeToFile() {

// const createFile = 'README.md';

// fs.writeFile(createFile, (err) =>
// err ? console.error(err) : console.log('Success!'));

// fs.writeFile('README.md', questions, (err) =>
// err ? console.error(err) : console.log("Success!")));




//fileName, data

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();


//const file = `${data.name.split(' ').join(' ')}.json`;