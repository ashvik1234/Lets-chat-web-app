//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyA7rOkKFft_8broQEufpkpLhQy521eB0MA",
      authDomain: "kwitter-ec2c1.firebaseapp.com",
      databaseURL: "https://kwitter-ec2c1-default-rtdb.firebaseio.com",
      projectId: "kwitter-ec2c1",
      storageBucket: "kwitter-ec2c1.appspot.com",
      messagingSenderId: "1008656128391",
      appId: "1:1008656128391:web:b52101347e9139673e1b22",
      measurementId: "G-3K07WCBGNK"
    };
    user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
     name:user_name,
     message:msg,
     like:0     
    });
    document.getElementById("msg").value = "";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";
    }