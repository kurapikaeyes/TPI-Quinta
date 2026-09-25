const form = document.getElementById("form")
const tabellaFeedback = document.getElementById("tabellaFeedback")
 
let dati = JSON.parse(localStorage.getItem("listaFeedback")) || []
 
mostraDatiSalvati()
 
form.addEventListener("submit", gestisciSubmit)
 
function gestisciSubmit(event) {
    event.preventDefault()
 
    const nome = document.getElementById("nome").value.trim()
    const email = document.getElementById("email").value.trim()
    const data = document.getElementById("data").value.trim()
    const ora = document.getElementById("ora").value.trim()
    const tipoFeedback = document.getElementById("tipoFeedback").value.trim()
    const testoFeedback = document.getElementById("testoFeedback").value.trim()
    const newsletterChecked = document.getElementById("newsletter").checked
 
    if (!nome || !email || !data || !ora || !tipoFeedback || !testoFeedback) {
        alert("Compila tutti i campi obbligatori.")
        return
    }
 
    const iscrizione = newsletterChecked ? "Sì" : "No"
 
    const dato = {
        nome,
        email,
        data,
        ora,
        tipoFeedback,
        testoFeedback,
        newsletter: iscrizione
    }
 
    dati.push(dato)
    salvaNelLocalStorage()
 
    aggiungiRigaInTabella(dato, dati.length - 1)
 
    form.reset()
}
 
function aggiungiRigaInTabella(dato, indice) {
    const riga = document.createElement("tr")
    const valori = [dato.nome, dato.email, dato.data, dato.ora, dato.tipoFeedback, dato.testoFeedback, dato.newsletter]
 
    for (let i = 0; i < valori.length; i++) {
        const cella = document.createElement("td")
        cella.textContent = valori[i]
        riga.appendChild(cella)
    }
 
    const cellaAzioni = document.createElement("td")
    const bottoneElimina = document.createElement("button")
    bottoneElimina.textContent = "Elimina"
 
    bottoneElimina.addEventListener("click", () => {
        dati.splice(indice, 1)
        salvaNelLocalStorage()
        mostraDatiSalvati()
    })
 
    cellaAzioni.appendChild(bottoneElimina)
    riga.appendChild(cellaAzioni)
    tabellaFeedback.appendChild(riga)
}
 
function salvaNelLocalStorage() {
    localStorage.setItem("listaFeedback", JSON.stringify(dati))
}
 
function mostraDatiSalvati() {
    tabellaFeedback.innerHTML = ""
    dati.forEach((elemento, indice) => {
        aggiungiRigaInTabella(elemento, indice)
    })
}
 