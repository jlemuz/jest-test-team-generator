const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

//const generatePage = require('./src/page-template');
//const { writeFile, copyFile } = require('./utils/generate-site');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter your employee ID (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter your employee ID!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'office',
        message: 'Enter your office number (Required)',
        validate: officeInput => {
          if (officeInput) {
            return true;
          } else {
            console.log('Please enter your office number!');
            return false;
          }
        }
      }
  ]).then(answers=>{
      let manager = new Manager(answers.name, answers.id, answers.email, answers.office);
      console.log(manager);
      addMembers();
  })
};

//Menu to allow user to choose what team member to add
function addMembers(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberType',
            message: 'Would you like to add another member?',
            choices: [
                "Engineer",
                "Intern",
                "No more members"]
        }
    ]).then(option =>{
        //Depending on selection user will be directed to appropriate prompts
        if(option.memberType == 'Engineer'){
            addEngineer();
        }
        else if (option.memberType == 'Intern'){
            addIntern();
        }
        else( console.log('No more members'))
    })
};


const addEngineer = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the engineer\'s name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter your employee\'s ID (Required)',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter your employee ID!');
            return false;
          }
        }
      },
      {
          type: 'input',
          name: 'email',
          message: 'Enter engineer\'s email address (Required)',
          validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter your email address!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'github',
          message: 'Enter github username (Required)',
          validate: officeInput => {
            if (officeInput) {
              return true;
            } else {
              console.log('Please enter github username!');
              return false;
            }
          }
        }
    ]).then(answers=>{
        let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        console.log(engineer);
        addMembers();
    })
  };

  
const addIntern = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the intern\'s name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your intern\'s name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter your intern\'s ID (Required)',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter your intern\'s employee ID!');
            return false;
          }
        }
      },
      {
          type: 'input',
          name: 'email',
          message: 'Enter intern\'s email address (Required)',
          validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter your intern\'s email address!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'school',
          message: 'Enter github username (Required)',
          validate: schoolInput => {
            if (schoolInput) {
              return true;
            } else {
              console.log('Please enter school!');
              return false;
            }
          }
        }
    ]).then(answers=>{
        let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        console.log(intern);
        addMembers();
    })
  };
promptUser();