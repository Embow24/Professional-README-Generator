const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    { 
    type:'input',
    Question:'What is your GitHub user name?',
    name: 'GitHub',
},
{ 
    type:'email',
    Question:'What is your email address?',
    name: 'Email',
},
{ 
    type:'input',
    Question:'What is the title of your project?',
    name: 'Title',
},
{ 
    type:'input',
    Question:'How would you describe your project?',
    name: 'Description',
},
{ 
    type:'input',
    Question:'Which license will you use?',
    name: 'License',
},
{ 
    type:'input',
    Question:'How do you install your project?',
    name: 'Installation',
},
{ 
    type:'input',
    Question:'How do you use your project?',
    name: 'Usage',
},
{ 
    type:'input',
    Question:'How can your project be contributed to?',
    name: 'Contribute',
},
{ 
    type:'input',
    Question:'Which tests need to be run',
    name: 'Tests',
},
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
