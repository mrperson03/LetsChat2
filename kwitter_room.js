var firebaseConfig = {
    apiKey: "AIzaSyDBqPDiDGAAPd7-y2l886deIOZKVFYAawE",
    authDomain: "letschat-1f8ed.firebaseapp.com",
    databaseURL: "https://letschat-1f8ed-default-rtdb.firebaseio.com",
    projectId: "letschat-1f8ed",
    storageBucket: "letschat-1f8ed.appspot.com",
    messagingSenderId: "537264670561",
    appId: "1:537264670561:web:e08171d6fe954f0ebf2720"
  };
   firebase.initializeApp(firebaseConfig);

   function login() {
    user_name = document.getElementById("user").value;
    firebase.database().ref("/").child(user_name).update({
        username: "name"
    });
}