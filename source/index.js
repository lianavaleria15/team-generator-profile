//import inquirer
const inquirer = require("inquirer");

//import classes
const Employee = require("../lib/Employee");

const Manager = require("../lib/Manager");

const Engineer = require("../lib/Engineer");

const Intern = require("../lib/Intern");

//import manager questions
const managerQuestions = require("./utils/managerQuestions");

//start application
const start = async () => {
  //get team name
  //get managers answers
  const managerAnswers = await inquirer.prompt(managerQuestions);
  console.log(managerAnswers);
  //while loop to get engineer and intern answers, until selected none
  //build answers object
  //generate HTML code
  //write to HTML file
};

//run start
start();
