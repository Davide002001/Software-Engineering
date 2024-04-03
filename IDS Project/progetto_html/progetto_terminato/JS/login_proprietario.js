// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCOtLofh769IUSJlU4q2a_JxttA1G1lpjg",
    authDomain: "iorder-d5e5d.firebaseapp.com",
    databaseURL: "https://iorder-d5e5d-default-rtdb.firebaseio.com",
    projectId: "iorder-d5e5d",
    storageBucket: "iorder-d5e5d.appspot.com",
    messagingSenderId: "949095498114",
    appId: "1:949095498114:web:d59f6f38f56eb553574f9b",
    measurementId: "G-WE96E9BSXP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var referenceDb = firebase.database().ref('Credenziali/'); 

function validate(){

    let email = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;
    var trovato = 0;
    for (db_figli in db){
            
            if (email === db[db_figli]['Email']  && pwd === db[db_figli]['Password']) {
                alert('Login successfully');
                //location.href= "/Principal_Page.html"
                window.open("Principal_Page.html");
                trovato = 1;
            } 
        
    }
    if(trovato==0){
        alert('Login Failed');
    }
    
}
let db


 // la funzione on('value',(snapshot)) permette di leggere i dati da un db
 // con la funzione download_db mi passo la variabile db1 che contiene tutti i dati prelevati con la funzione on 

 window.onload = function(){
   referenceDb.on('value',(snapshot) => {
       var db1 = snapshot.val()
       download_db(db1); // OPERAZIONE DI LETTURA
       
     });
    }

    function download_db(el1){
        db = el1;
    }

