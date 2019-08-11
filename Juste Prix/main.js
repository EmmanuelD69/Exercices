const JUSTE_PRIX = Math.floor(Math.random() * 501)
console.log(JUSTE_PRIX)
var useroffer 

    
// do{
//     useroffer = parseInt(prompt("Vous devez trouver le juste prix! Entrez un nombre:"))
//     console.log(useroffer)
//     document.write("essaye encore:")
// }while(JUSTE_PRIX != useroffer)

while(JUSTE_PRIX != useroffer){
    useroffer = parseInt(prompt("Vous devez trouver le juste prix! Entrez un nombre:"))
    console.log(useroffer)
}
// document.write("perdu")

document.write("Fantastique!! tu as trouvé le juste prix :D tu peux aller maintenant jouer au Loto!")