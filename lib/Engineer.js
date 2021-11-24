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

  //generate HTML card
  generateEmployeeCard() {
    return ``;
  }
}

//export engineer class
module.exports = Engineer;
