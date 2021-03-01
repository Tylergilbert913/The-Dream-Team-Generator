const { describe, it, expect } = require("@jest/globals");
const Manager = require("./lib/manager");

describe("Manager class", () => {
    const name = "Rebecca";
    const id = "456321";
    const email = "Rebecca.g8342@gmail.com";
    const officeNumber = 123421421423;
    const Manager = new Manager(name, id, email, officeNumber);
    

    describe("getOfficeNumber", () => {
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