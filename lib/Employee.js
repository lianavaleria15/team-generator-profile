class Employee {
  //properties
  constructor({ name, id, email }) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  //methods
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

const employee = new Employee("John", 45, "l@fd");
console.log(employee);
//export Employee class
module.exports = Employee;
