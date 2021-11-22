class Employee {
  //properties
  constructor({ name, id, email, role }) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
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
    return this.role;
  }
}

//export Employee class
module.exports = Employee;
