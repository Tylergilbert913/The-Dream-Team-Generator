const fs = require("fs")
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile); 


const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");



async function init() {

    let teamProfileTemplate = "";

    
    let employeeName;
    let id;
    let email;
    let officeNum;
    let github;
    let school;

    
    await inquirer.prompt([
        {
            type: "list",
            message: "Welcome to Team Profile Generator! Select the 'Manager' role to continue.",
            name: 'role',
            choices: ['Manager']
        },
        {
            type: 'input',
            message: "Please enter the team manager's full name.",
            name: 'employeeName',
            validate: (answer) => {
                valid = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(answer)
                if (!valid) {
                    return console.log(" *Name input cannot contain any numbers or symbols. Try again.*")
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'Please enter the team manager\'s id number.',
            name: 'id',
            validate: (answer) => {
                valid = /^[0-9]+$/.test(answer)
                if (!valid) {
                    return console.log(" *Input must be a number. Try again.*")
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'Please enter the team manager\'s email address.',
            name: 'email',
            default: () => { },
            validate: function (email) {
                valid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)

                if (valid) {
                    return true;
                } else {
                    return console.log(" *Not a valid email address format. Try again.*");
                }
            }
        },
        {
            type: 'input',
            message: "Please enter the team manager\'s office number.",
            name: 'officeNum',
            validate: (answer) => {
                if (isNaN(answer)) {
                    return console.log(" *Input must be a number. Try again.*");
                }
                return true;
            }
        }
    ]).then((response) => {

       
        employeeName = response.employeeName;
        id = response.id;
        email = response.email;
        role = response.role;
        officeNum = response.officeNum;

        
        const manager = new Manager(employeeName, id, email, officeNum);

        
        employeeTemplate = fs.readFileSync("./templates/manager.html");

        
        teamProfileTemplate += "\n" + eval("`" + employeeTemplate + "`");
        console.log("Manager profile successfully created.")

        
        return menuPrompt();
    }).catch(err => console.log(err));

    
    async function menuPrompt() {
        await inquirer.prompt([
            {
                type: 'list',
                message: 'Would you like to add an additional employee to your team profile?',
                name: 'role',
                choices: ["Engineer", "Intern", "Finished Building Team"]
            }
        ]).then((menuAnswer) => {

            if (menuAnswer.role === "Engineer") {
                console.log("Creating Engineer Profile...")
                
                return addEngineerPrompt();
            } else if (menuAnswer.role === "Intern") {
                console.log("Creating Intern Profile...")
                
                return addInternPrompt();
            } else {
                return;
            }

        }).catch(err => console.error(err));
    }

    
    async function addEngineerPrompt() {
        await inquirer.prompt([
            {
                type: 'input',
                message: "What is the name of the employee you'd like to place in the team portal?",
                name: 'employeeName',
                validate: (answer) => {
                    valid = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(answer)
                    if (!valid) {
                        return console.log(" *Name input cannot contain any numbers or symbols. Try again.*")
                    }
                    return true;
                }
            },
            {
                type: 'input',
                message: 'What is your employee\'s id number?',
                name: 'id',
                validate: (answer) => {
                    valid = /^[0-9]+$/.test(answer)
                    if (!valid) {
                        return console.log(" *Input must be a number. Try again.*")
                    }
                    return true;
                }
            },
            {
                type: 'input',
                message: 'What is your employee\'s email address?',
                name: 'email',
                default: () => { },
                validate: function (email) {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                    if (valid) {
                        return true;
                    } else {
                        console.log("Please enter a valid email address.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'What is your engineer\'s GitHub username?',
                name: 'github'
            }
        ]).then((response) => { 
            employeeName = response.employeeName;
            id = response.id;
            email = response.email;
            role = response.role;
            github = response.github;

            
            let engineer = new Engineer(employeeName, id, email, github);

            
            employeeTemplate = fs.readFileSync("./templates/engineer.html");

            teamProfileTemplate += "\n" + eval("`" + employeeTemplate + "`")
            console.log("Engineer profile successfully created.")

            return menuPrompt();
        })
    }

    async function addInternPrompt() {
        await inquirer.prompt([
            {
                type: 'input',
                message: "What is the name of the employee you'd like to place in the team portal?",
                name: 'employeeName',
                validate: (answer) => {
                    valid = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(answer)
                    if (!valid) {
                        return console.log(" *Name input cannot contain any numbers or symbols. Try again.*")
                    }
                    return true;
                }
            },
            {
                type: 'input',
                message: 'What is your employee\'s id number?',
                name: 'id',
                validate: (answer) => {
                    valid = /^[0-9]+$/.test(answer)
                    if (!valid) {
                        return console.log(" *Input must be a number. Try again.*")
                    }
                    return true;
                }
            },
            {
                type: 'input',
                message: 'What is your employee\'s email address?',
                name: 'email',
                default: () => { },
                validate: function (email) {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                    if (valid) {
                        return true;
                    } else {
                        console.log("Please enter a valid email address.");
                        return false;
                    }
                },

            },
            {
                type: 'input',
                message: 'What school does your intern attend?',
                name: 'school'
            }
            
        ]).then((response) => {

            employeeName = response.employeeName;
            id = response.id;
            email = response.email;
            role = response.role;
            school = response.school;

            
            let intern = new Intern(employeeName, id, email, school);

            
            employeeTemplate = fs.readFileSync("./src/intern.html");

            teamProfileTemplate += eval("`" + employeeTemplate + "`")
            console.log("Intern profile successfully created.")

            
            return menuPrompt();
        }).catch(err => console.error(err));
    }

   
    const generateFinalPage = fs.readFileSync("./templates/generate.html");

    
    teamProfileTemplate = eval("`" + generateFinalPage + "`");

    
    writeFileAsync("./html/index.html", teamProfileTemplate);
    console.log("Team profile page successfully created!")
}

init();