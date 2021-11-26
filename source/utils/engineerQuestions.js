const engineerQuestions = [
  //get name
  {
    type: "input",
    name: "name",
    message: "Enter engineer's name:",
    validate: (name) => {
      return name ? true : "Please enter a valid name";
    },
  },

  //get id
  {
    type: "input",
    name: "id",
    message: "Enter engineer's id:",
    validate: (id) => {
      const reg = /^\d+$/;
      return reg.test(id) || "Please Enter A Valid Number";
    },
  },

  //get email
  {
    type: "input",
    name: "email",
    message: "Enter engineer's email:",
    validate: (email) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email) || "Please Enter A Valid Email Address";
    },
  },

  //get github username
  {
    type: "input",
    name: "github",
    message: "Enter engineer's github username:",
    validate: (github) => {
      return github ? true : "Please enter a valid name";
    },
  },
];

//export engineer questions
module.exports = engineerQuestions;
