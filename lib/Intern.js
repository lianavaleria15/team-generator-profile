//import employee class
const Employee = require("./Employee");

//declare intern class
class Intern extends Employee {
  //properties
  constructor({ school, ...employee }) {
    //declare super class employee
    super(employee);
    this.school = school;
  }

  //methods
  getSchool() {
    return this.school;
  }

  getRole() {
    return "intern";
  }

  //generate HTML card
  generateEmployeeCard() {
    return ``;
  }
}

//export intern superclass
module.exports = Intern;
