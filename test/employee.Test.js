const { describe, it, expect } = require("@jest/globals");
const Employee = require("./lib/employee");

describe("Employee class", () => {
    const name = "Gilberto";
    const id = "8938502";
    const email = "Tyler.gilbert913@gmail.com";
    const employee = new Employee(name, id, email);


    describe("getName", () => {
        it("Should do something", () => {
             expect(employee.getName()).toEqual(name);
        });
    });

    describe("getId", () => {
        it("Should do something", () => {
            expect(employee.getId()).toEqual(id);
        });
    });

    describe("getEmail", () => {
        it("Should do something", () => {
            expect(employee.getEmail()).toEqual(email);
        });
    });

    describe('getRole', () => {
        it("should return a 'string' containing the employees 'role' provided at initialization", () => {
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});









