// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

const cambiaTitolo = function () {
let h1Mod = document.querySelector("h1")
h1Mod.textContent = "- Affiliate Shop -";
}

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

const cambiaColoreSfondo = function (colore) {
    let sfondoPagina = document.querySelector("body")
    sfondoPagina.style.backgroundColor = colore
}

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio

const indirizzoMod = function () {
    let indirizzo = document.querySelector(".indirizzo")
    indirizzo.textContent = "Indirizzo: Riozzo (MI), via Briganti 45, 20070";
}

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

const aggiungiClass = function () {
    let tuttiGliA = document.querySelectorAll("a")
    for (let i = 0; i < tuttiGliA.length; i++) {
        let singoloA = tuttiGliA[i]
    singoloA.classList.add("classe-link")
    }
}

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

const toggleImg = function() {
    let tutteLeImg = document.querySelectorAll("img")
    for (let i = 0; i < tutteLeImg.length; i++) {
    let singolaImg = tutteLeImg[i]
    singolaImg.classList.toggle("img-on-off")
    }
}

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata


