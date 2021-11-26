//import engineer class
const Engineer = require("../source/lib/Engineer");
describe("Get engineer", () => {
  //add mock data
  const mockEngineer = new Engineer({
    name: "James",
    id: 33456,
    email: "james@email",
    role: "engineer",
    github: "james23",
  });

  //verify name input
  test("Should return James for James input", () => {
    //expected value
    const expected = "James";
    const actual = mockEngineer.getName();
    expect(actual).toBe(expected);
  });

  //verify id input
  test("Should return 33456 for 33456 input", () => {
    //expected value
    const expected = 33456;
    const actual = mockEngineer.getId();
    expect(actual).toBe(expected);
  });
  //verify email input
  test("Should return james@email for james@email input ", () => {
    //expected value
    const expected = "james@email";
    const actual = mockEngineer.getEmail();
    expect(actual).toBe(expected);
  });
  //verify github username input
  test("Should return james23 for james23", () => {
    //expected value
    const expected = "james23";
    const actual = mockEngineer.getGithub();
    expect(actual).toBe(expected);
  });
  //verify role
  test("Should return engineer", () => {
    //expected value
    const expected = "engineer";
    const actual = mockEngineer.getRole();
    expect(actual).toBe(expected);
  });
});
