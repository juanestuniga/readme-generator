function generateMarkdown(userResponses, userInfo) {

  let readDraft = `## Table of Contents`;

  if (userResponses.installation !== '') { readDraft += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { readDraft += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') { readDraft += `
  * [Contributing](#contributing)` };

  if (userResponses.tests !== '') { readDraft += `
  * [Tests](#tests)` };


  // Markdown 
  let readMe = 
  `# ${userResponses.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.title}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  ## Description 
  
  
  ${userResponses.description}
  `

  // Table of Contents
  readMe += readDraft;
 
  readMe += `
  * [License](#license)`;
  

  if (userResponses.installation !== '') {
  
  readMe +=
  `
  
  ## Installation
  
  
  ${userResponses.installation}`
  };
  

  if (userResponses.usage !== '') {
  
  readMe +=
  
  `
  
  ## Usage 
  
  
  ${userResponses.usage}`
  };
  
  
  if (userResponses.contributing !== '') {

  readMe +=
    
  `
  
  ## Contributing
  
  
  ${userResponses.contributing}`
  };
  

  if (userResponses.tests !== '') {
  
  readMe +=
  `
  
  ## Tests
  
  
  ${userResponses.tests}`
  };


  readMe +=
  `
  
  ## License
  
  ${userResponses.license}
  `;


  let draftDev = 
  `
  ---
  
  ## Questions?
  <img src="${userInfo.avatar_url}" alt="${userInfo.login}" width="40%" />
  
  For any questions, please contact me with the information below:
 
  GitHub: [@${userInfo.login}](${userInfo.url})
  `;

  if (userInfo.email !== null) {
  
  draftDev +=
  `
  Email: ${userInfo.email}
  `};

  readMe += draftDev;

  // Return markdown
  return readMe;
  
}

module.exports = generateMarkdown;