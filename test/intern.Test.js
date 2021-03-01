const { describe, it, expect } = require("@jest/globals");
const Intern = require("../lib/intern");

describe("Intern class", () => {
    const name = "Reese";
    const id = "999999";
    const email = "Rwithherspoons123@aim.com";
    const school = "UGA";
    const intern = new Intern(name, id, email, school);

    describe("getSchool", () => {
        it("Should do something", () => {
            expect(intern.getSchool()).toEqual(school);
        });
    });

    describe("getRole", () => {
        it("Should do something", () => {
            expect(intern.getOfficeNumber()).toEqual("Intern");
        });
    });

});