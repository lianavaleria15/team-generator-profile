//import employee class
const Employee = require("./Employee");

//declare manager class, by extending employee class
class Manager extends Employee {
  //properties
  constructor({ officeNumber, ...employee }) {
    super(employee);
    this.officeNumber = officeNumber;
  }

  //methods
  getNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "manager";
  }

  //generate HTML card
  generateEmployeeCard() {
    return ``;
  }
}

//export manager superclass
module.exports = Manager;
