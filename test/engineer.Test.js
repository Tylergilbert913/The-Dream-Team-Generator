const { describe, it, expect } = require("@jest/globals");
const Engineer = require("../lib/engineer");

describe("Engineer class", () => {
    const name = "Jamie";
    const id = "12345";
    const email = "Jamie.g678@yahoo.com";
    const github = "GuilloryJamie";
    const engineer = new Engineer(name, id, email, github);
    
    describe("getGithub", () => {
        it("Should do something", () => {
            expect(engineer.getGithub()).toEqual(github);
        });
    });

    describe("getRole", () => {
        it("Should do something", () => {
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});