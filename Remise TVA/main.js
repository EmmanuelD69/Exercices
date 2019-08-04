'use stict'

//Déclaration de la TVA appliqué aux articles
const TVA = 20.0

//Déclaration des valeurs des variables "question"/"question2" en fonction de la réponse à la question posée par l'intermédiaire du prompt.
var question = prompt("Entrez un montant Hors taxe:")
    question=parseFloat(question) //Je transforme la chaine de charatère qui a été saisie, en un chiffre.
var question2 = prompt("Avez vous une réduction? réponse: [oui] ou [yes] sinon pas de réduc")

if(question2 == "oui" || question2 == "yes"){
    //Déclaration du taux de réduction appliqué au client si il répond [oui] ou [yes]
    var reduction = prompt("Entrez le pourcentage de votre reduction:")
        reduction=parseFloat(reduction) //Je transforme la chaine de charatère qui a été saisie, en un chiffre.

    //Calcul du montant de la réduction qui sera appliqué sur l'article
    var totalreduc = question * reduction / 100
    //Calcul du prix de l'article (sans TVA appliquée) avec la réduction client appliquée.
    var totalavecreduc = question - totalreduc
    //Calcul du montant de la TVA appliquée sur l'article après réduction client appliquée.
    var articleTVA2 = totalavecreduc * TVA / 100
    //Calcul du coût final de l'article, toutes taxes et réductions appliquées.
    var totalTVA2 = totalavecreduc + articleTVA2

    document.write("Votre article vous a couté: " + totalTVA2 + "€, " + "dont le détail est le suivant: <br>")
    document.write("Montant article avant réduction, sans TVA appliqué: " + question + "€ <br>")
    document.write("Montant de la réduction: " + totalreduc + "€ <br>")
    document.write("Une remise de " + reduction + "% a été appliquée")  
}
else{
    var articleTVA = question * TVA / 100
    var totalTVA = question + articleTVA
    document.write("Votre article vous a couté: " + totalTVA + "€, " + "dont le détail est le suivant: <br>")
    document.write("Montant de votre article avant application TVA: " + question + "€ <br>")
    document.write("Montant de la TVA sur votre article: " + articleTVA + "€ <br>") 
    document.write("Aucune remise n'a été appliquée")   
}

/* 
//FACTORISATION EN COURS DU CODE PRECEDENT 

// const TVA = 20.0

// var question = prompt("Entrez un montant Hors taxe:")
//     question=parseFloat(question)
// var question2 = prompt("Avez vous une réduction? réponse: [oui] ou [yes] sinon pas de réduc")

// if(question2 == "oui" || quesrtion2 == "yes"){
//     var reduction = prompt("Entrez le pourcentage de votre reduction:")
//         reduction=parseFloat(reduction)
//         question = question * reduction / 100
//     document.write("Montant de la réduction: " + question + "€ <br>")

//     // var totalavecreduc = question - totalreduc
//         question = (question * 100 / reduction) - question

//     // var articleTVA2 = totalavecreduc * TVA / 100
//         question = question * TVA / 100 

//     var totalTVA2 = totalavecreduc + articleTVA2
//         question = 
    
//     document.write("Votre article vous a couté: " + totalTVA2 + "€, " + "dont le détail est le suivant: <br>")
//     document.write("Montant article avant réduction: " + question + "€ <br>")

//     document.write("Une remise de " + reduction + "% a été appliquée")  
// }
// else{
//     var articleTVA = question * TVA / 100
//     var totalTVA = question + articleTVA
//     document.write("Votre article vous a couté: " + totalTVA + "€, " + "dont le détail est le suivant: <br>")
//     document.write("Montant de votre article avant application TVA: " + question + "€ <br>")
//     document.write("Montant de la TVA sur votre article: " + articleTVA + "€ <br>") 
//     document.write("Aucune remise n'a été appliquée")   
}
*/

/* CORRECTION PAR AUDREY
	const TVA = 20
	var montantHT, askRemise, montantTVA, montantTTC
    
    montantHT = parseFloat(prompt("Saisir montant HT"))
    
    askRemise = prompt("Voulez vous une remise")
    
    if(askRemise == "oui" || askRemise == "yes"){
    	var remise  = parseFloat(prompt("Saisir taux remise"))
        var montantRemise = montantHT * remise / 100
        montantHT = montantHT - montantRemise
    	document.write("<p>Remise appliquée<p>")
    } else {
    	document.write("<p>Aucune remise appliquée<p>")
    }
    
    montantTVA = montantHT * TVA / 100
    montantTTC = montantHT + montantTVA
    document.write("<p>Montant TTC : " + montantTTC + "<p>")
    */