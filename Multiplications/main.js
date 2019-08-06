/* Déclaration des variables */
var saisie 
var calcul

/* Mise en place d'une condition pour éviter les saisies erronées */
while(isNaN(saisie) || saisie > 10 || saisie == 0){
    saisie = parseInt(prompt("entrez un nombre compris en 1 et 10:"))
}

/* affichage du nombre saisie, et validé par la condition du while */
document.write("Pour " + saisie + ", on a:<br>")

/* 
Boucle FOR qui se déclenche une fois la condition d'entrée respecté (aka avoir un nombre saisie, compris entre 1 et 10) 
La boucle est initialisé, par l'intermédiaire du "i", à 1 (on souhaite afficher la table de multiplication à partir de 1 et jusqu'à 10)
Tant que "i" sera inférieur à 11, on rajoutera 1 à la valeur de "i" à chaque cycle de boucle via "i++" (qui peut aussi s'écrire "i = i + 1").
1 cycle de boucle execute l'ensemble des lignes de code à l'intérieur de la boucle, 
puis on reviens au départ afin de MAJ la valeur de "i" et on recommence, jusqu'à ce que la condition ne soit plus vrai.
*/
for(var i=1; i < 11; i++ ){
    calcul = saisie * i
    document.write(saisie + "*" + i + " = " + calcul + ".<br>")
}