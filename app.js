//Global Variables
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


newTeam = () => {
    //Intro Messages
    console.log("This is the Team Generator")
    console.log("If you are the manager of a team of engineers and interns, follow the steps to generate a page of your team's information")
    
    //Questions for Manager info
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        },
        {
            type: "input",
            message: "Please enter your id number.",
            name: "id",
        },
        {
            type: "input",
            message: "Please enter your email address.",
            name: "email",
        },
        {
            type: "input",
            message: "Please enter your office number.",
            name: "officeNumber",
        }
    ]).then(data => {
        //Creating newManager Object defined in Manager.js
        const newManager = new Manager(
            data.name,
            data.id,
            data.email,
            data.officeNumber,
        );
        //somthing should go here to push this info to html eventually

        //
    }).then(() => {
        console.log("Thank You! Now, add your next team member.");
        nextEmployee(); //Function defined below, starting on line 52
    });
};

//This function is for transitioning from previous employee to next employee
nextEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "What type of employee would you like to add?",
            name: "employee",
            choices: ["Engineer", "Intern"]
        }
    ]).then(data => {
        if (data.employee === "Engineer"){
            engineerQuestions(); //Function defined below, starting on line 73
        }
        else {
            internQuestions();
        }
    });
};

engineerQuestions = () =>{
    return inquirer.prompt([
        {
            type: "input",
            message: "What is this engineer's name?",
            name: "name",
        },
        {
            type: "input",
            message: "Please enter their id number.",
            name: "id",
        },
        {
            type: "input",
            message: "Please enter their email address.",
            name: "email",
        },
        {
            type: "input",
            message: "Please enter their github username",
            name: "github",
        },
        {
            type: "list",
            message: "Would you like to add another employee? Or are you done adding?",
            name: "continue",
            choices:["Add another employee", "I am done adding employees"]
        }
    ]).then(data => {
        const newEngineer = new Engineer(
            data.name,
            data.id,
            data.email,
            data.github
        );
        //somthing should go here to push this info to html eventually

        //
        if (data.continue === "Add another employee"){
            nextEmployee();
        }
        else{
            //Write Html Function goes here
            console.log("Generating HTML page...")
        }
    });
};

internQuestions = () =>{
    return inquirer.prompt([
        {
            type: "input",
            message: "What is this intern's name?",
            name: "name",
        },
        {
            type: "input",
            message: "Please enter their id number.",
            name: "id",
        },
        {
            type: "input",
            message: "Please enter their email address.",
            name: "email",
        },
        {
            type: "input",
            message: "Please enter their school name",
            name: "school",
        },
        {
            type: "list",
            message: "Would you like to add another employee? Or are you done adding?",
            name: "continue",
            choices:["Add another employee", "I am done adding employees"]
        }
    ]).then(data => {
        const newEngineer = new Engineer(
            data.name,
            data.id,
            data.email,
            data.school
        );
        //somthing should go here to push this info to html eventually

        //
        if (data.continue === "Add another employee"){
            nextEmployee();
        }
        else{
            //Write Html Function goes here
            console.log("Generating HTML page...")
        }
    });
};


newTeam();