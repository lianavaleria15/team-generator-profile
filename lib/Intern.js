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
    console.log(`School: ${this.school}`);
  }

  getRole() {
    return "Intern";
  }
}

//export intern superclass
module.exports = Intern;
