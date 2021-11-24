class Employee {
  //properties
  constructor({ name, id, email, role }) {
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
}

//export Employee class
module.exports = Employee;
