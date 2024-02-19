// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  #Description
  ${data.Description}

  #Table of Contents:
   *[License](#license)
   *[Installation](#installation)
   *[Usage](#usage)
   *[Contribute](#contribute)
   *[Tests](#tests)
   *[Questions](#questions)

  #License
  <a href= license>
  ${data.License}

  #Installation
  <a href= installation>
  ${data.Installation}

  #Usage
  <a href= usage>
  ${data.Usage}

  #Contribute
  <a href= contribute>
  ${data.Contribute}

  #Tests
  <a href= tests>
  ${data.Tests}

  #Questions
  <a href= questions>
  [GitHub:] ${data.GitHub} <a href=https://www.github.com/${data.GitHub}>
  [Email:] ${data.Email}
`;
}

module.exports = generateMarkdown;
