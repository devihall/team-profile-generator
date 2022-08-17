const Engineer = require("../lib/Engineer");

const engineer = new Engineer("devi", "123456", "d.hall@gmail.com", "github/io");

test("test for constructor values for engineer object", () => {
  expect(engineer.name).toBe("devi");
  expect(engineer.id).toBe("123456");
  expect(engineer.email).toBe("d.hall@gmail.com");
  expect(engineer.github).toBe("github/io");
});

test("test for name from getName()method", () => {
  expect(engineer.getName()).toBe("devi");
});

test("test for ID from getId()method", () => {
  expect(engineer.getId()).toBe("123456");
});

test("test for email from getEmail()method", () => {
  expect(engineer.getEmail()).toBe("d.hall@gmail.com");
});

test("test for number from getGithubLink()method", () => {
  expect(engineer.getGithubLink()).toBe("github/io");
});

test("test for role from getRole()method", () => {
  expect(engineer.getRole()).toBe("Engineer");
});
