const firebaseConfig = {
    apiKey: "AIzaSyA93sDnVS_q19BKMZA3BpceTHiPXhviKr0",
    authDomain: "chat-app-e65cf.firebaseapp.com",
    projectId: "chat-app-e65cf",
    storageBucket: "chat-app-e65cf.appspot.com",
    messagingSenderId: "399925112420",
    appId: "1:399925112420:web:fb6c9667fac7ff7bbbb971"
  };
  
  
 firebase.initializeApp(firebaseConfig);
 div_signup = document.getElementById("signup-div");
 window.onload = function() {
 if (screen.width <= 768) {
document.getElementById("ShowPasswordSignup").style.marginLeft = "325px";
div_signup.style.marginLeft = "100px"
 }
 
    
 }
 function showPasswordSignup() {
    eye = document.getElementById("ShowPasswordSignup");
    inputPassword = document.getElementById("passwordInputSignup");
    if (inputPassword.type == "password") {
        eye.className = "glyphicon glyphicon-eye-open";
        inputPassword.type = "text";

    }
    else {
        inputPassword.type = "password";
        eye.className = "glyphicon glyphicon-eye-close"
    }

 }