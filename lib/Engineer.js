const Employee = require("./Employee");

//declare engineer class
class Engineer extends Employee {
  //github username
  constructor({ github, ...employee }) {
    super(employee);
    this.github = github;
  }

  //gets github link
  getGithub() {
    return this.github;
  }

  getRole() {
    return "engineer";
  }
}

//export engineer class
module.exports = Engineer;
