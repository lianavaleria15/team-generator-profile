//import employee class
const Employee = require("./Employee");

//declare manager class, by extending employee class
class Manager extends Employee {
  //properties
  constructor(officeNumber) {
    this.officeNumber = officeNumber;
  }

  //methods
  getRole() {
    return "Manager";
  }
}
