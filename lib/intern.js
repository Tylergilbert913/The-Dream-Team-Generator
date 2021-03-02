const Employee = require("./employee");
// interns class and methods
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}
// exports intern file
module.exports = Intern;
