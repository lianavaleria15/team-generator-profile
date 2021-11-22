const Employee = require("../lib/Employee");

describe("Get employee", () => {
  //add mock class data
  const mockEmployee = new Employee({
    name: "James",
    id: 123,
    email: "james@here",
    role: "employee",
  });

  //test for name input
  test("Should return name for name input", () => {
    //declare expected
    const expected = "James";
    //get actual
    const actual = mockEmployee.name;
    //assert
    expect(actual).toBe(expected);
  });

  //test for id
  test("Should return employee id for id input", () => {
    const expected = 123;
    const actual = mockEmployee.id;
    expect(actual).toBe(expected);
  });

  //test for email
  test("Should return email for email input ", () => {
    const expected = "james@here";
    const actual = mockEmployee.email;
    expect(actual).toBe(expected);
  });

  //test for role
  test("Should return employee for get role function", () => {
    const expected = "employee";
    const actual = mockEmployee.role;
    expect(actual).toBe(expected);
  });
});
