// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8YBN7993DSg-Hf9bCwv5gdqdKSZzctTI",
  authDomain: "kwitter-f3708.firebaseapp.com",
  databaseURL: "https://kwitter-f3708-default-rtdb.firebaseio.com",
  projectId: "kwitter-f3708",
  storageBucket: "kwitter-f3708.appspot.com",
  messagingSenderId: "227502370594",
  appId: "1:227502370594:web:adfdb2628832740d72ff7b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom() { 
  room_name= document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Adding room_name"
  });
  localStorage.setItem("room_name",room_name);
  window.location= "kwitter_page.html";

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+ Room_names);
      row ="<div class='room_name' id= '"+Room_names+"' onclick= 'redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",room_name);
  window.location= "kwitter_page.html";

}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
