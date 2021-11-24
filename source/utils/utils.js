//transform data from user input to categorize employees (manager, engineer, intern)
const categorizeEmployees = (employeesAdded) => {
  return {
    manager: [],
    engineer: [],
    intern: [],
  };
};

//export transformed user input results
module.exports(categorizeEmployees);
