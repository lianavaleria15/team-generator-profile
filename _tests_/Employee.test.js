const Employee = require("../lib/Employee");

describe("Get employee", () => {
  //add mock class data
  const mockEmployee = new Employee({
    name: "James",
    id: 123,
    email: "james@here",
  });
  test("Should return name for name input", () => {
    //declare expected
    const expected = "James";
    //get actual
    const actual = mockEmployee.name;
    //assert
    expect(actual).toBe(expected);
  });

  test("Should return employee id for id input", () => {});

  test("Should return email for email input ", () => {});

  test("Should return employee for get role function", () => {});
});
