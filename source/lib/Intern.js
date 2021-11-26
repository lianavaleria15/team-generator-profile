//import employee class
const Employee = require("./Employee");

//declare intern class
class Intern extends Employee {
  //properties
  constructor({ school, ...employee }) {
    //declare super class employee
    super(employee);
    this.school = school;
  }

  //methods
  getSchool() {
    return this.school;
  }

  getRole() {
    return "intern";
  }

  //generate HTML card
  generateEmployeeCard() {
    return `<div class="card" style="width: 18rem">
      <div class="card-body">
        <div class="bg-secondary title-container">
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
            <p>${this.email}</p>
          </li>
          <li class="list-group-item">
            <i class="fa fa-solid fa-graduation-cap"></i>
            <p>${this.school}</p>
          </li>
        </ul>
      </div>
    </div>`;
  }
}

//export intern superclass
module.exports = Intern;
