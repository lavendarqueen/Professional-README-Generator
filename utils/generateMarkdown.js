// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "mit") {
    return "![Static Badge](https://Image.shields.io/badge/License-MIT_?style=flat&color-purple)";
  } else if (license === "apache") {
    return "![Static Badge](https://Image.shields.io/badge/License-Apache-_?style=flat&color=Blue)";
  } else if (license === "the unilicense") {
    return "![Static Badge](https://Image.shields.io/badge/License-the_unilicense-_?style=flat&color=green)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
