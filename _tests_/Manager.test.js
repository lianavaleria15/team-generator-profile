//import manager class
const Manager = require("../lib/Manager");

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
  //add unit tests
  //verify name input
  test("Should return Chris for Chris", () => {
    const expected = "Chris";
    const actual = mockManager.name;
    expect(actual).toBe(expected);
  });
  //verify id input
  test("Should return 12365 for 12365", () => {
    const expected = 12365;
    const actual = mockManager.id;
    expect(actual).toBe(expected);
  });
  //verify email input
  test("Should return chris@email for chris@email", () => {
    const expected = "chris@email";
    const actual = mockManager.email;
    expect(actual).toBe(expected);
  });
  //verify role input
  test("Should return manager for manager", () => {
    const expected = "manager";
    const actual = mockManager.role;
    expect(actual).toBe(expected);
  });
  //verify office phone input
  test("Should return 4349543521 for 4349543521", () => {
    const expected = 4349543521;
    const actual = mockManager.officeNumber;
    expect(actual).toBe(expected);
  });
});
