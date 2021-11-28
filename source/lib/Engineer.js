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
    return `<div class="card" style="width: 18rem">
      <div class="card-body">
        <div class="bg-info title-container">
          <h5 class="card-title text-center pt-1 text-white">${this.name}</h5>
          <h6 class="card-subtitle text-center pb-1 text-white p-2">${this.getRole()}</h6>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <i class="far fa-id-badge"></i>
            <p>${this.id}</p>
          </li>
          <li class="list-group-item">
            <i class="far fa-solid fa-envelope"></i>
            <a href="mailto:${this.email}">${this.email}</a>
          </li>
          <li class="list-group-item">
            <i class="fa fa-brands fa-github"></i>
            <a href="#">${this.github}</a>
          </li>
        </ul>
      </div>
    </div>`;
  }
}

//export engineer class
module.exports = Engineer;
