const { describe, it, expect } = require("@jest/globals");
const Engineer = require("../lib/engineer");
// variables for engineer class
describe("Engineer class", () => {
    const name = "Jamie";
    const id = "12345";
    const email = "Jamie.g678@yahoo.com";
    const github = "GuilloryJamie";
    const engineer = new Engineer(name, id, email, github);
    // describes what should return when the getGithub method is invoked
    describe('getGithub', () => {
        it("Should returnthe engineers github username as a string", () => {
            expect(engineer.getGithub()).toEqual(github);
        });
    });
    // describes what should return when the getRole method is invoked
    describe('getRole', () => {
        it("Should return engineer as a string ", () => {
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});