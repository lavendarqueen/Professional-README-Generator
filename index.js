// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const colors = require("colors");
const fs = require("fs");
const util = require("util");
// const api = require(".utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: colors.brightMagenta("Please enter your name."),
  },
  {
    type: "input",
    name: "LinkedInUsername",
    message: colors.brightMagenta("Please enter your LinkedIn Username."),
  },
  {
    type: "input",
    name: "repoName",
    message: colors.brightMagenta("Please enter your repo name."),
  },
  {
    type: "input",
    name: "gitHubUsername",
    message: colors.brightMagenta("Please enter your gitHub Username."),
  },
  {
    type: "list",
    name: "license",
    choices: ["Apache-2.0", "MIT", "PostgreSQL", "Unlicense"],
  },
  {
    type: "input",
    name: "projectTitle",
    message: colors.brightMagenta("Please enter the title of your project."),
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a brief description of your web page.",
    licenseName: ["license"],
  },
  {
    type: "input",
    name: "url",
    message: colors.brightMagenta(
      "Please enter the link to your gitHub repository."
    ),
  },
  // {
  //   type: "input",
  //   name: "screenshot",
  //   message: colors.brightMagenta("Please enter the link to your screenshot."),
  // },
  {
    type: "input",
    name: "email",
    message: colors.brightMagenta("Please enter your email address."),
  },
  {
    type: "input",
    name: "installation",
    message: colors.brightMagenta("Please enter installation instructions."),
  },
  {
    type: "input",
    name: "usage",
    message: colors.brightMagenta(
      "Please describe intended usage information."
    ),
  },
  {
    type: "input",
    name: "tests",
    message: colors.brightMagenta("Please provide test instructions."),
  },
  {
    type: "input",
    name: "contribution",
    message: colors.brightMagenta(
      "Please describe contribution guidelines for your project."
    ),
  },
  {
    type: "input",
    name: "credits",
    message: colors.brightMagenta(
      "Please list all credits, contributions, and collaboration on your project"
    ),
  },
  {
    type: "checkBox",
    name: "libraries",
    message: colors.brightMagenta("Built using:"),
    choices: ["Next.js", "React.js", "Bootstrap.com", "jQuery.com"],
  },
];

// TODO: Create a function to write README file
function writeToFile(README, data) {
  fs.writeFile(README, data, (err) => {
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

    // const userInfo = await api.getUser(userResponses);
    // console.log("Your Github user info: ", userInfo);

    console.log("Generating your README...");
    const markdown = generateMarkdown(userResponses);
    console.log(markdown);

    await writeFileAsync("ExampleREADME.md", markdown);
  } catch (error) {
    console.log(error);
  }
}

// Function call to initialize app
init();
