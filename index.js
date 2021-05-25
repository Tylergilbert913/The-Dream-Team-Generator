const fs = require("fs")
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile); 


const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");



async function init() {

    let teamProfile = "";

    
    let name;
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
            name: 'name'
        },
        {
            type: 'input',
            message: 'Please enter the team manager\'s id number.',
            name: 'id'  
        },
        {
            type: 'input',
            message: 'Please enter the team manager\'s email address.',
            name: 'email'  
        },
        {
            type: 'input',
            message: "Please enter the team manager\'s office number.",
            name: 'officeNum'  
        }
    ]).then((response) => {

       
        name = response.name;
        id = response.id;
        email = response.email;
        role = response.role;
        officeNum = response.officeNum;

        
        const manager = new Manager(name, id, email, officeNum);

        
        employeeTemp = fs.readFileSync("./templates/manager.html");

        
        teamProfile += "\n" + eval("`" + employeeTemp + "`");
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
                name: 'name'    
            },
            {
                type: 'input',
                message: 'What is your employee\'s id number?',
                name: 'id' 
            },
            {
                type: 'input',
                message: 'What is your employee\'s email address?',
                name: 'email'
            },
            {
                type: 'input',
                message: 'What is your engineer\'s GitHub username?',
                name: 'github'
            }
        ]).then((response) => { 
            name = response.name;
            id = response.id;
            email = response.email;
            role = response.role;
            github = response.github;

            
            let engineer = new Engineer(name, id, email, github);

            
            employeeTemp = fs.readFileSync("./templates/engineer.html");

            teamProfile += "\n" + eval("`" + employeeTemp + "`")
            console.log("Engineer profile successfully created.")

            return menuPrompt();
        })
    }

    async function addInternPrompt() {
        await inquirer.prompt([
            {
                type: 'input',
                message: "What is the name of the employee you'd like to place in the team portal?",
                name: 'name' 
            },
            {
                type: 'input',
                message: 'What is your employee\'s id number?',
                name: 'id'
            },
            {
                type: 'input',
                message: 'What is your employee\'s email address?',
                name: 'email'
            },
            {
                type: 'input',
                message: 'What school does your intern attend?',
                name: 'school'
            }
            
        ]).then((response) => {

            name = response.name;
            id = response.id;
            email = response.email;
            role = response.role;
            school = response.school;

            
            let intern = new Intern(name, id, email, school);

            
            employeeTemp = fs.readFileSync("./templates/intern.html");

            teamProfile += eval("`" + employeeTemp + "`")
            console.log("Intern profile successfully created.")

            
            return menuPrompt();
        }).catch(err => console.error(err));
    }

   
    const generateFinalPage = fs.readFileSync("./templates/generate.html");

    
    teamProfile = eval("`" + generateFinalPage + "`");

    
    writeFileAsync("./html/index.html", teamProfile);
    console.log("Team profile page successfully created!")
}

init();