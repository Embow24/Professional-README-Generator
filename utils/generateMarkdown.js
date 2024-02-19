// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ##Description
  ${data.Description}

  ##Table of Contents


  ##License
  ${data.License}

  ##Installation
  ${data.Installation}

  ##Usage
  ${data.Usage}

  ##Contribute
  ${data.Contribute}

  ##Tests
  ${data.Tests}

  ##Questions
  ${data.GitHub}
  ${data.Email}
`;
}

module.exports = generateMarkdown;
