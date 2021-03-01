const { describe, it, expect } = require("@jest/globals");
const Engineer = require("./lib/engineer");

describe("Engineer class", () => {
    const name = "Darth";
    const id = "987654";
    const email = "darth@test.com";
    const github = "darthvader";
    const Engineer = new Engineer(name, id, email, github);
    
    describe("getGithub", () => {
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