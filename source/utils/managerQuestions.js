const managerQuestions = [
  //get name
  {
    type: "input",
    name: "name",
    message: "Enter manager's name:",
    validate: (name) => {
      return name ? true : "Please enter a valid name";
    },
  },

  //get id
  {
    type: "input",
    name: "id",
    message: "Enter manager's id:",
    validate: (id) => {
      const reg = /^\d+$/;
      return reg.test(id) || "Please Enter A Valid Number";
    },
  },

  //get email
  {
    type: "input",
    name: "email",
    message: "Enter manager's email:",
    validate: (email) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email) || "Please Enter A Valid Email Address";
    },
  },

  //get office number
  {
    type: "input",
    name: "officeNumber",
    message: "Enter manager's office number:",
    validate: (officeNumber) => {
      const reg = /^\d+$/;
      return reg.test(officeNumber) || "Please Enter A Valid Number";
    },
  },
];

//export manager questions
module.exports = managerQuestions;
