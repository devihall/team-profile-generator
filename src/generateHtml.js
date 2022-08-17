// you're also going to import your classes, i.e., Manager, Engineer Intern
const Manager = require("../lib/Manager");
// do the same for engineer and intern

// in this file you're going to have a (some?) functions
function generateManagerHtmlCard(manager) {
    return `
    ${manager.getName()}
    `
}

// export the functions, you may need to allow for passing an argument into this function
// you will need to!
module.exports = (userAnswersObj) => {
    // here you might want to destructure your manager's info from the answersObj
    // const { managerName, managerId } = userAnswersObj;
    // const myManager = new Manager(managerName, managerId, etc)

    return `
    your raw HTML goes here, which is returned. Here is where you interpolate, or insert
    managerName, managerId. Also, engineerName, internName
    generateManagerHtmlCard(myManager)
    `
}