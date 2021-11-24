const engineerQuestions = [
  //get name
  { type: "input", name: "name", message: "Enter engineer's name:" },
  //get id
  { type: "input", name: "id", message: "Enter engineer's id:" },
  //get email
  { type: "input", name: "email", message: "Enter engineer's email:" },
  //get github username
  {
    type: "input",
    name: "github",
    message: "Enter engineer's github username:",
  },
];

//export engineer questions
module.exports = engineerQuestions;
