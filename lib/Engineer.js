const Employee = require("./Employee");

//declare engineer class
class Engineer extends Employee {
  //github username
  constructor(github) {
    this.github = github;
  }

  //gets github link
  getGithub() {
    console.log(`https://github.com/${this.github}`);
  }

  getRole() {
    return "Engineer";
  }
}
