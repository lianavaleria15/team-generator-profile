const managerQuestions = [
  //get name
  { type: "input", name: "name", message: "Enter manager's name:" },

  //get id
  { type: "input", name: "id", message: "Enter manager's id:" },

  //get email
  { type: "input", name: "email", message: "Enter manager's email:" },

  //get office number
  {
    type: "input",
    name: "officeNumber",
    message: "Enter manager's office number:",
  },
];

//export manager questions
module.exports = managerQuestions;
