'use strict'

/* RAPPEL SUR LES OPERATEURS DE COMPARATION:

    == -> comparaison de valeur
    === -> comparaison de valeur et de type
    > -> strictement supérieur à
    < -> strictement inférieur à
    >= -> supérieur ou égal à
    <= inférieur ou égal à
    != -> différent de

*/

var age = prompt("Saisir votre âge")
    
//variables booleennes
var trenteAns = (age == 30) 
var estMajeur = (age >= 18)
var aCentAns =  (age != 100)
var estCentenaire = (age < 100)
//Le résultat obtenu sur la comparaison entre paranthèse sera un booléen, à savoir "True" si la comparaison est vraie ou "False" si la comparaison est fausse.
    
//console.log(trenteAns)

document.write("<p>L'utilisateur a 30 ans : " + trenteAns + "</p>")
document.write("<p>L'utilisateur est majeur : " + estMajeur + "</p>")
document.write("<p>L'utilisateur n'a pas 100 ans : " + aCentAns + "</p>")
document.write("<p>L'utilisateur n'est pas centenaire : " + estCentenaire + "</p>")



//INTRODUCTION AU IF/ELSE IF/ELSE
if(age == 30){
    document.write("<p>L'utilisateur a 30 ans</p>")
} else {
    document.write("<p>L'utilisateur n'a pas 30 ans</p>")
}

if (age >= 18) {
    document.write("<p>L'utilisateur est majeur</p>")
} else {
    document.write("<p>L'utilisateur n'est pas majeur</p>")
}


var prenom = "Charlotte"

if (prenom == "Julie") {
    document.write("<p>L'utilisateur s'appelle Julie</p>")
} else if (prenom == "Charlotte"){
    document.write("<p>L'utilisateur s'appelle Charlotte</p>")
} else {
    document.write("<p>L'utilisateur ne s'appelle ni Julie ni Charlotte</p>")
}