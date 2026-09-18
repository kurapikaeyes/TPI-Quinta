const form = document.getElementById("form");
const formFeedback = document.getElementById("formFeedback");
const messaggio = document.getElementById("messaggio");
const tabella = document.getElementById("tabellaFeedback")

formFeedback.addEventListener("submit", gestisciSubmit);

function gestisciSubmit(event){
    event.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const data = document.getElementById("date").value;
    const ora = document.getElementById("time").value;
    const tipoFeedback = document.getElementById("tipo").value;
    const testoFeedback = document.getElementById("textarea").value.trim();
    const newsletter = document.getElementById("check").ariaChecked;

    if(!nome || !email || !data || !ora || !tipoFeedback || !testoFeedback){
        alert("Compila tutti i campi obbligatori!");
        return;
    }

    const iscrizione = newsletter ? "Si" : "No";

    //serve un array con tutti elementi che saranno inseriti nella tabella

    const valori = [nome, email, data, ora, tipoFeedback, testoFeedback, iscrizione]

    //per creare le celle nella tabella
    const riga = document.createElement("tr");

    //scorro tutti gli elementi dell'array valori

    for(let i=0; i<valori.length; i++){
        const cella = document.createElement("td");
        cella.textContent = valori[i];

        //aggiungere la cella alla riga

         riga.appendChild(cella);
    }

    //creare la cella che conterrà il pulsante elimina

    const cellaAzioni = document.createElement("td");

    //creo il pulsante

    const bottoneElimina = document.createElement("button");

    bottoneElimina.textContent = "Elimina";

    /*bottoneElimina.addEventListener("click", function(){
        riga.remove();
    })*/ //funzione anonima
    
    //arrow function
    bottoneElimina.addEventListener("click", () => {
        riga.remove();
    })

    cellaAzioni.appendChild(bottoneElimina);

    riga.appendChild(cellaAzioni);

    tabellaFeedback.appendChild(riga);

    const dato = {
        nome,
        email,
        data,
        ora,
        tipoFeedback,
        testoFeedback,
        iscrizione
    };


}