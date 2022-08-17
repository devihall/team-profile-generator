const Intern = require("../lib/Intern");
const intern = new Intern("devi", "12345", "d.hall@gmail.com", "Univ of M");

test("getting constructor values for intern object", () => {
  expect(intern.name).toBe("devi");
  expect(intern.id).toBe("12345");
  expect(intern.email).toBe("d.hall@gmail.com");
  expect(intern.school).toBe("Univ of M");
});

test("test to get the name of intern with getName() method", () => {
  expect(intern.getName()).toBe("devi");
});

test("test to get the i.d of intern with getId() method", () => {
  expect(intern.getId()).toBe("12345");
});

test("test to get the email of intern with getEmail() method", () => {
  expect(intern.getEmail()).toBe("d.hall@gmail.com");
});

test("test to get the school of intern with getSchool() method", () => {
  expect(intern.getSchool()).toBe("Univ of M");
});

test("test to get the role of intern with getRole() method", () => {
  expect(intern.getRole()).toBe("Intern");
});
