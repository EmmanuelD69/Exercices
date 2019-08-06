'use strict'

/* Déclaration de deux variables pour enregistrer la saisie de 2 nombres demandés à l'utilisateur */
do{
    var nb1 = parseInt(prompt("Entrez un premier nombre:"))
    var nb2 = parseInt(prompt("Entrez un deuxième nombre:"))
} while(isNaN(nb1) || isNaN(nb2))

/* Déclaration d'une fonction que j'appel "addition", elle aura 2 paramètres: "nb1" et "nb2" */
function addition(nb1,nb2){
    /* Déclaration d'une variable "total" qui va enregistrer le résultat de l'addition de "nb1" avec "nb2" */
    var total=nb1+nb2
    /* Déclaration d'un "return" qui enregistre la valeur de "total",
    return nous renverra le "total" lorsque la fonction "addition(nb1,nb2)" sera appelée dans notre code*/
    return total 
}

/* Création d'une variable pour enregistrer le résultat que la fonction "addition" va nous retourner */
var result = addition(nb1,nb2)
/* Affichage dans la fenêtre web du calcul et de son résultat */
document.write(result)