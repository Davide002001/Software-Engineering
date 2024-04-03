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


  function Credenziali(){
    //This elements take the value from the id in the form
    let Username = document.getElementById("Username").value;
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;
    
    

    let credential = {
             Name:  Username,
             Email: email,
             Password: pwd,
         }


    let name_rist= document.getElementById("Username").value; //name_rist has the value of the Username added in the form
    let e_mail = document.getElementById("email").value;
    let found = 0; //A variable to check if there are other Usernames like the one I used
   


    for(let db_figli in db){
        if(name_rist === db_figli ){
            found = 1
            alert('The username has been used');       
            return
            //break the code
        }
    }
    if(found == 0){
        
        firebase.database().ref('Credenziali/' + name_rist).update(credential);
        window.open("Loginpp.html");
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

    
/*
 const _v = { 
    hasError : false,
    isValidPassword: false,
    emailPattern : /^[^\s@]+@[^\s@]+\.[^\s@]+$/
};

function formValidation(form, notifica) {    
    _v.form = document.querySelector(`${form}`);
    _v.notificationItem = document.querySelector(`${notifica}`);    
    _v.pwdStrengthColor = document.querySelectorAll('#password > span');
    _v.formItems = Array.from(_v.form.elements);   

    submitForm();
}

function submitForm() {     
    _v.form.addEventListener('submit', (e) => {
        e.stopPropagation();
        e.preventDefault();
        checkValidation();        
    }, true);
}

function checkValidation() { 
    try {
        //Controllo il completamento dei campi obbligatori
        requiredFields();

        //Controllo correttezza email
        isValidEmail();

        //Controllo validità password e corrispondenza con conferma
        checkPassword();

        //Controlli superati. Invio form (non implementato) e notifica
        _v.notificationItem.className = 'notification-success';
        _v.notificationItem.textContent = 'La registrazione è avvenuta correttamente.';
        resetForm();
    } catch(e) {
        _v.notificationItem.className = 'notification-error';
        _v.notificationItem.textContent = e.message;
        //console.dir(e);
    }
    
}

function requiredFields() {
    let error;
    _v.hasError = false;
    _v.formItems.forEach(item => {
        error = false;
        if (item.type !== "checkbox" && item.value === "" && item.required) {
            error = true;
        }
        if (item.type === "checkbox" && item.required && !item.checked) {
            error = true
        }
        if (error && item.type !== "submit") {
            _v.hasError = true;
            item.classList.add("error");            
        }
    });
    if(_v.hasError) {
        throw new Error('Compilare i campi obbligatori.');
    }
}

function isValidEmail() {
    if (!_v.emailPattern.test(_v.form.email.value)) {
        throw new Error('Email indicata non valida');
    }
}


function resetStrength() {
    _v.pwdStrengthColor.forEach((item) => {
        item.classList.remove('active');
    });
}



function checkPassword() {
    const password = _v.form.password.value,
        re_password = _v.form.re_password.value;

    if(!_v.isValidPassword) {
        throw new Error('Password non valida');
    }
    if (password !== re_password) {
        throw new Error('Password e conferma password non coincidono');
    }
}

function resetForm() {    
    resetStrength();
    _v.form.reset();
    _v.formItems.forEach(item => {
        item.classList.remove("error");
    });   
}

export default formValidation();*/
  
/*



let referenceDb = firebase.database().ref('Prenotazioni/');

function invia_prenotazione_db(){

    Name = document.getElementById("Name").value;
    phone = document.getElementById("Pnum").value;
    ppl = document.getElementById("People").value;
    day = document.getElementById("Data").value;
    hour = document.getElementById("Ora").value;
    notes = document.getElementById("Notes").value;

    const esempio = {
        Nome: Name,
        Telefono: phone,
        N_Persone : ppl,
        Data : day,
        Ora : hour,
        Ulteriori_Note : notes
    }

    let randId = (Math.floor(Math.random() * 200) + 1);

    referenceDb.on('value',(snapshot) => {
        var db1 = snapshot.val()

        for (var db_figli in db1) {
            while(db_figli === randId.toString()) {
                randId = (Math.floor(Math.random() * 200) + 1);
            }
        }
    })

    firebase.database().ref('Prenotazioni/' + randId.toString() + '/').update(esempio);
}

function checkAllFields()
{
    let fieldName = document.getElementById("Name").value;
    let fieldPnum = document.getElementById("Pnum").value;
    let fieldNumP = document.getElementById("People").value;
    let fieldDate = document.getElementById("Data").value;
    let fieldHour = document.getElementById("Ora").value;

    if(fieldName && fieldPnum && fieldNumP && fieldDate && fieldHour)
    {
        if(fieldPnum.length === 10)
            return true;
        else
            alert("Phone number is not a valid number.")
    }
    else
    {
        alert("Name, phone number, n°people, date and hour are required.")
    }
}

function confirm()
{
    let btn = document.getElementById("ConfirmButton");
    let url = "PrenotazioneConfermata.html"

    if(checkAllFields())
    {
        invia_prenotazione_db();
        window.location = url;
    }
}

function checkInp()
{
    let input=document.getElementById("Pnum").value;

    if(isNaN(input) === true)
    {
        alert("Must input numbers.");
        let inputN = input.slice(0, input.length-1);
        document.getElementById("Pnum").value = inputN;
    }
}

*/

