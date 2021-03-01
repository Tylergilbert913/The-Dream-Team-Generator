const { describe, it, expect } = require("@jest/globals");
const Employee = require("../lib/employee");

describe("Employee class", () => {
    const name = "Gilberto";
    const id = "8938502";
    const email = "Tyler.gilbert913@gmail.com";
    const employee = new Employee(name, id, email);


    describe('getName', () => {
        it("Should return the employee's name a string", () => {
             expect(employee.getName()).toEqual(name);
        });
    });

    describe('getId', () => {
        it("Should return the employee's ID as a string", () => {
            expect(employee.getId()).toEqual(id);
        });
    });

    describe('getEmail', () => {
        it("Should return the employee's email as a string", () => {
            expect(employee.getEmail()).toEqual(email);
        });
    });

    describe('getRole', () => {
        it("should return a the employee's role as a string", () => {
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});









