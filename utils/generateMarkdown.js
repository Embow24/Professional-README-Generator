// function to create badges for the licenses
function createLicenseBadge(license) {
switch (license) {
  case "MIT":
   return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  case "Apache":
   return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  case "Eclipse":
   return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  case "Mozilla":
   return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  case "None":
    return ""
}
}

// function to display license badge information
// function licenseBadgeDetails(license) {

// }

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${createLicenseBadge(data.license)}

  ##Description
  ${data.Description}

  ##Table of Contents:
   *[License](#license)
   *[Installation](#installation)
   *[Usage](#usage)
   *[Contribute](#contribute)
   *[Tests](#tests)
   *[Questions](#questions)

  ##License

  ##Installation
  ${data.Installation}

  ##Usage
  ${data.Usage}
  
  ##Contribute
  ${data.Contribute}

  ##Tests
  ${data.Tests}

  ##Questions
  [Click to access GitHub](https://www.github.com/${data.GitHub})
  [Click to send me an email](${data.Email})
`;
}

module.exports = generateMarkdown;
