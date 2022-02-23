// FIREBASE CONFIG
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

// REFRENECES

    const username = document.getElementById('userInp');
    const pass = document.getElementById('passInp');
    const submit = document.getElementById('sub_btn');

// AUTHENTICATION

    function AuthenticateUser(){
      const dbref = ref(db);

      get(child(dbref, "UsersList/"+ username.value)).then((snapshot)=>{
        if(snapshot.exists()){
          let dbpass = decPass(snapshot.val().password);
          if(dbpass == pass.value) {
            login(snapshot.val());
          }
          else {
            alert("user does not exist");
          }
        }
        else {
          alert("username or password is invalid");
        }
      });
    }

    // DECRIPT

    function decPass(dbpass) {
      let pass12 = CryptoJS.AES.decrypt(dbpass, pass.value);
      return pass12.toString(CryptoJS.enc.Utf8);
    }

    // LOGIN
    function login(user){
      let keepLoggedIn = document.getElementById('customSwitch1').checked;

      if(!keepLoggedIn) {
        sessionStorage.setItem('user', JSON.stringify(user));
        window.location="../home/home.html";
      }

      else {
        localStorage.setItem('keepLoggedIn', 'yes');
        localStorage.setItem('user', JSON.stringify(user));
        window.location="../home/home.html";
      }
    }

    // ASSING THE EVENTS

    submit.addEventListener('click', AuthenticateUser);
