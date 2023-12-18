// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateReadMe = ({ title, description, tableOfContents, installation, usage, license, contribution, tests, questions }) =>

    `# Title: \n ${title}
# Description: \n ${description}
# Table of Contents: \n${tableOfContents}
# Installation: \n${installation}
# Usage: \n${usage}
# License:\n ${license}
# Contributions:\n ${contribution}
# Tests:\n ${tests}
# Questions:\n${questions}
`

// my array of questions to be passed into the readme file

inquirer
    .prompt([
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


    ])

    .then((response) => {

        const answers = generateReadMe(response);


        fs.writeFile('README.md', answers, (err) =>
            err ? console.error(err) : console.log("Success!"));


    });




    







// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();


