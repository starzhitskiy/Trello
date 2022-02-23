// Firebase config
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";

    const firebaseConfig = {
      apiKey: "AIzaSyBtHN6b6585ZN5n7SPoCFFZ6efo6C5C1Y0",
      authDomain: "trello-test-2.firebaseapp.com",
      databaseURL: "https://trello-test-2-default-rtdb.firebaseio.com",
      projectId: "trello-test-2",
      storageBucket: "trello-test-2.appspot.com",
      messagingSenderId: "538570795807",
      appId: "1:538570795807:web:c5def05ea611a132931e2a"
    };
  
    const app = initializeApp(firebaseConfig);

    import {getDatabase, ref, set, child, get}
      from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";

    const db = getDatabase();

// THE REFRENECES

    const name = document.getElementById('nameInp');
    const email = document.getElementById('emailInp');
    const username = document.getElementById('userInp');
    const pass = document.getElementById('passInp');
    const submit = document.getElementById('sub_btn');

// VALIDATION

    function isEmptyOrSpaces(str) {
      return str === null || str.match(/^ *$/) !== null;
    }

    function Validation() {
      let nameregex = /^[a-zA-z\s]+$/;
      let emailregex = /^[a-zA-Z0-9]+@(gmail)\.com$/;
      let userregex = /^[a-zA-Z0-9]{5,}$/;

      if(isEmptyOrSpaces(name.value) || isEmptyOrSpaces(email.value) || isEmptyOrSpaces(username.value) || isEmptyOrSpaces(pass.value)) {
        alert("you cannot left any field empty");
        return false;
      }

      if (!nameregex.test(name.value)) {
        alert("the name should only contain alphabets!");
        return false;
      }

      if (!emailregex.test(email.value)) {
        alert("enter a valid email");
        return false;
      }

      if (!userregex.test(username.value)) {
        alert("-username can only be alphanumeric \n -username must be aleast 5 characters \n -username cannot contain spaces");
        return false;
      }

      return true;
    }

// REGISTER USER TO FIREBASE

    function RegisterUser(){
      if(!Validation()){
        return;
      };
      const dbRef = ref(db);

      get(child(dbRef, "UsersList/"+ username.value)).then((snapshot)=>{
        if(snapshot.exists()){
          alert("Account Already Exist!")
        }
        else {
          set(ref(db, "UsersList/"+ username.value),
          {
            fullname: name.value,
            email: email.value,
            username: username.value,
            password: encPass()
          })
          .then(()=>{
            window.location="../login/login.html";
            alert("user added successfully");
          })
          .catch((error)=>{
            alert("error"+ error);
          })
        }
      });
    }

// ENCRIPTION

    function encPass() {
      let pass12 = CryptoJS.AES.encrypt(pass.value, pass.value);
      return pass12.toString();
    }

// ASSING THE EVENTS

    submit.addEventListener('click', RegisterUser);
