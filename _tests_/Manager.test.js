//import manager class
const Manager = require("../source/lib/Manager");

//describe test suit
describe("Get manager", () => {
  //add mock data
  const mockManager = new Manager({
    name: "Chris",
    id: 12365,
    email: "chris@email",
    role: "manager",
    officeNumber: 4349543521,
  });

  //verify mock data is an instance of engineer class
  test("should be an instance of engineer", () => {
    expect(mockManager).toBeInstanceOf(Manager);
  });

  //verify name input
  test("Should return Chris for Chris", () => {
    const expected = "Chris";
    const actual = mockManager.getName();
    expect(actual).toBe(expected);
  });
  //verify id input
  test("Should return 12365 for 12365", () => {
    const expected = 12365;
    const actual = mockManager.getId();
    expect(actual).toBe(expected);
  });
  //verify email input
  test("Should return chris@email for chris@email", () => {
    const expected = "chris@email";
    const actual = mockManager.getEmail();
    expect(actual).toBe(expected);
  });
  //verify role input
  test("Should return manager for manager", () => {
    const expected = "manager";
    const actual = mockManager.getRole();
    expect(actual).toBe(expected);
  });
  //verify office phone input
  test("Should return 4349543521 for 4349543521", () => {
    const expected = 4349543521;
    const actual = mockManager.getNumber();
    expect(actual).toBe(expected);
  });
});
