// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = './README.md'

// TODO: Create an array of questions for user input
const questions = [];

//License, Contributing, Tests, and Questions
inquirer
  .prompt([
    {
      type: 'list',
      message: "What is your project's license?",
      choices: [ "Academic Free License v3.0", 
      "Apache license 2.0", 
      "Artistic license 2.0",
      "Boost Software License 1.0",
      "BSD 2-clause 'Simplified' license",
      "BSD 3-clause 'New' or 'Revised' license",
      "BSD 3-clause Clear license",
      "Creative Commons license family",
      "Creative Commons Zero v1.0 Universal",
      "Creative Commons Attribution 4.0",
      "Creative Commons Attribution Share Alike 4.0",
      
      "Educational Community License v2.0",
      "Eclipse Public License 1.0",
      "European Union Public License 1.1",
      "GNU Affero General Public License v3.0",
      "GNU General Public License family",
      "GNU General Public License v2.0",
      "GNU General Public License v3.0",
      "GNU Lesser General Public License family",
      "GNU Lesser General Public License v2.1",
      "GNU Lesser General Public License v3.0",
      "ISC",
      "LaTeX Project Public License v1.3c",
      "Microsoft Public License",
      "MIT",
      "Mozilla Public License 2.0",
      "Open Software License 3.0",
      "PostgreSQL License",
      "SIL Open Font License 1.1",
      "University of Illinois/NCSA Open Source License",
      "The Unlicense",
      "zLib License"],
      name: 'license',
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the description of your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What is the link to the gitHub repo for this project?',
      name: 'repolink',
    },
    {
        type: 'input',
        message: 'What is the link to the deployed version?',
        name: 'deployedlink',
      },
    {
        type: 'input',
        message: 'What is the usage of this project?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What are the instructions for this project?',
        name: 'instructions',
      },
      {
        type: 'input',
        message: 'What is the link of your gitHub profile?',
        name: 'profile',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
  ]).then((response) =>  {try {

fs.appendFile(`${response.title}.md`, `# ${response.title}
license: ${response.license}

Click here to go to the website: <${response.deployedlink} >

## Description 📝

${response.description} 

## Table of Contents 📋
Here's a table of contents to make it easier to find what what you are looking for.
- [Instructions](#instructions) 
- [Installation](#installation) 
- [Usage](#usage) 
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

## Questions
If you have any question contact me to my email: ${response.email}

## Credits
Created with ♥️ by ${response.name}, <${response.profile}>.
  
`, (err) =>
  err ? console.error(err) : console.log('File created!')
) 
  } catch(err) {
    console.error(err)
  }}
  

);



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


