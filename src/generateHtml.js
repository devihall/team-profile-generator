// you're also going to import your classes, i.e., Manager, Engineer Intern
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

// do the same for engineer and intern

// in this file you're going to have a (some?) functions
function generateManagerHtmlCard(manager) {
    return `
    ${manager.getName(), manager.getId(), manager.getEmail(), manager.getOfficeNumber()}
    
    `
}

function generateEngineerHtmlCard(engineer) {
  return `
    ${
      (engineer.getName(), engineer.getId(), engineer.getEmail(), engineer.getGithubLink())
    }
    
    `
}


function generateInternHtmlCard(intern) {
    return `
    ${intern.getName(), intern.getId(), intern.getEmail(), intern.getSchool()}
    
    `
}

// export the functions, you may need to allow for passing an argument into this function
// you will need to!
module.exports = (userAnswersObj) => {
    // here you might want to destructure your manager's info from the answersObj
    const { managerName, managerId, managerEmail, managerOfficeNumber
    } = userAnswersObj;
    const myManager = new Manager( managerName, managerId, managerEmail, managerOfficeNumber
    );

    const { engineerName, engineerId, engineerEmail, engineerGithub } =
      userAnswersObj;
    const myEngineer = new Engineer( engineerName, engineerId, engineerEmail, engineerGithub
    );

    const {internName, internID, internEmail, internSchool 
    } =  userAnswersObj;
    const myIntern = new Intern( internName, internID, internEmail, internSchool
    );

    return `
    your raw HTML goes here, which is returned. Here is where you interpolate, or insert
    managerName, managerId. Also, engineerName, internName
    generateManagerHtmlCard(myManager)

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
        <i class="fas fa-mug-hot" aria-hidden="true">Manager ${managerName}</i>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID ${managerId}</li>
            <li class="list-group-item">Email ${managerEmail}</li>
            <li class="list-group-item">Office Number ${managerOfficeNumber} </li>
        </ul></div>
        

        <div class="card text-bg-primary mb-3" style="width: 18rem">
        <div class="card-header">
        <i class="fa-solid fa-laptop-code" aria-hidden="true">Engineer ${engineerName}</i>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID ${engineerId}</li>
            <li class="list-group-item">Email ${engineerEmail} </li>
            <li class="list-group-item">GitHub ${engineerGithub}</li>
        </ul>
        </div>

        <div class="card text-bg-primary mb-3" style="width: 18rem">
        <div class="card-header">
        <i class="fas fa-user-graduate" aria-hidden="true">Intern ${internName} </i>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID ${internID}</li>
            <li class="list-group-item">Email ${internEmail}</li>
            <li class="list-group-item">School ${internSchool}</li>
        </ul>
        </div>

    </body>
    </html>


    `;
}