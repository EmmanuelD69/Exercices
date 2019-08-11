
/* RAPPEL: Instruction "switch"
L'instruction switch évalue une expression et, selon le résultat obtenu et le "case" associé, exécute les instructions correspondantes.

switch (expression) {
  case valeur1:
    // Instructions à exécuter lorsque le résultat de l'expression correspond à valeur1
    instructions1;
    break;
  case valeur2:
    // Instructions à exécuter lorsque le résultat de l'expression correspond à valeur2
    instructions 2;
    break;
  ...
  case valeurN:
    // Instructions à exécuter lorsque le résultat de l'expression correspond à valeurN
    instructionsN;
    break;
  [default:
    // Instructions à exécuter lorsqu'aucune des valeurs ne correspond.
    instructions_def;
    break;
}

Exemple:
switch(choix){
    case "body":
    case "t-shirt": 
    //correspond à: (choix === "body" || choix === "t-shirt")
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

/* Création d'une première variable pour y stocker la 1ère valeur qui sera saisie par l'utilisateur 
La fonction parseFloat() permet de transformer une chaîne de caractères en un nombre.
Si le premier caractère de la chaîne ne peut pas être converti en un nombre, parseFloat() renverra NaN.*/
var nb1 = parseFloat(prompt("Entrez un premier nombre:"))
console.log(nb1)
/* Création d'une deuxième variable pour y stocker la 2ème valeur qui sera saisie par l'utilisateur */
var nb2 = parseFloat(prompt("Entrez un deuxième nombre:"))
/* Création de la variable "resultat" qui va nous permettre de stocker la valeur du total de notre calcul */
var resultat

/* isNaN -> renvoie true SI PAS un nombre / renvoie false si c'est un nombre (NAN = Not A Number)
Nous utilisons une boucle if pour mettre en place un condition de contrôle de la saisie:
Si les saisies par l'utilisateur ne correspondent pas à un nombre, alors un message s'affichera pour le lui indiquer */
if(isNaN(nb1) || isNaN(nb2)){
    document.write("La saisie d'un ou plusieurs de vos nombres est érronée")
}
/* Sinon, on propose le choix de l'opération avec une fenêtre popup, la saisie de ce choix est alors enregistrée dans la variable "choix" */ 
else{
    var choix = prompt("quelle opération de calcul souhaitez vous faire sur ces nombres? <br> (+)addition , (-)soustraction , (*)multiplication , (/)division")
    /* Mise en place d'un switch qui va nous permettre de comparer la valeur saisie et stockée dans "choix"
    Si la valeur correspond à l'un des "caseN", alors les instructions correspondantes au "caseN" sont executées. */
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