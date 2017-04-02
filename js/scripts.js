// plik scripts.js

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newNames = 'Marian';

document.getElementById("calaTablicaKobiet").innerHTML = 'Baza kobiecych imion: ' + ' * ' + femaleNames + ' * ';
document.getElementById("calaTablicaMezczyzn").innerHTML = 'Baza męskich imion: ' + ' * ' + maleNames + ' * ';
document.getElementById("noweImie").innerHTML = 'Imię dodawane do bazy: ' + ' * ' + newNames + ' * ';

if (allNames.indexOf(newNames) === -1) {
    allNames.push(newNames);
    console.log(allNames);
    // return newNames + ' już jest w tablicy';
} else {
    console.log(newNames + ' już jest w tablicy');
}

// alert(allNames);
document.getElementById("allNames").innerHTML = 'Pełna baza imion prezentuje się w następujący sposób: ' + ' * ' + allNames + ' * ';
console.log(allNames);
