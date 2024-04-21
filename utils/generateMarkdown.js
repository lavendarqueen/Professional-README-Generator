// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "mit") {
    return "![Static Badge](https://Image.shields.io/badge/License-MIT_?style=flat&color-purple)";
  } else if (license === "apache") {
    return "![Static Badge](https://Image.shields.io/badge/License-Apache-_?style=flat&color=Blue)";
  } else if (license === "the unilicense") {
    return "![Static Badge](https://Image.shields.io/badge/License-the_unilicense-_?style=flat&color=green)";
  } else if (license === "null") {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "null") {
    return console.log("A license is required. Please select a license.");
  } else {
    return "!(//https://github.com/![userName, projectName]/blob/main/LICENSE)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "null") {
  } else {
    generateMarkdown(licenseSection);
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {
  let myContents = `## Table of Contents`;
  let questions = `## Questions`;
}

// CREATE TABLE OF CONTENTS
// # Table of contents
// [Description](#Description)
// [Installation](#Installation)
// [Usage](#Usage)
// [License](#License)
// [ContributingGuidelines](#Contributing)
// [Tests](#Tests)
// [Credits](#Credits)
// [Questions](#Questions)
// [GitHub](#GitHub)
// [Contact_Me](#ContactMe)
{
  if (userResponses.title !== "") return `# ${title}`;
}

{
  if (userResponses.description !== "") {
    description += `* [Description](#description)`;
  }
}

{
  if (userResponses.installation !== "") {
    installation += `* [Installation Instructions](#installation)`;
  }
}

{
  if (userResponses.usage !== "") {
    usage += `* [Usage Information](#usage)`;
  }
}

{
  if (userResponses.contribution !== "") {
    contribution += `* [Contribution Guidelines](#contribution)`;
  }
}

{
  if (userResponses.tests !== "") {
    tests += `* [Test Instructions](#tests)`;
  }
}

{
  if (userResponses.credits !== "") {
    credits += `* [Credits](#credits)`;
  }
}

{
  if (userResponses.questions !== "") {
    questions += `* [Questions](#questions)`;
  }
}

//GENERATE MARKDOWN FOR TOP SECTION OF THE README FILE

let myMarkdown = `# ${user.responses.title}

![badge for license](??????????????????)

## Description

*Enter detailed description of your project here:*

${userResponses.description}`;

//Add Table of Contents here

myMarkdown += myContents;

//Add license section
myMarkdown += module.exports = generateMarkdown;

// ## GitHub
// ${data.userName}

// ## Contact Me
// "Please contact me at ${data.email} for additional information."
