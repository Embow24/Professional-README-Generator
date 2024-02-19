const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    { 
    type:'input',
    name: 'GitHub',
    message:'What is your GitHub user name?',
},
{ 
    type:'input',
    name: 'Email',
    message:'What is your email address?',
},
{ 
    type:'input',
    name: 'Title',
    message:'What is the title of your project?',
},
{ 
    type:'input',
    name: 'Description',
    message:'How would you describe your project?',
},
{ 
    type:'list',
    name: 'License',
    message:'Which license will you use?',
    choices: ["MIT", "Apache", "Eclipse", "Mozilla" ,"None"]
},
{ 
    type:'input',
    name: 'Installation',
    message:'How do you install your project?',
},
{ 
    type:'input',
    name: 'Usage',
    message:'How do you use your project?',
},
{ 
    type:'input',
    name: 'Contribute',
    message:'How can your project be contributed to?',
},
{ 
    type:'input',
    name: 'Tests',
    message:'Which tests need to be run?',
},
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) {
            console.error(err)
        } else {
            console.log("Successfully written file")
        }
    })
}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then((answers) => {
    console.log(answers)
writeToFile(`${answers.Title}.md`, answers)    
})
}

// function call to initialize program
init();
