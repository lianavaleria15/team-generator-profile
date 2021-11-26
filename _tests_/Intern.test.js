//import intern superclass
const Intern = require("../source/lib/Intern");

//describe tests
describe("Get intern values", () => {
  //add mock data
  const mockIntern = new Intern({
    name: "Bob",
    id: 78563,
    email: "bob@email",
    role: "intern",
    school: "Yale",
  });

  //verify mock data is an instance of engineer class
  test("should be an instance of engineer", () => {
    expect(mockIntern).toBeInstanceOf(Intern);
  });

  //test to verify name input
  test("Should return Bob for Bob input", () => {
    const expected = "Bob";
    const actual = mockIntern.getName();
    expect(actual).toBe(expected);
  });

  //test to verify id input
  test("Should return 78563 for 78563 input", () => {
    const expected = 78563;
    const actual = mockIntern.getId();
    expect(actual).toBe(expected);
  });

  //test to verify email input
  test("Should return bob@email for bob@email input", () => {
    const expected = "bob@email";
    const actual = mockIntern.getEmail();
    expect(actual).toBe(expected);
  });

  //test to verify role input
  test("Should return intern for intern input", () => {
    const expected = "intern";
    const actual = mockIntern.getRole();
    expect(actual).toBe(expected);
  });

  //test to verify school input
  test("Should return Yale for Yale input", () => {
    const expected = "Yale";
    const actual = mockIntern.getSchool();
    expect(actual).toBe(expected);
  });
});
