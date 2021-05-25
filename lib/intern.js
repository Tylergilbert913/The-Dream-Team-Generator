const Employee = require("./employee");
// interns class and methods
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole = () => {
        return this.role="Intern";
    }
    getSchool = () => {
        return this.school;
    }
}
// exports intern file
module.exports = Intern;
