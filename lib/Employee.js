class Employee {
  //properties
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  //methods
  getName() {
    console.log(`Name:${this.name}`);
  }

  getId() {
    console.log(`Id:${this.id}`);
  }

  getEmail() {
    console.log(`Email:${this.email}`);
  }

  getRole() {
    return "Employee";
  }
}

//export Employee class
module.exports = Employee;
