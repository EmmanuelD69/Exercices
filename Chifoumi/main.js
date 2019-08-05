'use strict'

/* Déclaration de la valeur saisie par le joueur humain. */
var user = prompt("Quel est votre choix entre: pierre, feuille, ou ciseaux?")
    user = user.toLowerCase()
    console.log(user)
    if(user != "pierre" && user != "feuille" && user != "ciseaux"){
    alert("erreur : saisir pierre, feuille ou ciseau")}
var computer = Math.random()
console.log(computer)

if(computer <= 0.33){
    computer = "pierre"
}
else if(computer <= 0.66){
    computer = "feuille"
}
else{
    computer = "ciseaux"
}
console.log(computer)

if(user === computer){
    document.write("L'ordinateur a choisi la même chose que vous, c'est un match nul!")
}
else{
    switch(user){

        case "pierre": 
        if(computer === "feuille"){
            document.write("L'ordinateur à choisi " + computer + ", vous avez perdu!")
        }
        else{
            document.write("L'ordinateur à choisi " + computer + ", vous avez gagné!")
        }
        break
    
        case "feuille": 
        if(computer === "ciseaux"){
            document.write("L'ordinateur à choisi " + computer + ", vous avez perdu!")
        }
        else{
            document.write("L'ordinateur à choisi " + computer + ", vous avez gagné!")
        }
        break
    
        case "ciseaux": 
        if(computer === "pierre"){
            document.write("L'ordinateur à choisi " + computer + ", vous avez perdu!")
        }
        else{
            document.write("L'ordinateur à choisi " + computer + ", vous avez gagné!")
        }
        break
    }
}

