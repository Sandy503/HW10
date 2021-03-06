const Manager = require("./Manager")

function generateHTML(newManager, newEngineer, newIntern) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <meta http-equiv="X-UA-Compatible" content="ie=edge" />
       <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
       <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
     integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
       <title>My Team</title>
       <style>
           header {
               text-align: center;
               height: 20%;
               background-color: rgb(109, 0, 24);
               padding: 3%;
               color: whitesmoke;
           }
       </style>        
       </head>
       <body>
           <header>
               <h1>THE TEAM</h1>
           </header>
           <br>
           
           <div id="manager" class="card" style="width: 18rem;">
                   <div class="card-header bg-primary">
                       ${employee.name}
                       <br>
                       ${Manager.getRole()}
                   </div>
                   <ul class="list-group list-group-flush">
                       <li class="list-group-item">${employee.id}</li>
                       <li class="list-group-item">${employee.email}</li>
                       <li class="list-group-item">${employee.officeNumber}</li>
                   </ul>
           </div> 
   
           <br>
          <div id="engineers">
            ENGINEERS GO HERE
          </div>
           <br>
          <div id="interns">
            INTERNS GO HERE
          </div>
       </body>
       </html>
        `}
  module.exports = generateHTML;