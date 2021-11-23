//import inquirer
const inquirer = require("inquirer");

//import classes
const Employee = require("../lib/Employee");

const Manager = require("../lib/Manager");

const Engineer = require("../lib/Engineer");

const Intern = require("../lib/Intern");

//import team name and employee type questions
const {
  teamName,
  startQuestions,
  employeeType,
} = require("../source/utils/employeeTypeQuestion");

//import manager questions
const managerQuestions = require("./utils/managerQuestions");

//import engineer questions
const engineerQuestions = require("./utils/engineerQuestions");
//start application
const start = async () => {
  //get team name
  const teamNameAnswer = await inquirer.prompt(teamName);
  console.log(teamNameAnswer);

  //get managers answers
  const managerAnswers = await inquirer.prompt(managerQuestions);
  console.log(managerAnswers);

  //while loop to get engineer and intern answers, until selected none
  const employeeTypeAnswer = await inquirer.prompt(employeeType);
  console.log(employeeTypeAnswer);
  //import employee type question
  if (employeeTypeAnswer.employeeType === "engineer") {
    const engineerAnswers = await inquirer.prompt(engineerQuestions);
    console.log(engineerAnswers);
  }
  //build answers object
  //generate HTML code
  //write to HTML file
};

//run start
start();
