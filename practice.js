
 var firebaseConfig = {
    apiKey: "AIzaSyB36tmcuBgFBzB1AP77pwT5QdWMGEgVZrQ",
    authDomain: "add-project-kidnap.firebaseapp.com",
    databaseURL: "https://add-project-kidnap-default-rtdb.firebaseio.com",
    projectId: "add-project-kidnap",
    storageBucket: "add-project-kidnap.appspot.com",
    messagingSenderId: "51428136145",
    appId: "1:51428136145:web:ce867310c12ae9d4eee1f0",
    measurementId: "G-4CV23J66LQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}