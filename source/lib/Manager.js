//import employee class
const Employee = require("./Employee");

//declare manager class, by extending employee class
class Manager extends Employee {
  //properties
  constructor({ officeNumber, ...employee }) {
    super(employee);
    this.officeNumber = officeNumber;
  }

  //methods
  getNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "manager";
  }

  //generate HTML card
  generateEmployeeCard() {
    return `<div class="card" style="width: 18rem">
      <!-- <img class="card-img-top" src="..." alt="Card image cap" /> -->
      <div class="card-body">
        <div class="bg-danger title-container">
          <h5 class="card-title text-center pt-1 text-white">${this.name}</h5>
          <h6 class="card-subtitle text-center pb-1 text-white p-2">${this.getRole()}</h6>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <i class="far fa-id-badge"> </i>
            <p>${this.id}</p>
          </li>
          <li class="list-group-item">
            <i class="far fa-solid fa-envelope"></i>
            <p>${this.email}</p>
          </li>
          <li class="list-group-item">
            <i class="fas fa-phone"></i>
            <p>${this.officeNumber}</p>
          </li>
        </ul>
      </div>
    </div>`;
  }
}

//export manager superclass
module.exports = Manager;
