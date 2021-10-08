
//ADD YOUR FIREBASE LINKS HERE
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
    firebase.initializeApp(firebaseConfig);  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom()
{
    user_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
    });
    localStorage.setItem("room_name",room_name);

    window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwiter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
        window.location = "index.html";
}