// you're also going to import your classes, i.e., Manager, Engineer Intern
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

// do the same for engineer and intern

// in this file you're going to have a (some?) functions
function generateManagerHtmlCard(manager) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/9f86b37536.js" crossorigin="anonymous"></script>
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
        
            <div class="card text-center text-bg-danger mb-3">
                <div class="card-header">
                <h1>My Team</h1>
            </div>
            </div>
        </header>
    <div class="card text-bg-primary mb-3" style="width: 18rem">
        <div class="card-header">
        <i class="fas fa-mug-hot" aria-hidden="true">Manager ${manager.getName()}</i>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID ${manager.getId()}</li>
            <li class="list-group-item">Email ${manager.getEmail()}</li>
            <li class="list-group-item">Office Number ${manager.getOfficeNumber()} </li>
        </ul></div>
    `;
}

function generateRestOfTeamCards({ restOfTeam }) {
  let masterString = "";

  restOfTeam.forEach((employee) => {
    if (employee.userSelection === "I want to add an engineer") {
      const myEngineer = new Engineer(
        employee.engineerName,
        employee.engineerId,
        employee.engineerEmail,
        employee.engineerGithub
      );
      let engineerString = `
        <div class="card text-bg-primary mb-3" style="width: 18rem">
            <div class="card-header">
            <i class="fa-solid fa-laptop-code" aria-hidden="true">Engineer ${myEngineer.engineerName}</i>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID ${myEngineer.engineerId}</li>
            <li class="list-group-item">Email ${myEngineer.engineerEmail} </li>
            <li class="list-group-item">GitHub ${myEngineer.engineerGithub}</li>
        </ul>
        </div>
            `;
        masterString += engineerString // masterString = masterString + engineerString
    } else   {(employee.userSelection === "I want to add and Intern")
       const myIntern = new Intern (
        employee.internName,
        employee.internID,
        employee.internEmail,
        employee.internSchool
       )

        let internString = `
        <div class="card text-bg-primary mb-3" style="width: 18rem">
        <div class="card-header">
        <i class="fas fa-user-graduate" aria-hidden="true">Intern ${employee.internName} </i>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID ${employee.internID}</li>
            <li class="list-group-item">Email ${employee.internEmail}</li>
            <li class="list-group-item">School ${employee.internSchool}</li>
        </ul>
        </div>

    </body>
    </html>
        `
       
    masterString+= internString
    }
  });

  // return your masterString
  return `
        
    `;
}

// export the functions, you may need to allow for passing an argument into this function
// you will need to!
module.exports = (userAnswersObj) => {
  // here you might want to destructure your manager's info from the answersObj
  const {
    managerName,
    managerId,
    managerEmail,
    managerOfficeNumber,
    ...employeesObject
  } = userAnswersObj;
  const myManager = new Manager(
    managerName,
    managerId,
    managerEmail,
    managerOfficeNumber
  );
  return `
    ${generateManagerHtmlCard(myManager)}
    ${generateRestOfTeamCards(employeesObject)}
  `;

};
