eye = "";
const firebaseConfig = {
    apiKey: "AIzaSyA93sDnVS_q19BKMZA3BpceTHiPXhviKr0",
    authDomain: "chat-app-e65cf.firebaseapp.com",
    projectId: "chat-app-e65cf",
    storageBucket: "chat-app-e65cf.appspot.com",
    messagingSenderId: "399925112420",
    appId: "1:399925112420:web:fb6c9667fac7ff7bbbb971"
  };
  
  
 firebase.initializeApp(firebaseConfig);
 window.onload = function() {
 if (screen.width <= 768) {
document.getElementById("ShowPassword").style.marginLeft = "325px"
 }
 
    
 }
 function showPassword() {
    eye = document.getElementById("ShowPassword");
    inputPassword = document.getElementById("passwordInput");
    if (inputPassword.type == "password") {
        eye.className = "glyphicon glyphicon-eye-open";
        inputPassword.type = "text";

    }
    else {
        inputPassword.type = "password";
        eye.className = "glyphicon glyphicon-eye-close";
    }

 }