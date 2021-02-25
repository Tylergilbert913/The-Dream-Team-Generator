const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
    {
        type: 'input',
        message: "The employees email:",
        name: 'email',
    },
    {
        type: 'input',
        message: "The employees github username link",
        name: 'github',
    },
    {
        type: 'input',
        message: "Team manager's name",
        name: 'installation',
    },
    {
        type: 'input',
        message: "Usage information:",
        name: 'usage',
    },
    {
        type: 'input',
        message: "Contribution guidelines:",
        name: 'contributing',
    },
    {
        type: 'input',
        message: "Test insructions:",
        name: 'test',
    },
    {
        type: 'list',
        message: "License:",
        name: 'license',
        choices: [
            "MIT",
            "Apache",
            "GPL",
            "None"
        ]
    },
    // {
    //     type: 'input',
    //     message: "Github username:",
    //     name: 'github',
    // },
    // {
    //     type: 'input',
    //     message: "Email me at:",
    //     name: 'email'
    // },
];

// TODO: Create a function to write README file
function writeToFile(fileName, response) { 
fs.writeFile(fileName, response, err => err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() { 
inquirer
    .prompt(questions)
    .then((response) => {
        const contents = generateHtmlPage(response);
        writeToFile("./dist/index.html", contents);
    });
}

// Function call to initialize app
init();
