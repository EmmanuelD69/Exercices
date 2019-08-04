'use strict'

const CHARGES_PATRON = 23.0
var salaireNet
var chargesNormal
var chargesPrime
var salaireBrut = parseFloat(prompt("Veuillez entrer votre salaire Brut habituel:"))
console.log(salaireBrut)


// Je met en place un control avec "if", si la saisie n'est pas un nombre, alors l'utilisateur aura un message d'erreur.
// isNaN -> renvoie true SI PAS un nombre // renvoie false si c'est un nombre (NAN = Not A Number)
if(isNaN(salaireBrut)){
    document.write("La saisie est érronée, vous devez entrez des chiffres uniquement, pas de lettres...merçi")
}

// Si la réponse attendu est "true", alors on passe à la suite du programme:
else{

    // Déclaration de la variable "choix" qui va enregistrer la réponse de l'utilisateur, à savoir "true" s'il click sur le bouton "ok", ou "false" s'il click sur le bouton "annuler"
    var choix = window.confirm("Avez vous bénéficié d'une prime ce mois-ci?")
    console.log(choix)

    // Mise en place d'un Switch dont la valeur sera true ou false
    switch(choix){

        // choix = true, on calcul donc le montant net total avec la prime inclus dans le calcul.
        case true:
        var prime = parseFloat(prompt("Saisissez le montant de votre prime:"))
        console.log(prime)
        salaireBrut = salaireBrut + prime
        console.log(salaireBrut)
        salaireNet = parseFloat(salaireBrut - (salaireBrut * CHARGES_PATRON / 100))
        console.log(salaireNet)
        chargesPrime = salaireBrut - salaireNet

        chargesNormal = (salaireBrut - prime) * CHARGES_PATRON/100
        console.log(chargesNormal)

        document.write(">>>Avec Prime: <br>" + ">Pour un salaire brut avec prime de "+ salaireBrut + "€, vous bénéficiez d'un net de " + salaireNet + "€.<br>" + "Le montant des charges s'élève donc à " + chargesPrime + "€ au lieu des " + chargesNormal + "€ habituels." )
            break
        
        // choix = false, on calcul donc le montant total net habituel, sans prime.
        case false:
            salaireNet = parseFloat(salaireBrut - (salaireBrut * CHARGES_PATRON / 100))
            console.log(salaireNet)
            chargesNormal = salaireBrut - salaireNet

            document.write(">>>Sans Prime: <br>" + ">Pour un salaire brut de "+ salaireBrut + "€, vous bénéficiez d'un net de " + salaireNet + "€.<br>" + "Le montant des charges s'élève donc à " + chargesNormal + "€." )
            break
        
        // Dans le cas hypotétique ou l'on aurait ni un "true", ni un "false" enregistré dans la valeur "choix"
        default:
            document.write("Votre saisie est incorrecte.")
            break
    }
}