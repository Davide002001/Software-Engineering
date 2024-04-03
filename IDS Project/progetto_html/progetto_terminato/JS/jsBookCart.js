function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

let referenceDb = firebase.database().ref('Prenotazioni/');

//INVIA PRENOTAZIONE AL DATABASE
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

//SI ASSICURA CHE TUTTI I CAMPI SIANO STATI RIEMPITI IN MANIERA ACCURATA NELLA PAGINA PRENOTAZIONE.
function checkAllFields()
{
    let fieldName = document.getElementById("Name").value;
    let fieldPnum = document.getElementById("Pnum").value;
    let fieldNumP = document.getElementById("People").value;
    let fieldDate = document.getElementById("Data").value;
    let fieldHour = document.getElementById("Ora").value;

    //CHECK DEI CAMPI
    if(fieldName && fieldPnum && fieldNumP && fieldDate && fieldHour)
    {
        //CHECK CHE IL NUMERO DI TELEFONO SIA CORRETTO
        if(fieldPnum.length === 10)
            return true;
        //NUMERO DI TELEFONO < 10 CARATTERI
        else
            alert("Phone number is not a valid number.")
    }
    //CAMPI VUOTI.
    else
    {
        alert("Name, phone number, n°people, date and hour are required.")
    }
}

//CHECK CHE IL NUMERO DI TELEFONO SIA COMPOSTO DA SOLI NUMERI.
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

//FUNZIONE CHIAMATA DAL BOTTONE CONFIRM NELLA PAGINA PRENOTAZIONE.
function confirm()
{
    let btn = document.getElementById("ConfirmButton");
    let url = "PrenotazioneConfermata.html"

    //CHECK DEGLI INPUT FIELD E REINDIRIZZAMENTO ALLA PAGINA PRENOTAZIONE CONFERMATA.
    if(checkAllFields())
    {
        invia_prenotazione_db();
        window.location = url;
    }
}

//IMPOSTAZIONE VALORE MINIMO DATA
window.onload = function () {
    let dateField = document.getElementById("Data");

    dateField.min = new Date().toISOString().split("T")[0];
}

