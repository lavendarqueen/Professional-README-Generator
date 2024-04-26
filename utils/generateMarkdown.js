// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  } else if (license === "MIT") {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  } else if (license === "Unlicense") {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  } else {
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
    return "";
  } else {
    //generateMarkdown(licenseSection);
    return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {
  let myContents = `## Table of Contents`;
  let questions = `## Questions`;
  let mySections = "";
  // CREATE TABLE OF CONTENTS
  // [Table_of_Contents](#Contents)
  //   [Description](#Description)
  //   [License](#License)
  //   [Installation](#Installation)
  //   [Usage](#Usage)
  //   [ContributingGuidelines](#Contributing)
  //   [Tests](#Tests)
  //   [Credits](#Credits)
  //   [Questions](#Questions)
  //   [GitHub](#GitHub)
  //   [Contact_Me](#ContactMe)
  // {

  if (userResponses.description !== "") {
    myContents += `\n* [Description](#description)`;
    mySections += `\n## Description
${userResponses.description}`;
  }

  if (userResponses.installation !== "") {
    myContents += `\n* [Installation Instructions](#installation)`;
    mySections += `\n## Installation
${userResponses.installation}`;
  }

  if (userResponses.usage !== "") {
    myContents += `\n* [Usage Information](#usage)`;
    mySections += `\n## Usage
${userResponses.usage}`;
  }

  if (userResponses.contribution !== "") {
    myContents += `\n* [Contribution Guidelines](#contribution)`;
    mySections += `\n## Contribution
${userResponses.contribution}`;
  }

  if (userResponses.tests !== "") {
    myContents += `\n* [Test Instructions](#tests)`;
    mySections += `\n## Tests
${userResponses.tests}`;
  }

  if (userResponses.credits !== "") {
    myContents += `\n* [Credits](#credits)`;
    mySections += `\n## Credits
${userResponses.credits}`;
  }

  if (userResponses.email !== "") {
    myContents += `\n* [Contact Me](#contact)`;
    mySections += `\n## Contact    
 *Please contact me at ${userResponses.email} or on gitHub ${userResponses.gitHubUsername} for additional information .*`;
  }

  //GENERATE MARKDOWN FOR TOP SECTION OF THE README FILE

  let myMarkdown = `# ${userResponses.projectTitle}

${renderLicenseBadge(userResponses.license)}
`;
  //Add Table of Contents here

  myMarkdown += myContents;
  myMarkdown += mySections;

  //Add license section

  return myMarkdown;
}
module.exports = generateMarkdown;
