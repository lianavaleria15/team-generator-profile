//import inquirer
const inquirer = require("inquirer");

//import classes
const { Engineer, Intern, Manager } = require("./lib");

//import team name and employee type questions
const {
  teamName,
  addNewEmployee,
  employeeType,
} = require("../source/utils/employeeTypeQuestion");

//import manager questions
const {
  managerQuestions,
  engineerQuestions,
  internQuestions,
} = require("./utils/index");

//import fs to categorize employees
const {
  categorizeEmployees,
  generateHtml,
  writeToFile,
} = require("./utils/utils");

//start application
const start = async () => {
  //declare array to save all employees added
  const employeesAdded = [];

  //get team name
  const team = await inquirer.prompt(teamName);
  employeesAdded.push(team);

  //get managers answers
  const { name, id, email, officeNumber } = await inquirer.prompt(
    managerQuestions
  );

  const newManager = new Manager({ name, id, email, officeNumber });
  console.log(newManager.getRole());
  employeesAdded.push(newManager);

  //while loop to get engineer and intern answers, until selected none
  let inProgress = true;

  while (inProgress) {
    const employeeTypeAnswer = await inquirer.prompt(employeeType);

    //prompt engineer type question
    if (employeeTypeAnswer.employeeType === "engineer") {
      const { name, id, email, github } = await inquirer.prompt(
        engineerQuestions
      );

      //create new instance of engineer object
      const newEngineer = new Engineer({ name, id, email, github });
      console.log(newEngineer.getRole());
      employeesAdded.push(newEngineer);
    }

    //prompt intern type question
    if (employeeTypeAnswer.employeeType === "intern") {
      const { name, id, email, school } = await inquirer.prompt(
        internQuestions
      );

      const newIntern = new Intern({ name, id, email, school });
      console.log(newIntern.getRole());
      employeesAdded.push(newIntern);
    }

    //prompt if another employee should be added
    const addEmployee = await inquirer.prompt(addNewEmployee);

    //deconstruct object
    const { addNewEmployee: newEmployee } = addEmployee;
    if (!newEmployee) {
      //break out of the while loop
      inProgress = false;
    }
  }
  // console.log(employeesAdded);
  // console.log(employeesAdded);
  //call function to categorize employees
  const categorizedEmployees = categorizeEmployees(employeesAdded);
  // console.log(categorizedEmployees);

  //generate HTML code
  console.log(categorizedEmployees);
  const html = generateHtml(categorizedEmployees);
  console.log(html);

  //write to HTML file
  writeToFile("../dist/index.html", html);
};

//run start
start();
