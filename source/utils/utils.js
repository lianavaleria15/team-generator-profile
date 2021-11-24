const { Engineer, Manager, Intern } = require("../../lib");

//transform data from user input to categorize employees (manager, engineer, intern)
const categorizeEmployees = (employeesAdded) => {
  //reduce employees added array
  const addedEmployees = employeesAdded.reduce(
    (acc, each) => {
      //check if employee is an instance of engineer class
      if (each instanceof Engineer) {
        acc.engineer = [...acc.engineer, each];
      }

      if (each instanceof Manager) {
        acc.manager = [...acc.manager, each];
      }

      if (each instanceof Intern) {
        acc.intern = [...acc.intern, each];
      }
      return acc;
    },
    { engineer: [], manager: [], intern: [] }
  );
  return addedEmployees;
};

//declare fs to generate html template string
const generateHtml = (employeesAdded) => {
  return ``;
};
//export transformed user input results
module.exports = { categorizeEmployees };
