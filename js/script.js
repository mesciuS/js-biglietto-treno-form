// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. 
// La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). 
// Questo richiederà un minimo di ricerca.

/* chiedere e memorizzare i km da percorrere
- chiedere e memorizzare l'età del passeggero
- calcoliamo il prezzo base del biglietto (km * 0,21)
? SE l'età è < a 18 anni
    ° finalPrice = startingPrice - startingPrice * 0,20
: ALTRIMENTI SE è > dìa 65 anni
    ° finalPrice = startingPrice - startingPrice * 0,40
: ALTRIMENTI 
    ° finalPrice = startingPrice
- formatta finalPrice con due decimali
- stampa finalPrice */ 


// - Il numero di chilometri da percorrere

let tripKM = document.getElementById("tripKM")

// - Età del passeggero

let userAge = document.getElementById("userAge");

// - il prezzo del biglietto è definito in base ai km (0.21 € al km)

let pricePerKM = 0.21;
let finalPrice;

// il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo

// finalPrice = finalPrice.toFixed(2); 

// pulsante

let userInput = document.getElementById("userInput")

// funzionamento pulsante

userInput.addEventListener("click", function() {

    let startingPrice = parseInt(tripKM.value) * pricePerKM

    if(userAge.value < 18) {
        finalPrice = startingPrice - startingPrice * 0.2
        console.log(finalPrice);
    }
     
    else if(userAge.value > 65) {
        finalPrice = startingPrice - startingPrice * 0.4
        console.log(finalPrice)
    }

    else {
        finalPrice = startingPrice
        console.log(finalPrice)
    }

})

userCancel.addEventListener("click", function() {

    document.getElementById("userAge").value = "";
    document.getElementById("tripKM").value = "";
})


