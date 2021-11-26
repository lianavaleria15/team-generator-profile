//import fs
const fs = require("fs");
const { Engineer, Manager, Intern } = require("../lib");

//transform data from user input to categorize employees (manager, engineer, intern)
const categorizeEmployees = (employeesAdded) =>
  //reduce employees added array
  employeesAdded.reduce(
    (acc, each) => {
      console.log(each);
      //check if added employee has a role of (engineer, manager, intern)
      if (each instanceof Engineer) acc.engineer = [...acc.engineer, each];

      if (each instanceof Manager) acc.manager = [...acc.manager, each];

      if (each instanceof Intern) acc.intern = [...acc.intern, each];

      return acc;
    },
    { engineer: [], manager: [], intern: [] }
  );

//generate employee cards
const generateCards = (cards, label) => {
  return `
    <h2 class="text-center">${label}</h2>
    <hr />
    <div class="d-flex flex-row justify-content-center">${cards
      .map((card) => card.generateEmployeeCard())
      .join("")}
    </div>
  `;
};

//declare fs to generate html template string
const generateHtml = ({ engineer, manager, intern, team }) => {
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
            <h1 class="display-6 text-center text-light">${team}</h1>
          </div>
        </div>
      </header>
      <main>
        ${manager.length ? generateCards(manager, "Manager") : ""}
        ${engineer.length ? generateCards(engineer, "Engineers") : ""}
        ${intern.length ? generateCards(intern, "Interns") : ""}
      </main>
    </body>
  </html>
  `;
};

const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync("./dist/index.html", data);
  } catch (error) {
    console.log(error.message);
  }
};

//export transformed user input results
module.exports = { categorizeEmployees, generateHtml, writeToFile };
