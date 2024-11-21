
  // Import the functions you need from the SDKs you need
    import {initializeApp} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
    import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyD8HglUU3EQa0Ufs_2Zv3qjVXjLrUhwKBw",
    authDomain: "regideso-87f74.firebaseapp.com",
    databaseURL: "https://regideso-87f74-default-rtdb.firebaseio.com",
    projectId: "regideso-87f74",
    storageBucket: "regideso-87f74.firebasestorage.app",
    messagingSenderId: "1001751968661",
    appId: "1:1001751968661:web:d407cc1dab98726933149c",
    measurementId: "G-WXS8DJKT23"
  };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const db = getDatabase(app);

document.getElementById("submit").addEventListener('click', function(e){
    set(re(db, 'utilisateur/' +document.getElementById("username").value),
{
    username: document.getElementById("username").value,
    password: document.getElementById("password").value
});
alert("Ajout avec success");
})
