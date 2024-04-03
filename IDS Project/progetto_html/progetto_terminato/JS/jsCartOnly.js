

window.onload = function ()
{
    getOrdered();
}

//CHECK STAMPANDO IL CARRELLO IN CONSOLE
function getOrdered()
{
    //RECUPERO DATI DA LOCAL STORAGE
    let carrello = sessionStorage.getItem("carrello");
    var c1 = JSON.parse(carrello)
    console.log(c1)
    let orderStart = document.getElementById("orderStart")
    var totale_c = 0;

    if(carrello == "{}"){
        
        orderStart.innerHTML = "";
    }
    else{
        for(var categorie in c1){
        
            for(var articoli in c1[categorie]){
                orderStart.innerHTML+= '<div class="row"> <div class="element w-image"> <img src="'+c1[categorie][articoli]['img']+'"> <span>'+articoli+'</span> </div> <div class="element">'+c1[categorie][articoli]['amount']+'</div> <div class="element">'+c1[categorie][articoli]['prezzo']+'</div></div>'
                totale_c+= c1[categorie][articoli]['prezzo']
                console.log(c1[categorie][articoli]['img'])
            }
        }
    }
    


    document.getElementById("totale_carrello").innerHTML ="Totale: "+totale_c+"€"

    //INIZIO RIGA ORDINI IN FILE HTML
    
}

function invia_ordine(){
  reference_ordini = firebase.database().ref('Ordini/');

  let carrello = sessionStorage.getItem("carrello");
  var c1 = JSON.parse(carrello)
  var tempo_invio = String(timsp())

  firebase.database().ref('Ordini/'+tempo_invio).update(c1)

  sessionStorage.setItem("carrello","{}")

    getOrdered()
}
function timsp(){

    const dateTime = Date.now();
    const timestamp = Math.floor(dateTime);
    return timestamp
  }