let userlink = document.getElementById('userlink');
let signoutlink = document.getElementById('signoutlink');
let currentUser = null;


function getUsername(){
  let keepLoggedIn = localStorage.getItem("keepLoggedIn");

  if(keepLoggedIn == "yes") {
    currentUser = JSON.parse(localStorage.getItem('user'));
  }
  else {
    currentUser = JSON.parse(sessionStorage.getItem('user'));
  }
}

function Signout(){
  sessionStorage.removeItem('user');
  localStorage.removeItem('user');
  localStorage.removeItem('keepLoggedIn');
  window.location = "./home.html";
}


window.onload = function(){
  getUsername();
  if(currentUser == null) {
    userlink.innerText = "Create New Account";
    userlink.href = "../register/register.html";

    signoutlink.innerText="Login";
    signoutlink.href = "../login/login.html";
  }
  else {
    userlink.innerText = currentUser.username;
    userlink.href = "#";

    signoutlink.innerText = "Exit";
    signoutlink.href = "javascript:Signout()";
  }
}
