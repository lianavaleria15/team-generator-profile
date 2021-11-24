const { Engineer, Manager, Intern } = require("../../lib");

//transform data from user input to categorize employees (manager, engineer, intern)
const categorizeEmployees = (employeesAdded) => {
  //reduce employees added array
  employeesAdded.reduce((acc, each) => {
    //check if employee is an instance of engineer class
    if (each instanceof Engineer) {
      console.log("is engineer");
    }

    if (each instanceof Manager) {
      console.log("is manager");
    }

    if (each instanceof Intern) {
      console.log("is intern");
    }
  }, {});

  return {
    manager: [],
    engineer: [],
    intern: [],
  };
};

//export transformed user input results
module.exports = { categorizeEmployees };
