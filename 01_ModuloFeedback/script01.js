const form = document.getElementById("form");
const formFeedback = document.getElementById("formFeedback");
const messaggio = document.getElementById("messaggio");
const tabella = document.getElementById("tabellaFeedback")

formFeedback.addEventListener("submit", gestisciSubmit);
const dati = [];

function creaRiga(valori){
    const campi = ["nome", "email", "data", "ora", "tipoFeedback", "testoFeedback", "iscrizione"];
     const riga = document.createElement("tr");
    for(let i=0;i<campi.length;i++){
        const cella=document.createElement("td");
        cella.textContent=valori[campi[i]];
        riga.appendChild(cella);
    }
    //creare la cella che conterrà il pulsante elimina

    const cellaAzioni = document.createElement("td");
    //creo il pulsante

    const bottoneElimina = document.createElement("button");
    bottoneElimina.textContent = "Elimina";

    //arrow function
    bottoneElimina.addEventListener("click", () => {
        const indice = campi.indexOf(valori);
        if(indice !==-1){
            dati.splice(indice, 1);
        }
        riga.remove();
    });

    cellaAzioni.appendChild(bottoneElimina);

    riga.appendChild(cellaAzioni);

    tabellaFeedback.appendChild(riga);

}


function gestisciSubmit(event){
    event.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const data = document.getElementById("date").value;
    const ora = document.getElementById("time").value;
    const tipoFeedback = document.getElementById("tipo").value;
    const testoFeedback = document.getElementById("textarea").value.trim();
    const newsletter = document.getElementById("check").checked;

    if(!nome || !email || !data || !ora || !tipoFeedback || !testoFeedback){
        alert("Compila tutti i campi obbligatori!");
        return;
    }

    const iscrizione = newsletter ? "Si" : "No";
    //serve un array con tutti elementi che saranno inseriti nella tabella

    //creo un oggetto che contiene tutte le informazioni relative ad un singolo feedback
    //le chiavi rappresentano i nomi dei campi
    //i valori rappresentano i dati inseriti dall'utente

    //notazione abbreviata quando il nome della proprietà è uguale al nome della variabile
    const valori = {
        nome,
        email,
        data, 
        ora, 
        tipoFeedback, 
        testoFeedback, 
        iscrizione
    };
    
    


    //scorro tutti gli elementi dell'array valori

    
    
    

    /*bottoneElimina.addEventListener("click", function(){
        riga.remove();
    })*/ //funzione anonima
    
    

    

    const dato = {
        nome,
        email,
        data,
        ora,
        tipoFeedback,
        testoFeedback,
        iscrizione
    };
dati.push(valori);
creaRiga(valori);
formFeedback.reset();
}