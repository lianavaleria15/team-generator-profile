//import inquirer
const inquirer = require("inquirer");

//import classes
const { Engineer, Intern, Manager } = require("../lib");

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
const { categorizeEmployees } = require("./utils/utils");

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
      employeesAdded.push(newEngineer);
    }

    //prompt intern type question
    if (employeeTypeAnswer.employeeType === "intern") {
      const { name, id, email, school } = await inquirer.prompt(
        internQuestions
      );

      const newIntern = new Intern({ name, id, email, school });
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

  //call function to categorize employees
  const categorizedEmployees = categorizeEmployees(employeesAdded);
  console.log(categorizedEmployees);
  //build answers object
  //generate HTML code
  //write to HTML file
};

//run start
start();
