const Employee = require("../source/lib/Employee");

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
    const actual = mockEmployee.getName();
    //assert
    expect(actual).toBe(expected);
  });

  //test for id
  test("Should return employee id for id input", () => {
    const expected = 123;
    const actual = mockEmployee.getId();
    expect(actual).toBe(expected);
  });

  //test for email
  test("Should return email for email input ", () => {
    const expected = "james@here";
    const actual = mockEmployee.getEmail();
    expect(actual).toBe(expected);
  });

  //test for role
  test("Should return employee for get role function", () => {
    const expected = "employee";
    const actual = mockEmployee.getRole();
    expect(actual).toBe(expected);
  });
});
