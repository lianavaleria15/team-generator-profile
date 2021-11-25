//ask team name
const teamName = [
  {
    type: "input",
    name: "teamName",
    message: "Enter your team's name:",
    validate: (teamName) => {
      return teamName ? true : "Please enter a valid name";
    },
  },
];

//ask which employee is added next
const employeeType = [
  {
    type: "list",
    name: "employeeType",
    message: "Which type of employee do you want to add next?",
    choices: [
      //engineer
      { name: "engineer", value: "engineer" },
      //intern
      { name: "intern", value: "intern" },
    ],
  },
];

//ask question to confirm adding a new employee
const addNewEmployee = [
  {
    type: "confirm",
    name: "addNewEmployee",
    message: "Do you want to add a new employee?",
  },
];
//export questions
module.exports = { teamName, employeeType, addNewEmployee };
