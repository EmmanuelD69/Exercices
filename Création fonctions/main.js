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
    /* je crée un "return" contenant le résultat de l'opération,
    return ne renverra ce résultat que lorsque la fonction sera appelé depuis l'extérieur */
    return total 
}

/* je crée une variable pour y enregistré le résultat que la fonction "addition" va me retourner */
var result = addition(nb1,nb2)
/* je crée un message contenant le résultat de la fonction "addition" */
document.write(result)