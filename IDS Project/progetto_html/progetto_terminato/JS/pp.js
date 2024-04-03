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
var database = firebase.database()

//var referenceDb = firebase.database().ref('Tavoli/');



// Tables
function Add(){

    var database_ref = database.ref()
    
    let number0 = document.getElementById("number0").value;

        
        let Tables = number0

    database_ref.child('Tables/').set(Tables)
    
}

var referenceDb = firebase.database().ref('Menu_Categorie/'); 
var referenceDb_ordini = firebase.database().ref('Ordini/'); 
//Drink
function Addmenù(){

    let text5 = document.getElementById("text5").value;
    let number5 = document.getElementById("number5").value;
    let number10 = document.getElementById("number10").value;

    let bibite ={
        Descrizione: text5,
        Prezzo : number5,
        Valuta : number10
    }

    for(let db_figli in db){
        firebase.database().ref('Menu_Categorie/Bibite/'+ text5 + '/').update(bibite) 
    }
}

function cancellmenù(){

    let text5 = document.getElementById("text5").value;
    let number5 = document.getElementById("number5").value;
    let number10 = document.getElementById("number10").value;

    let bibite ={
        Descrizione: text5,
        Prezzo : number5,
        Valuta : number10
    }

    for(let db_figli in db){
        firebase.database().ref('Menu_Categorie/Bibite/'+ text5 + '/').remove(bibite)
    }
}       

    //First Course
    function FirstCourse(){

        let text2 = document.getElementById("text2").value;
        let number2 = document.getElementById("number2").value;
        let number7 = document.getElementById("number7").value;
    
        let primo ={
            Descrizione: text2,
            Prezzo : number2,
            Valuta : number7
        }
    
        for(let db_figli in db){
            firebase.database().ref('Menu_Categorie/Primi/'+ text2 + '/').update(primo) 
        }
    }

    function First_Course(){

        let text2 = document.getElementById("text2").value;
        let number2 = document.getElementById("number2").value;
        let number7 = document.getElementById("number7").value;
    
        let primo ={
            Descrizione: text2,
            Prezzo : number2,
            Valuta : number7
        }
    
        for(let db_figli in db){
            firebase.database().ref('Menu_Categorie/Primi/'+ text2 + '/').remove(primo) 
        }
    }
    
    function SecondCourse(){

        let text3 = document.getElementById("text3").value;
        let number3 = document.getElementById("number3").value;
        let number8 = document.getElementById("number8").value;
    
        let second ={
            Descrizione: text3,
            Prezzo : number3,
            Valuta : number8
        }
    
        for(let db_figli in db){
            firebase.database().ref('Menu_Categorie/Secondi/'+ text3 + '/').update(second) 
        }
    }

    function Second_Course(){

        let text3 = document.getElementById("text3").value;
        let number3 = document.getElementById("number3").value;
        let number8 = document.getElementById("number8").value;
    
        let second ={
            Descrizione: text3,
            Prezzo : number3,
            Valuta : number8
        }
    
        for(let db_figli in db){
            firebase.database().ref('Menu_Categorie/Secondi/'+ text3 + '/').remove(second) 
        }
    }

    function Desserts(){

        let text4 = document.getElementById("text4").value;
        let number4 = document.getElementById("number4").value;
        let number9 = document.getElementById("number9").value;
    
        let dessert ={
            Descrizione: text4,
            Prezzo : number4,
            Valuta : number9
        }
    
        for(let db_figli in db){
            firebase.database().ref('Menu_Categorie/Dolci/'+ text4 + '/').update(dessert) 
        }
    }

    function _Desserts(){

        let text4 = document.getElementById("text4").value;
        let number4 = document.getElementById("number4").value;
        let number9 = document.getElementById("number9").value;
    
        let dessert ={
            Descrizione: text4,
            Prezzo : number4,
            Valuta : number9
        }
    
        for(let db_figli in db){
            firebase.database().ref('Menu_Categorie/Dolci/'+ text4 + '/').remove(dessert) 
        }
    }

    function reservation(){

        let name = document.getElementById("name").value;
        let cellnumber = document.getElementById("cellnumber").value;
        let number = document.getElementById("number").value;
        let Data = document.getElementById("Data").value;
        let Ora = document.getElementById("Ora").value;
        let notes = document.getElementById("notes").value;
    
        let reserved ={
            Name: name,
            Cellnumber : cellnumber,
            N_people : number,
            DATA: Data,
            ORA: Ora,
            Notes: notes

        }

        let randId = (Math.floor(Math.random() * 200) + 1);
        
        for(let db_figli in db){
            while(db_figli === randId.toString()){
                randId = (Math.floor(Math.random() * 200) + 1);
            }
        }
        checkAllFields();
        checkInp();

        alert('Prenotazione effettuate')

        firebase.database().ref('Prenotazioni/'+ randId.toString() + '/').update(reserved) 
    }

    function _reservation(){

        let name = document.getElementById("name").value;
        let cellnumber = document.getElementById("cellnumber").value;
        let number = document.getElementById("number").value;
        let Data = document.getElementById("Data").value;
        let Ora = document.getElementById("Ora").value;
        let notes = document.getElementById("notes").value;
        let rand = document.getElementById("rand").value;
    
        let reserved ={
            Name: name,
            Cellnumber : cellnumber,
            N_people : number,
            DATA: Data,
            ORA: Ora,
            Notes: notes,
            Rand : rand

        }

        for(let db_figli in db){
            if(db_figli===rand.toString()){
                firebase.database().ref('Prenotazioni/'+ randId.toString() + '/').remove(reserved)
            }
        }

        firebase.database().ref('Prenotazioni/'+ rand + '/').remove(reserved) 
    }

    //SI ASSICURA CHE TUTTI I CAMPI SIANO STATI RIEMPITI IN MANIERA ACCURATA NELLA PAGINA PRENOTAZIONE.
    function checkAllFields()
    {
        let fieldName = document.getElementById("name").value;
        let fieldPnum = document.getElementById("cellnumber").value;
        let fieldNumP = document.getElementById("number").value;
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

    //IMPOSTAZIONE VALORE MINIMO DATA
    window.onload = function () {
        let dateField = document.getElementById("Data");

        dateField.min = new Date().toISOString().split("T")[0];
    }

    //CHECK CHE IL NUMERO DI TELEFONO SIA COMPOSTO DA SOLI NUMERI.
    function checkInp()
    {
        let input=document.getElementById("cellnumber").value;

        if(isNaN(input) === true)
        {
            alert("Must input numbers.");
            let inputN = input.slice(0, input.length-1);
            document.getElementById("cellnumber").value = inputN;
        }
    }
    


let db
let db_ordini

 // la funzione on('value',(snapshot)) permette di leggere i dati da un db
 // con la funzione download_db mi passo la variabile db1 che contiene tutti i dati prelevati con la funzione on 

 window.onload = function(){
   referenceDb.on('value',(snapshot) => {
       var db1 = snapshot.val()
       download_db(db1); // OPERAZIONE DI LETTURA
       
     });
    referenceDb_ordini.on('value',(snapshot) => {
        var db1 = snapshot.val()
        download_dbordini(db1); // OPERAZIONE DI LETTURA
        
    });
 }

    function download_db(el1){
        db = el1;
    }
    function download_dbordini(db1){
        db_ordini = db1;
        var id_tab_ordini = document.getElementById("tables_ordini")
        var string_html = ""
        
        string_html= '<table id="customers"> <tr> <th>Ordini</th> <th>Tavolo</th> <th>Articoli</th> <th>Qt</th> <th>€</th> </tr>'
        var i = 1
        
        for(var ordini in db_ordini){
            
            string_html+= '<tr>'
            //var dt=new Date(ordini * 1000).toLocaleString();
            var costo_totale=0;
            string_html+= '<td>'+i+'</td> '
        
            string_html+= '<td>'+db_ordini[ordini]['Tavolo']+'</td> <td><table class="orders" style="width:100%">'
            for(var indice in db_ordini[ordini]){
                
                 

                if(!(indice=="Tavolo")){
                    //ciao
                    for(var articoli in db_ordini[ordini][indice]){
                        //console.log(articoli)
                        string_html+= '<tr><td>'+articoli +'</td></tr>'
                        costo_totale+= parseInt( db_ordini[ordini][indice][articoli]['prezzo'] )
                    }
                }   
                
                
                
               
            }
            string_html+= '</table> </td>'
            string_html+= '<td><table class="orders" style="width:100%">'
            for(var indice in db_ordini[ordini]){
                if(!(indice=="Tavolo")){
                    //ciao
                    for(var articoli in db_ordini[ordini][indice]){
                        //console.log(articoli)
                        string_html+= '<tr><td>'+db_ordini[ordini][indice][articoli]['amount'] +'</td></tr>'
                        costo_totale+= parseInt( db_ordini[ordini][indice][articoli]['prezzo'] )
                    }
                }   
            }
            string_html+='</table> </td> <td>'+costo_totale+'</td> '
            i++
            string_html+= ' </tr>'
        }
        string_html+= '</table>'
        console.log(string_html)
        id_tab_ordini.innerHTML = string_html
    }




//NON NECESSARIO
//Se premo il tasto aggiungi foto e scelgo la foto la inserisce in coda alle altre