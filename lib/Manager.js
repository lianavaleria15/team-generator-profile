//import employee class
const Employee = require("./Employee");

//declare manager class, by extending employee class
class Manager extends Employee {
  //properties
  constructor(name, id, email, officeNumber) {
    name = name;
    id = id;
    email = email;
    this.officeNumber = officeNumber;
  }

  //methods
  getRole() {
    return "Manager";
  }
}
