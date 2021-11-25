const { Engineer, Manager, Intern } = require("../../lib");

//transform data from user input to categorize employees (manager, engineer, intern)
const categorizeEmployees = (employeesAdded) => {
  //reduce employees added array
  const addedEmployees = employeesAdded.reduce(
    (acc, each) => {
      //check if employee is an instance of engineer class
      if (each.getRole() === "engineer") acc.engineer = [...acc.engineer, each];

      if (each.getRole() === "manager") acc.manager = [...acc.manager, each];

      if (each.getRole() === "intern") acc.intern = [...acc.intern, each];

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
          ${generateEmployeeCard(manager)}
          ${generateEmployeeCard(engineer)}
          ${generateEmployeeCard(intern)}
        </div>
      </main>
    </body>
  </html>
  `;
};
//export transformed user input results
module.exports = { categorizeEmployees, generateHtml };
