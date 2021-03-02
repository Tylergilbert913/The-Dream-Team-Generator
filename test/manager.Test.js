const { describe, it, expect } = require("@jest/globals");
const Manager = require("../lib/manager");
// manager class variables
describe("Manager class", () => {
    const name = "Rebecca";
    const id = "456321";
    const email = "Rebecca.g8342@gmail.com";
    const officeNumber = 123421421423;
    const manager = new Manager(name, id, email, officeNumber);
    
// ddescribes what should be returned when getOfficeNumber method is invoked
    describe('getOfficeNumber', () => {
        it("Should return manager's office number as a string", () => {
            expect(manager.getOfficeNumber()).toEqual(officeNumber);
        });
    });
// decsribes what should return when getRole method is invoked
    describe('getRole', () => {
        it("Should return manager's role as as string", () => {
            expect(manager.getRole()).toEqual("Manager");
        });
    });
});