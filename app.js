//Global Variables
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
            message: "PLease enter your email address.",
            name: "email",
        },
        {
            type: "input",
            message: "Please enter your office number.",
            name: "office",
        }
    ]).then(manager => {
        //Creating newManager Object defined in Manager.js
        const newManager = new Manager(
            manager.name,
            manager.id,
            manager.email,
            manager.office,
        );
    }).then(() => {
        console.log("Thank You! Now, add your next team member.");
        nextEmployee();
    });
};

newTeam();