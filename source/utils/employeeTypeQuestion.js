//ask team name
const teamName = [
  { type: "input", name: "team name", message: "Enter your team's name:" },
];

//ask which employee is added next
const employeeType = [
  {
    type: "list",
    name: "employee type",
    message: "Which type of employee do you want to add next?",
    choices: [
      //engineer
      { name: "engineer", value: "engineer" },
      //intern
      { name: "intern", value: "intern" },
    ],
  },
];
