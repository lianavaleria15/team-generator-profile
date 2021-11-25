const { Engineer, Manager, Intern } = require("../../lib");

//transform data from user input to categorize employees (manager, engineer, intern)
const categorizeEmployees = (employeesAdded) => {
  //reduce employees added array
  const addedEmployees = employeesAdded.reduce(
    (acc, each) => {
      //check if employee is an instance of engineer class
      if (each instanceof Engineer) {
        acc.engineer = [...acc.engineer, each];
      }

      if (each instanceof Manager) {
        acc.manager = [...acc.manager, each];
      }

      if (each instanceof Intern) {
        acc.intern = [...acc.intern, each];
      }
      return acc;
    },
    { engineer: [], manager: [], intern: [] }
  );
  return addedEmployees;
};

//declare fs to generate html template string
const generateHtml = ({ engineer, manager, intern }) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./style.css" />
      <script
        src="https://kit.fontawesome.com/cd298401d3.js"
        crossorigin="anonymous"
      ></script>
      <title>Team profile</title>
    </head>
    <body>
      <header>
        <div class="jumbotron jumbotron-fluid bg-info">
          <div class="container">
            <h1 class="display-6 text-center text-light">Team title generator</h1>
          </div>
        </div>
      </header>
      <main>
        <div class="d-flex flex-row justify-content-center">
          <div class="card" style="width: 18rem">
            <!-- <img class="card-img-top" src="..." alt="Card image cap" /> -->
            <div class="card-body">
              <div class="bg-danger title-container">
                <h5 class="card-title text-center text-white">John</h5>
                <h6 class="card-subtitle text-center text-white p-2">Manager</h6>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <i class="far fa-id-badge"> </i>
                  <p>06751</p>
                </li>
                <li class="list-group-item">
                  <i class="far fa-solid fa-envelope"></i>
                  <p>john@gmail.com</p>
                </li>
                <li class="list-group-item">
                  <i class="far fa-solid fa-circle-phone"></i>
                  <p>07685340321</p>
                </li>
              </ul>
            </div>
          </div>
  
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <div class="bg-info title-container">
                <h5 class="card-title text-center text-white">Bob</h5>
                <h6 class="card-subtitle text-center text-white p-2">Engineer</h6>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <i class="far fa-id-badge"></i>
                  <p>5405</p>
                </li>
                <li class="list-group-item">
                  <i class="far fa-solid fa-envelope"></i>
                  <p>bob@fs.com</p>
                </li>
                <li class="list-group-item">
                  <i class="fa fa-brands fa-github"></i>
                  <a href="#">bob05</a>
                </li>
              </ul>
            </div>
          </div>
  
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <div class="bg-info title-container">
                <h5 class="card-title text-center text-white">Bob</h5>
                <h6 class="card-subtitle text-center text-white p-2">Engineer</h6>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <i class="far fa-id-badge"></i>
                  <p>5405</p>
                </li>
                <li class="list-group-item">
                  <i class="far fa-solid fa-envelope"></i>
                  <p>bob@fs.com</p>
                </li>
                <li class="list-group-item">
                  <i class="fa fa-brands fa-github"></i>
                  <a href="#">bob05</a>
                </li>
              </ul>
            </div>
          </div>
  
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <div class="bg-info title-container">
                <h5 class="card-title text-center text-white">Bob</h5>
                <h6 class="card-subtitle text-center text-white p-2">Engineer</h6>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <i class="far fa-id-badge"></i>
                  <p>5405</p>
                </li>
                <li class="list-group-item">
                  <i class="far fa-solid fa-envelope"></i>
                  <p>bob@fs.com</p>
                </li>
                <li class="list-group-item">
                  <i class="fa fa-brands fa-github"></i>
                  <a href="#">bob05</a>
                </li>
              </ul>
            </div>
          </div>
  
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <div class="bg-info title-container">
                <h5 class="card-title text-center text-white">Bob</h5>
                <h6 class="card-subtitle text-center text-white p-2">Intern</h6>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <i class="far fa-id-badge"></i>
                  <p>5405</p>
                </li>
                <li class="list-group-item">
                  <i class="far fa-solid fa-envelope"></i>
                  <p>bob@fs.com</p>
                </li>
                <li class="list-group-item">
                  <i class="fa fa-solid fa-graduation-cap"></i>
                  <p>University of Birmigham</p>
                </li>
              </ul>
            </div>
          </div>
  
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <div class="bg-secondary title-container">
                <h5 class="card-title text-center text-white">Bob</h5>
                <h6 class="card-subtitle text-center text-white p-2">Intern</h6>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <i class="far fa-id-badge"></i>
                  <p>5405</p>
                </li>
                <li class="list-group-item">
                  <i class="far fa-solid fa-envelope"></i>
                  <p>bob@fs.com</p>
                </li>
                <li class="list-group-item">
                  <i class="fa fa-solid fa-graduation-cap"></i>
                  <p>University of Birmigham</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </body>
  </html>
  `;
};
//export transformed user input results
module.exports = { categorizeEmployees };
