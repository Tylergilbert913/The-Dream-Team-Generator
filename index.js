const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

function initialPrompt() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your employee ID?',
            name: 'ID',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'officeNumber',
        },

    ])
    
    .then(function (managerPrompt) {
        console.log(managerPrompt)
        return newEmployee();
    })

        .catch(function (err) {
            console.log(err);
        });

    };

    
    initialPrompt();


function newEmployee() {
    return inquirer.prompt([
        {
            type: "list",
            message: "Pick your team:",
            name: "pickedmember",
            choice: ["engineer", "intern", "manager", "finish team"]
        }
    ]).then(response => {
        console.log(response.pickedmember);
        if (pickedmember == "engineer") {
            return promptEngineer();
        }
        else if (response.pickedmember == "intern") {
            return promptIntern();
        }
        else if (response.pickedmember == "manager") {
            return promptManager();
        }
        else if (response.pickedmember == "finish team") {
            return writeToFile("./dist/index.html");
        }
    })


}

// fs.writeFile(
//     `./dist/index.html`,

//     `
//             <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
//         integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
//     <link rel="stylesheet" href="style.css">
//     <title>Document</title>
// </head>

// <body>
//     <style>
//         .row {
//     display: flex;
//     justify-content: center;
//     justify-content: space-evenly;
//     margin: 100px;
// }
// .card-header {
//     background-color: rgb(78, 128, 194);
// }
//     </style>
//     <div class="row">
//         <div class="card text-dark bg-light mb-3" style="max-width: 18rem;" text-align="center">
//             <div class="card-header"></div>
//             <div class="card-header"></div>
//             <div class="card-body">
//                 <p class="card-text"></p>
//                 <p class="card-text"></p>
//                 <p class="card-text"></p>

//             </div>
//         </div>
//         <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
//             <div class="card-header"></div>
//             <div class="card-header"></div>
//             <div class="card-body">
//                 <p class="card-text"></p>
//                 <p class="card-text"></p>
//                 <p class="card-text"></p>
//             </div>
//         </div>
//         <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
//             <div class="card-header"></div>
//             <div class="card-header"></div>
//             <div class="card-body">
//                 <p class="card-text"></p>
//                 <p class="card-text"></p>
//                 <p class="card-text"></p>
//             </div>
//         </div>
//     </div>

//     <div class="row">
//         <div class="card text-dark bg-light mb-3" style="max-width: 18rem;" text-align="center">
//             <div class="card-header"></div>
//             <div class="card-header"></div>
//             <div class="card-body">
//                 <p class="card-text"></p>
//                 <p class="card-text"></p>
//                 <p class="card-text"></p>
//             </div>
//         </div>
//         <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
//             <div class="card-header"></div>
//             <div class="card-header"></div>
//             <div class="card-body">
//                 <p class="card-text"></p>
//                 <p class="card-text"></p>
//                 <p class="card-text"></p>


//                 <script src="code.js"></script>
// </body>

// </html>
// `

//     ,
//     (err) => err ? console.log("There was an error!") : console.log("Successfully appended to file!")


// )
//     );
