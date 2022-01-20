let eta = prompt('Quanti anni ha il passeggero?');

let km = prompt('Quanti km deve percorrere il passeggero?');

let prezzo;

if (eta < 18) {
    prezzo = ((km * 0.21) * 80 / 100) .toFixed(2)
    document.getElementById('prezzo').innerHTML = 'Hai diritto a uno sconto del 20%. Il prezzo del biglietto è : ' + prezzo + ' &euro;'
} else if (eta > 60) {
    prezzo = ((km * 0.21) * 60 / 100) .toFixed(2)
    document.getElementById('prezzo').innerHTML = 'Hai diritto a uno sconto del 40%. Il prezzo del biglietto è : ' + prezzo + ' &euro;'

} else {
    prezzo = (km * 0.21) .toFixed(2)
    document.getElementById('prezzo').innerHTML = 'Il prezzo del biglietto è ' + prezzo + '&euro;'
}

