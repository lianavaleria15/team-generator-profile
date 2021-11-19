//import employee class
const Employee = require("./Employee");

//declare intern class
class Intern extends Employee {
  //properties
  constructor(school) {
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
