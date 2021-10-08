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
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebaseConfig.databaseURL().ref("/").child(user_name).update({
     purpose : "adding user"
    });   
}