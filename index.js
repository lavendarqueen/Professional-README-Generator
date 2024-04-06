// TODO: Include packages needed for this application
const inquirer =  require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
inquirer
.prompt([
{
    type: "input",
    name: "projectTitle",
    message: "Please enter the title of your project.",
},
{
    type: "input",
    name: "description",
    message: "Please enter a brief description of your web page.",
    licenseName: ["license",]
},
{
    type: "input",
    name: "installInstructions",
    message: "Please enter installation instructions.",
},
{
    type: "input",
    name: "usage",
    message: "Please describe intended usage information.",
},
{
    type: "input",
    name: "contributions",
    message: "Please list all credits, contributors, and collaboration on your project",
},
{
    type: "input",
    name: "contributionGuidelines",
    message: "Please describe contribution guidelines for your project."
},
{
    type: "input",
    name: "repo",
    message: "Please describe test instructions."    
},
{
    type: "list",
    name: "license",
    message: "Please explain the type of license that covers your project.",
    chooseLicense: ["mit", "apache","unilicense"], 
},
{   
    type: "input",
    name: "dependencies",
    message: "Please enter npm i to install dependencies."
},
{
    type: "input",
    name: "gitHubUserName",
    message: "Please enter your GitHub Username.",
},
{   
    type: "input",
    name: "email",
    message: "Please enter your email address.",
},
])


// TODO: Create a function to write README file
function writeToFile(README, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
