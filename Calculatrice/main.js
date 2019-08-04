
/* EXEMPLE AUDREY
var choix = "pantalon"
    
if(choix === "t-shirt" || choix === "body"){
    ...
} else if (choix === "pantalon"){
    ...
} else if (choix === "chaussures"){
    ...
} else {
    ...
}

switch(choix){
    case "body":
    case "t-shirt": //choix === "body" || choix === "t-shirt"
        ... instructions
        break
    case "pantalon":
        ... instructions
        break
    case "chaussures":
        ... instructions
        break
    default:
        ... instructions
        break
}*/

'use strict'

var nb1 = parseFloat(prompt("Entrez un premier nombre:"))
console.log(nb1)
var nb2 = parseFloat(prompt("Entrez un deuxième nombre:"))
var resultat

// isNaN -> renvoie true SI PAS un nombre // renvoie false si c'est un nombre (NAN = Not A Number)
if(isNaN(nb1) || isNaN(nb2)){
    document.write("La saisie d'un ou plusieurs de vos nombres est érronée")
}
else{
    var choix = prompt("quelle opération de calcul souhaitez vous faire sur ces nombres? <br> (+)addition , (-)soustraction , (*)multiplication , (/)division")
    switch(choix){
        case "+":
        case "addition":
            resultat = (nb1 + nb2)
            document.write("Le résultat de calcul est: " + nb1 + "+" + nb2 +"= " + resultat)
            break
    
        case "-":
        case "soustraction":
            resultat = (nb1 - nb2)
            document.write("Le résultat de calcul est: " + nb1 + "-" + nb2 +"= " + resultat)
            break
    
        case "*":
        case "multiplication":
            resultat = (nb1 * nb2)
            document.write("Le résultat de calcul est: " + nb1 + "*" + nb2 +"= " + resultat)
            break
    
        case "/":
        case "division":
            if(nb1== 0 || nb2 == 0){
                document.write("on ne peux pas diviser par 0")
                break
            }
            resultat = (nb1 / nb2)
            document.write("Le résultat de calcul est: " + nb1 + "/" + nb2 +"= " + resultat)
            break
    
        default:
            document.write("veuillez saisir l'un des calcul proposé")
            break
    }
}

/* CORRECTION PAR AUDREY

*/