const Employee = require("./employee");
// manager class and methods for test
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return this.role="Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}
// exports manager file
module.exports = Manager;