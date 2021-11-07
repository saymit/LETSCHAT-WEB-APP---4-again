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

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send(){
        msg=document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name: user_name,
              message:msg,
              like:0

        });
        document.getElementById("msg").value=" ";}