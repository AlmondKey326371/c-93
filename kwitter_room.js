//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyC0gZWwpg4VVi4SIIrB0xJUF_hKzuS9d3g",
      authDomain: "kwitter-f9785.firebaseapp.com",
      projectId: "kwitter-f9785",
      storageBucket: "kwitter-f9785.appspot.com",
      messagingSenderId: "431046908261",
      appId: "1:431046908261:web:b659e3ee7857d41f7e298c"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
