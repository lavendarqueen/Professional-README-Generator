// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const api = require(".utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
inquirer.prompt([
  {
    type: "input",
    name: "projectTitle",
    message: "Please enter the title of your project.",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a brief description of your web page.",
    licenseName: ["license"],
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter installation instructions.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please describe intended usage information.",
  },
  {
    type: "list",
    name: "license",
    message: "Please explain the type of license that covers your project.",
    chooseLicense: ["mit", "apache", "unilicense"],
  },
  {
    type: "input",
    name: "contributionGuidelines",
    message: "Please describe contributing guidelines for your project.",
  },
  {
    type: "input",
    name: "tests",
    message: "Please describe test instructions.",
  },
  {
    type: "input",
    name: "credits",
    message:
      "Please list all credits, contributions, and collaboration on your project",
  },
  {
    type: "input",
    name: "dependencies",
    message: "Please enter npm i to install dependencies.",
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
]);

// TODO: Create a function to write README file
function writeToFile(README, data) {
  fs.writeFile(README, Data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success! Your README.md file has been generated");
  });
}

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
  try {
    const userResponses = await inquirer.prompt(questions);
    console.log("Your responses: ", userResponses);
    console.log("Thank you for your responses! Fetching your data...");

    const userInfo = await api.getUser(userResponses);
    console.log("Your Github user info: ", userInfo);

    console.log("Generating your README...");
    const markdown = generateMarkdown(userResponses, userInfo);
    console.log(markdown);

    await writeFileAsync("ExampleREADME.md", markdown);
  } catch (error) {
    console.log(error);
  }
}

// Function call to initialize app
init();
