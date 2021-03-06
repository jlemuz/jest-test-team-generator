 //Generates the README based on values passed by the user
 const generatePage = (team) => {


return`

<!DOCTYPE html>
<html lang="en">

<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
</head>

<style>
#cont {
    display: flex; 
    justify-content: center;
    flex-wrap: wrap;

}

.flex-container > div {
    background-color: #f1f1f1;
    margin: 10px;
    padding: 20px;
    font-size: 30px;
    
  }

  #top{
    background: red;
    height:10vh;
    text-align:center;
    font-size: xx-large;
    color: white;
  }
</style>

<body>

<div class =".text-white" id="top"> My Team </div>
<div id = 'cont' class="flex-container" >
<div class="card bg-primary .text-white" style="width: 18rem; color: white">
  <div class="card-header">
  ${team[0].getName()}
  <div>
  <i class="bi bi-cup"></i>
  ${team[0].getRole()}
  </div>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id: ${team[0].getId()}</li>
    <li class="list-group-item">Email: ${team[0].getEmail()}</li>
    <li class="list-group-item">Office Number: ${team[0].getOfficeNumber()}</li>
  </ul>
</div>

<div class="card bg-primary" style="width: 18rem; color: white">
  <div class="card-header">
  ${team[1].getName()}
  <div>
  <i class="bi bi-eyeglasses"></i>
  ${team[1].getRole()}
  </div>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id: ${team[1].getId()}</li>
    <li class="list-group-item">Email: ${team[1].getEmail()}</li>
    <li class="list-group-item">Github: ${team[1].getGithub()}</li>
  </ul>
</div>


<div class="card bg-primary" style="width: 18rem; color: white">
  <div class="card-header">
  ${team[2].getName()}
  <div>
  <i class="bi bi-eyeglasses"></i>
  ${team[2].getRole()}
  </div>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id: ${team[2].getId()}</li>
    <li class="list-group-item">Email: ${team[2].getEmail()}</li>
    <li class="list-group-item">Github: ${team[2].getGithub()}</li>
  </ul>
</div>



<div class="card bg-primary" style="width: 18rem; color: white">
  <div class="card-header">
  ${team[3].getName()}
  <div>
  <i class="bi bi-mortarboard"></i>
  ${team[3].getRole()}
  </div>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id: ${team[3].getId()}</li>
    <li class="list-group-item">Email: ${team[3].getEmail()}</li>
    <li class="list-group-item">School: ${team[3].getSchool()}</li>
  </ul>
</div>
</div>
</body>
</html>
`;
 };
 module.exports = generatePage;