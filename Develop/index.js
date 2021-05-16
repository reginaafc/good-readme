// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = "./README.md";
// Agregar link a readme


const questions = [
  {
    type: "list",
    message: "What is your project's license?",
    choices: [
      "Apache 2.0",
      "BSD 2-Clause",
      "BSD 3-Clause",
      "GNU AGPLv3.0",
      "GNU GPLv2.0",
      "GNU GPLv3.0",
      "MIT",
      "Mozilla Public 2.0",
    ],
    name: "license",
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What is the usage of this project?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the instructions for this project?",
    name: "instructions",
  },
  {
    type: "input",
    message: "What are the test instructions for this project?",
    name: "test",
  },
  {
    type: "input",
    message: "What are the contribution guidelines for this project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What is the link to the gitHub repo for this project?",
    name: "repolink",
  },
  {
    type: "input",
    message: "What is the link to the deployed version?",
    name: "deployedlink",
  },
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the link to your gitHub profile?",
    name: "profile",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
];


inquirer.prompt(questions).then((response) => {
  switch (response.license) {
    case 'Apache 2.0':
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'BSD 2-Clause':
      licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case 'BSD 3-Clause':
      licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'GNU AGPLv3.0':
      licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      break;
    case 'GNU GPLv2.0':
      licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      break;
    case 'GNU GPLv3.0':
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'MIT':
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'Mozilla Public 2.0':
      licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    default:
      break;
  }
  try {
    //  Create the file
    fs.appendFile(
      `${response.title}.md`,
      `# ${response.title}
## License
 ${licenseBadge}
    
  Click here to go to the website: <${response.deployedlink} >
    
## Description 📝
    
   ${response.description} 
    
## Table of Contents 📋
  Here's a table of contents to make it easier to find what what you are looking for.
 - [Instructions](#instructions) 
 - [Installation](#installation) 
 - [Usage](#usage) 
 - [Test instructions](#test-instructions) 
  - [Contribution guidelines](#contribution-guidelines)
  - [Questions](#questions)
  - [Credits](#credits)
    
## Instructions 
  ${response.instructions} 
    
## Installation 
  Once you are in my gitgub repository for this project, <${response.repolink} >: 
  <br>
  1.- First you need to get the HTTPS or GitHub CLI from the green button in the top right corner that says "Code". 🟢
  <br>
  2.- Once you have copied the URL, open your terminal and cd to the place where you want to put the clone. 
 <br>
 3.- Then write the next code "git clone and the link you've copied ".

## Usage
    
 ${response.usage}.
    
## Test-instructions
    
  ${response.test}.
    
## Contribution-guidelines
  ${response.contribution}
    
## Questions
  If you have any question please contact me to: ${response.email}
  Or to my gitHub: <${response.profile}>
    
## Credits
  Created with ♥️ by ${response.name}, <${response.profile}>.
      
`,
      (err) =>
        // Logs errors
        err ? console.error(err) : console.log("File created!")
    );
  } catch (err) {
    console.error(err);
  }
});

function init() {
}

init();
