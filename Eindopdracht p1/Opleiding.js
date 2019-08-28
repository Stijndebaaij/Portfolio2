/*
    Opdracht:       Eindopdracht 
    Auteur:         Stijn de Baaij
    Aanmaakdatum:   23-1-2018 16:21
    Bestandsnaam:   Eindopdracht.html
*/

var cijfers =["6.0", "5.4", "7,5", "7.0", "7.0"];

//Function voor het tonen van HTML
function showCijferhtml(){
    document.getElementById("cijfer1").innerHTML = cijfers[0];
    document.getElementById("punt1").style.display = "block";
}
//Function voor het tonen van Javascript
function showCijferjava(){
    document.getElementById("cijfer2").innerHTML = cijfers[1];
    document.getElementById("punt2").style.display = "block";
}
//Function voor het tonen van Hardware
function showCijferhard(){
    document.getElementById("cijfer3").innerHTML = cijfers[2];
    document.getElementById("punt3").style.display = "block";
}
//Function voor het tonen van Usability
function showCijferusa(){
    document.getElementById("cijfer4").innerHTML = cijfers[3];
    document.getElementById("punt4").style.display = "block";
}
//Function voor het tonen van Computertekenen
function showCijfercom(){
    document.getElementById("cijfer5").innerHTML = cijfers[4];
    document.getElementById("punt5").style.display = "block";
    document.getElementById("punt5").style.display = "block";
}
