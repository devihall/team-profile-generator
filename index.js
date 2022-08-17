// import the required modules
const inquirer = require('inquirer');
const fs = require('fs');

// import the function which generates the HTML
const generateMyHtml = require("./src/generateHtml");

// 1. Create questions for prompting user about manager, engineer, and intern
// 2. Pass those answers (which are inside answers object) into then method, which is going
// going to run our template function.
// 3. We'll have the template function return the raw HTML, so that we can then save it to a file

// write your questions array here
const questions = [
  {
    type: "input",
    name: "managerName",
    message: "What is the manager's name?",
    validate: (enteredName) => {
      if (!enteredName) {
        console.log("Please enter a name");
        return false;
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "managerId",
    message: "What is the manager's id?",
    validate: (enteredId) => {
      if (!enteredId) {
        console.log("Please enter a id");
        return false;
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "managerEmail;",
    message: "What is the manager's email?",
    validate: (enteredEmail) => {
      if (!enteredEmail) {
        console.log("Please enter an email");
        return false;
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "managerOfficeNumber",
    message: "What is the manager's office number?",
    validate: (enteredOfficeNumber) => {
      if (!enteredOfficeNumber) {
        console.log("Please enter an email");
        return false;
      } else {
        return true;
      }
    },
  },
];

const employeeQuestions = [
  {
    type: "list",
    name: "userSelection",
    message: "What would you like to do next?",
    choices: [
      "I want to add an engineer",
      "I want to add an intern",
      "I am finished building my team",
    ],
    default: "I am finished building my team",
  },
  {
    type: "input",
    name: "engineerName",
    message: "What is the name of the engineer?",
    validate: (enteredName) => {
      if (!enteredName) {
        console.log("Please enter a name");
        return false;
      } else {
        return true;
      }
    },
    when: ({ userSelection }) => {
      if (userSelection === "I want to add an engineer") {
        return true;
      } else {
        false;
      }
    },
  },
  {
    type: "input",
    name: "engineerId",
    message: "What is the engineer's ID?",
    validate: (enteredId) => {
      if (!enteredId) {
        console.log("Please enter an ID");
        return false;
      } else {
        return true;
      }
    },
    when: ({ userSelection }) => {
      if (userSelection === "I want to add an engineer") {
        return true;
      } else {
        false;
      }
    },
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is the engineer's Email?",
    validate: (enteredEmail) => {
      if (!enteredEmail) {
        console.log("Please enter an Email");
        return false;
      } else {
        return true;
      }
    },
    when: ({ userSelection }) => {
      if (userSelection === "I want to add an engineer") {
        return true;
      } else {
        false;
      }
    },
  },
  {
    type: "input",
    name: "engineerGithub",
    message: "What is the engineer's GitHub username?",
    validate: (enteredGithub) => {
      if (!enteredGithub) {
        console.log("Please enter a GitHub username");
        return false;
      } else {
        return true;
      }
    },
    when: ({ userSelection }) => {
      if (userSelection === "I want to add an engineer") {
        return true;
      } else {
        false;
      }
    },
  },
  {
    type: "input",
    name: "internName",
    message: "What is the name of the intern?",
    validate: (enteredName) => {
      if (!enteredName) {
        console.log("Please enter a name");
        return false;
      } else {
        return true;
      }
    },
    when: ({ userSelection }) => {
      if (userSelection === "I want to add an intern") {
        return true;
      } else {
        false;
      }
    },
  },
  {
    type: "input",
    name: "internID",
    message: "What is the intern's ID?",
    validate: (enteredId) => {
      if (!enteredId) {
        console.log("Please enter an ID");
        return false;
      } else {
        return true;
      }
    },
    when: ({ userSelection }) => {
      if (userSelection === "I want to add an intern") {
        return true;
      } else {
        false;
      }
    },
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is the intern's Email?",
    validate: (enteredEmail) => {
      if (!enteredEmail) {
        console.log("Please enter an Email");
        return false;
      } else {
        return true;
      }
    },
    when: ({ userSelection }) => {
      if (userSelection === "I want to add an intern") {
        return true;
      } else {
        false;
      }
    },
  },
  {
    type: "input",
    name: "internSchool",
    message: "What is the intern's School?",
    validate: (enteredSchool) => {
      if (!enteredSchool) {
        console.log("Please enter a School");
        return false;
      } else {
        return true;
      }
    },
    when: ({ userSelection }) => {
      if (userSelection === "I want to add an intern") {
        return true;
      } else {
        false;
      }
    },
  },
];

function beginPrompts() {
    return inquirer.prompt(questions);
}

function promptForMoreTeamMembers(team){
  // inside this function, we're going to check if the team parameter has a property
  // called restOfTeam or employees
  if(!team.restOfTeam) {
    team.restOfTeam = [];
  }
  console.log(
    `
    ==================
    Add a new team member
    ==================
  `)
  // pass the inquirer the employee questions array
  return inquirer
  .prompt(employeeQuestions)
  .then( (newTeamMember) => {
    if(newTeamMember.userSelection === 'I am finished building my team') {
      return generateMyHtml(team);
    }
    team.restOfTeam.push[newTeamMember];
    return promptForMoreTeamMembers(team);
  })
  ;

}

beginPrompts()
.then(promptForMoreTeamMembers)
.then((generatedHtml) => {
    // let's pass our HTML data into the writeFile method of fs
    fs.writeFile("./dist/index.html", generatedHtml, err => {
        if(err) throw err;
        console.log('The file has been successfully written to.');
    })
})