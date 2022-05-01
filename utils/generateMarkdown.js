function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
      * [Installation](#installation)
      * [Usage](#usage)
      * [License](#license)
      * [Contributing](#contributing)
      * [Tests](#tests)
      * [Questions](#questions)
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributers
  ${data.contributing}
  ## Tests
  ${data.testing}
  ## Questions
  ![User Image](${data.avatarUrl})
  **Contact Email:** ${data.email}
  `;
}

module.exports = generateMarkdown;
