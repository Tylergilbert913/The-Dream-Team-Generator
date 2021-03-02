const { describe, it, expect } = require("@jest/globals");
const Intern = require("../lib/intern");
// intern variables
describe("Intern class", () => {
    const name = "Reese";
    const id = "999999";
    const email = "Rwithherspoons123@aim.com";
    const school = "UGA";
    const intern = new Intern(name, id, email, school);
// describes what should be returned when the getSchool method is invoked
    describe('getSchool', () => {
        it("Should return the intern's school as a string", () => {
            expect(intern.getSchool()).toEqual(school);
        });
    });
// describes what should be returned when the getRole method is invoked
    describe('getRole', () => {
        it("Should return the intern's role", () => {
            expect(intern.getRole()).toEqual("Intern");
        });
    });

});