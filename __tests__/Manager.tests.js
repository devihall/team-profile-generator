const Manager = require('../lib/Manager')

const manager = new Manager('devi', '123456', 'd.hall@gmail.com','305');

test('test for constructor values for manger object', ()=>{
    expect(manager.name).toBe('devi');
    expect(manager.id).toBe('123456');
    expect(manager.email).toBe('d.hall@gmail.com');
    expect(manager.officeNumber).toBe('305');
});

test('test for name from getName()method', () =>{
    expect(manager.getName()).toBe('devi');
})

test("test for ID from getId()method", () => {
  expect(manager.getId()).toBe("123456");
});

test("test for email from getEmail()method", () => {
  expect(manager.getEmail()).toBe("d.hall@gmail.com");
});

test("test for number from getOfficeNumber()method", () => {
  expect(manager.getOfficeNumber()).toBe("305");
});

test("test for role from getRole()method", () => {
  expect(manager.getRole()).toBe("Manager");
});
