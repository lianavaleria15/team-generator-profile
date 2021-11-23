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

//start application
const start = async () => {
  //get team name
  const teamNameAnswer = await inquirer.prompt(teamName);
  console.log(teamNameAnswer);

  //get managers answers
  const managerAnswers = await inquirer.prompt(managerQuestions);
  console.log(managerAnswers);
  const newManager = new Manager(managerAnswers);

  //while loop to get engineer and intern answers, until selected none
  let inProgress = true;

  while (inProgress) {
    const employeeTypeAnswer = await inquirer.prompt(employeeType);
    console.log(employeeTypeAnswer);

    //prompt engineer type question
    if (employeeTypeAnswer.employeeType === "engineer") {
      const engineerAnswers = await inquirer.prompt(engineerQuestions);
      console.log(engineerAnswers);
      //create new instance of engineer object
      const newEngineer = new Engineer(engineerAnswers);
    }

    //prompt intern type question
    if (employeeTypeAnswer.employeeType === "intern") {
      const internAnswers = await inquirer.prompt(internQuestions);
      console.log(internAnswers);
      const newIntern = new Intern(internAnswers);
    }

    //prompt if another employee should be added
    const addEmployee = await inquirer.prompt(addNewEmployee);
    console.log(addEmployee);

    //deconstruct object
    const { addNewEmployee: newEmployee } = addEmployee;
    if (!newEmployee) {
      //break out of the while loop
      inProgress = false;
    }
  }

  //build answers object
  //generate HTML code
  //write to HTML file
};

//run start
start();
