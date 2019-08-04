'use strict'

document.write("<p>L'utilisateur saisit un montant HT, le résultat TTC s'affiche en HTML.</p>")

const TVA = 20.0
var montantHT = prompt("Saisissez un montant:")
    montantHT = parseFloat(montantHT)

var montantTVA = (montantHT*TVA)/100
    // montantTVA = parseFloat(montantTVA)   pas nécéssaire, c'est à la saisie par l'utilisateur qu'il faut indiquer le type (entier ou charactères)
    // console.log(montantTVA)

var totalTTC = (montantHT + montantTVA)
    // totalTTC = parseFloat(totalTTC)

document.write("<p>Le taux de la TVA est de:" + TVA + "%" + "</p>")
document.write("<p>Le montant HT est:" + montantHT + "€" + "</p>")
document.write("<p>Le montant de la TVA est:" + montantTVA + "€" + "</p>")
document.write("<p>Le montant TTC est:" + totalTTC + "€" + "</p>")



