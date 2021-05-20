const Employee = require("./employee");
// class for engineer and methods
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return this.role="Engineer";
    }
    getGithub() {
        return this.github;
    }
   
}
// exports engineer file
module.exports = Engineer;
