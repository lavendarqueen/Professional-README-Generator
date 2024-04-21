// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const colors = require("colors");
const fs = require("fs");
const api = require(".utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: colors.brightMagenta("Please enter your name."),
  },
  {
    type: "input",
    name: "LinkedIn Username",
    message: colors.brightMagenta("Please enter yourLinkedIn Username."),
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
    choices: [
      "AFL-3.0",
      "Apache-2.0",
      "Artistic-2.0",
      "BSL-1.0",
      "BSD-2-Clause",
      "BSD-3-Clause",
      "BSD-3-Clause-Clear",
      "BSD-4-Clause",
      "0BSD",
      "CC",
      "CC0-1.0",
      "CC-BY-4.0",
      "CC-BY-SA-4.0",
      "WTFPL",
      "ECL-2.0",
      "EPL-1.0",
      "EPL-2.0",
      "EUPL-1.1",
      "AGPL-3.0",
      "GPL",
      "GPL-2.0",
      "GPL-3.0",
      "LGPL",
      "LGPL-2.1",
      "LGPL-3.0",
      "ISC",
      "LPPL-1.3c",
      "MS-PL",
      "MIT",
      "MPL-2.0",
      "OSL-3.0",
      "PostgreSQL",
      "OFL-1.1",
      "NCSA",
      "Unlicense",
    ],
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
    name: "projectDescription",
    message: colors.brightMagenta(
      "Please enter a brief description of your project."
    ),
  },
  {
    type: "input",
    name: "url",
    message: colors.brightMagenta(
      "Please enter the link to your gitHub repository."
    ),
  },
  {
    type: "input",
    name: "screenshot",
    message: colors.brightMagenta("Please enter the link to your screenshot."),
  },
  {
    type: "input",
    name: "email",
    message: colors.brightMagenta("Please enter your email address."),
  },
  {
    type: "input",
    name: "dependencies",
    message: colors.brightMagenta(
      "Please enter npm i to install dependencies."
    ),
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
    name: "contributionGuidelines",
    message: colors.brightMagenta(
      "Please describe contributing guidelines for your project."
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
