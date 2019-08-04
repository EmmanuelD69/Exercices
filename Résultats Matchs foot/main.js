'strict'

// Déclaration de deux variables qui vont chacunes contenir le nom d'une équipe
var equipe1 = prompt("Entrez le nom de la première équipe:")
var equipe2 = prompt("Entrez le nom de la deuxième équipe:")

// Affichage dans la fenêtre web du texte de présentation des équipes qui vont s'affronter
document.write("Aujourd'hui, " + equipe1 + " affronte " + equipe2 + "<br>")

// Création de deux variables qui vont se voir attribué chacune, à tour de role, un nombre aléatoire entre 0 et 5.
// La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre.
/* La fonction Math.random() renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle [0, 1[ (ce qui signifie que 0 est compris dans l'intervalle mais que 1 en est exclu) selon une distribution approximativement uniforme sur cet intervalle. Ce nombre peut ensuite être multiplié afin de couvrir un autre intervalle.*/
// Nous aurons donc ici un nombre aléatoire compris entre 0 et 6 mais dont le nombre 6 est exclu.
var score1 = Math.floor(Math.random() * 6);
console.log(score1)
var score2 = Math.floor(Math.random() * 6);
console.log(score2)

// Affichage dans la fenêtre web du match et de son résultat
document.write(">### Match " + equipe1 + " " + equipe2 + " ###<<br>")
document.write(equipe1 + " " + score1 + "-" + score2 + " " + equipe2 + "<br>")

// Interprétation du résultat en fonction du score de chaque équipe, si le score est identique, il y'a alors match nul.
if(score1 > score2){
    document.write(equipe1 + " à gagné")
}
else if(score1 < score2){
    document.write(equipe2 + " à gagné")
}
else{
    document.write("il n'y a pas de vainqueur, " + equipe1 + " et " + equipe2 + " on fait match nul!")
}