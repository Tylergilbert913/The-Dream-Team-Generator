const { describe, it, expect } = require("@jest/globals");
const intern = require("./lib/intern");

describe("Intern class", () => {
    const name = "Kylo";
    const id = "456789";
    const email = "kylo@test.com";
    const school = "GA Tech";
    const intern = new Intern(name, id, email, school);

    describe("getSchool", () => {
        it("Should do something", () => {
            expect(manager.getOfficeNumber()).toEqual(officeNumber);
        });
    });

    describe("getRole", () => {
        it("Should do something", () => {
            expect(manager.getOfficeNumber()).toEqual(officeNumber);
        });
    });

});