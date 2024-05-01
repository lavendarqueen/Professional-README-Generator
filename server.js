// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const colors = require("colors");
const fs = require("fs");
// const api = require(".utils/api.js");
// const generateMarkdown = require("./utils/generateMarkdown.js");
const generateReadMe = require("./tutor.js");
const questions = [
  {
    type: "input",
    name: "name",
    message: colors.brightMagenta("Please enter your name."),
  },
  {
    type: "list",
    name: "license",
    choices: ["AFL-3.0", "Apache-2.0", "Unlicense"],
  },
];

// inquirer.prompt(questions)
// .then(function (answer) {
//     console.log(answer.name);
// })
// .catch(function (err) {
//     console.log(err);

// })

async function generateHtml() {
  try {
    const answer = await inquirer.prompt(questions);
    fs.writeFile("README.md", generateReadMe(answer), function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("successful");
      }
    });
  } catch (error) {
    console.log(error);
  }
}

generateHtml();
