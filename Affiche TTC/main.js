'use strict'

// https://javascript.info/onload-ondomcontentloaded
document.addEventListener('DOMContentLoaded', function () {
    document.write("<p>L'utilisateur saisit un montant HT, le résultat TTC s'affiche en HTML.</p>")

    const TVA = 20
    let montantHT = 0

    // Attention ici un utilisateur peut entrer des lettres des chiffres negatifs
    do {
        montantHT = prompt("Saisissez un montant:")
    } while (isNaN(montantHT) || montantHT < 0)

    const result = calculerTTC(montantHT, TVA)

    document.write("<p>Le taux de la TVA est de:" + TVA + "%" + "</p>")
    document.write("<p>Le montant HT est:" + montantHT + "€" + "</p>")
    document.write("<p>Le montant de la TVA est:" + result.montantTVA + "€" + "</p>")
    document.write("<p>Le montant TTC est:" + result.totalTTC + "€" + "</p>")

})

// En mettant le calcul dans une fonction tu isoles la partie logique et peux donc la tester unitairement
// https://blog.xebia.fr/2013/03/21/introduction-aux-tests-unitaires-en-javascript/
function calculerTTC(montantHT, TVA) {
    montantHT = parseFloat(montantHT)
    const montantTVA = (montantHT * TVA) / 100
    const totalTTC = montantHT + montantTVA

    return {
        montantTVA,
        totalTTC
    }
}


