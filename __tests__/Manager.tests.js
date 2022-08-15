const Manager = require('../lib/Manager')

const manager = new Manager('devi', '123456', 'd.hall@gmail.com','305');

test('test for constructor values for manger object', ()=>{
    expect(manager.name).toBe('devi');
    expect(manager.id).toBe('123456');
    expect(manager.email).toBe('d.hall@gmail.com');
    expect(manager.officeNumber).toBe('305');
});