const fs = require("fs");
const path = require("path");

// compiling all the html template paths together with the resolve method
const templatesOrder = path.resolve(__dirname, "../templates");
console.log(templatesOrder);

const renderEmployees = (employees) => {
    const html = [];

    html.push(...employees
        .filter(employee => employee.getRole() === "manager")
        .map(manager => managerRenderer(manager)).join("")
    );
    html.push(...employees
        .filter(employee => employee.getRole() === "engineer")
        .map(manager => engineerRenderer(manager)).join("")
    );
    html.push(...employees
        .filter(employee => employee.getRole() === "intern")
        .map(manager => internRenderer(manager)).join("")
    );
   return renderHtml(html.join(""));

};

const managerRenderer = (manager) => {
    let temp = fs.readFileSync(path.resolve(templatesOrder, "manager.html"), "utf8");
    temp = placeholder(temp, "name", manager.getName());
    temp = placeholder(temp, "id", manager.getId());
    temp = placeholder(temp, "email", manager.getEmail());
    temp = placeholder(temp, "role", manager.getRole());
    temp = placeholder(temp, "officeNumber", manager.getOfficeNumber());
    return temp;
}

const engineerRenderer = (engineer) => {
    let temp = fs.readFileSync(path.resolve(templatesOrder, "engineer.html"), "utf8");
    temp = placeholder(temp, "name", engineer.getName());
    temp = placeholder(temp, "id", engineer.getId());
    temp = placeholder(temp, "email", engineer.getEmail());
    temp = placeholder(temp, "role", engineer.getRole());
    temp = placeholder(temp, "officeNumber", engineer.getOfficeNumber());
    return temp;
}

const internRenderer = (intern) => {
    let temp = fs.readFileSync(path.resolve(templatesOrder, "intern.html"), "utf8");
    temp = placeholder(temp, "name", intern.getName());
    temp = placeholder(temp, "id", intern.getId());
    temp = placeholder(temp, "email", intern.getEmail());
    temp = placeholder(temp, "role", intern.getRole());
    temp = placeholder(temp, "officeNumber", intern.getOfficeNumber());
    return temp;
}

const renderHtml = (html) => {
    let temp = fs.readFileSync(path.resolve(templatesOrder, "employee.html"), "utf8");
    return placeholder(temp, "team", html);
};

// we are using parenthesis because in the arrow function we're passing more than one parameters 
const placeholder = (temp, placeholder, value) => {
    const structure = new RegExp("{{" + placeholder + "}}", "gm");
    return temp.replace(structure, value);
};





module.exports = renderEmployees;