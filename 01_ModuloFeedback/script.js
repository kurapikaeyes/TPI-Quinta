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

    //per creare le celle nella tabella
    const riga = document.createElement("tr");

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