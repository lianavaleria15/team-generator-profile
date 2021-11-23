//import engineer class
const Engineer = require("../lib/Engineer");
describe("Get engineer", () => {
  //add mock data
  const mockEngineer = new Engineer({
    name: "James",
    id: "33456",
    email: "james@email",
    role: "engineer",
    github: "james23",
  });

  //verify name input
  test("Should return James for James input", () => {
    //expected value
    const expected = "";
    const actual = "";
    expect(actual).toBe(expected);
  });

  //verify id input
  test("Should return 33456 for 33456 input", () => {
    //expected value
    const expected = "";
    const actual = "";
    expect(actual).toBe(expected);
  });
  //verify email input
  test("Should return james@email for james@email input ", () => {
    //expected value
    const expected = "";
    const actual = "";
    expect(actual).toBe(expected);
  });
  //verify github username input
  test("Should return james23 for james23", () => {
    //expected value
    const expected = "";
    const actual = "";
    expect(actual).toBe(expected);
  });
  //verify role
  test("Should return engineer", () => {
    //expected value
    const expected = "";
    const actual = "";
    expect(actual).toBe(expected);
  });
});
