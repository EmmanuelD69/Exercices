'use strict'
const WeaponBaseDmg = 15
var dragonDmg = 10 + getRandom(0,25)
var absorb
var winnerDice
var diceDiffer
var bonus
var attackReal
var dmgReceived
var totalDmg


/* Déclaration des paramètres du jeu */
var personnages = {
    difficulte: "",
    name : [],
    health : [],
    armure : "",                   
    arme : "",
    degatChevalier :"",
}

/* Récupération du nom des personnages (joueur + dragon ennemi) */
function getName(){
    var playerName = prompt("Entrez votre nom:")
    personnages.name[0] = playerName
    console.log("le nom du chevalier est: " + playerName)
    var dragonName = prompt("Entrez le nom du dragon:")
    personnages.name[1] =dragonName
    console.log("le nom du dragon est: " + dragonName)
}

/* Choix du niveau de difficulté de la manche */
function getLevel(){
    var level
    do {
        level = prompt("choisissez la difficulté de la partie: facile, normal ou difficile").toLowerCase()
        personnages.difficulte = level   
    } 
    while (level != "facile" && level != "normal" && level != "difficile")
    console.log("le niveau choisi est: " + personnages.difficulte)
}

/* Choix de l'armmure */
function getArmor(){
    var armor 
    do {
        armor = prompt("choisissez votre armure entre: cuivre, fer ou magique").toLowerCase()
        personnages.armure = armor   
    } 
    while (armor != "cuivre" && armor != "fer" && armor != "magique")
    console.log("le type d'armure est: " + armor)
}

/* Choix de l'arme */
function getWeapon(){
    var weapon
    do {
        weapon = prompt("choisissez votre arme entre: bois, acier ou excalibur").toLowerCase()
        personnages.arme = weapon   
    } 
    while (weapon != "bois" && weapon != "acier" && weapon != "excalibur")
    console.log("L'arme choisi est: " + weapon)
}

/* Attribution d'un nombre aléatoire */
function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
} 

/* Caclul des points de vie en fonction du niveau de difficulté */
function getHP(){
    switch(personnages.difficulte){
        case "facile": 
            personnages.health[0] = getRandom(200, 250)
            personnages.health[1] = getRandom(150, 200)
        break
    
        case "normal": 
            personnages.health[0] = getRandom(200, 250)
            personnages.health[1] = getRandom(200, 250)
        break
    
        case "difficile": 
            personnages.health[0] = getRandom(150, 200)
            personnages.health[1] = getRandom(200, 250)
        break
    }
    console.log("Les points de vie de départ du chevalier sont: " + personnages.health[0])
    console.log("Les points de vie de départ du dragon sont: " + personnages.health[1])
}

/* Determine qui a prit l'initiative et attaque */
function diceRoll(){
    var chevalierDice = getRandom(0, 100)
    var dragonDice = getRandom(0, 100)
        diceDiffer = Math.abs(chevalierDice - dragonDice)
    if (chevalierDice > dragonDice){
        winnerDice = personnages.name[0]
    } 
    else if(chevalierDice < dragonDice){
        winnerDice = personnages.name[1]
    } 
    else{
        diceRoll()
    }   
    console.log("Le score au tirage au sort du chevalier est: " + chevalierDice)
    console.log("Le score au tirage au sort du dragon est: " + dragonDice)
    console.log("Le vainqueur est: " + winnerDice) 
    console.log("la différence en le roll du chevalier et du dragon est:" + diceDiffer)
}

/* Type d'attaque infligé par l'attaquant */
function attackType(){
    if(diceDiffer >= 90){
        bonus = 2
        attackReal = winnerDice + "viens de faire un coup critique"            
    } 
    else if(diceDiffer >= 70){
        bonus = 1.5   
        attackReal = winnerDice + "viens de provoquer une blessure importante"    
    }
    else if(diceDiffer >= 50){
        bonus = 1.25
        attackReal = winnerDice + "viens de provoquer une blessure sérieuse"            
    }
    else if(diceDiffer >= 30){
        bonus = 1.15    
        attackReal = winnerDice + "viens de provoquer une blessure légère"             
    }
    else if(diceDiffer >= 20){
        bonus = 1.05   
        attackReal = winnerDice + "viens de provoquer une coupure"          
    }
    else{
        bonus = 1
        attackReal = winnerDice + "viens de provoquer une égratignure"
    }
    console.log("Le bonus multiplicateur de l'attaquant est: " + bonus)
}

/* Calcul le montant des dégats absorbé par l'armure */
function getDmgReduc(){
    switch(personnages.armure){ 
        case "cuivre": 
            absorb = parseInt(totalDmg*15/100)
        break
    
        case "fer": 
           absorb = parseInt(totalDmg*30/100)
        break
    
        case "magique": 
            absorb = parseInt(totalDmg*60/100)
        break
    }
    console.log("Le total des dégats aborbés par l'armure est: " + absorb)
}

/* Calcul les dégats infligé par le vainqueur du diceRoll*/
function winnerDmg(){
    var knightDmg
    var random = getRandom(0,15)
    if (winnerDice == personnages.name[0]){
        switch(personnages.arme){ 
            case "bois": 
                knightDmg = parseInt(WeaponBaseDmg/2) + random
            break
            
            case "acier": 
                knightDmg = WeaponBaseDmg + random
            break
            
            case "excalibur": 
                knightDmg = (WeaponBaseDmg + random) + ((WeaponBaseDmg*100)/100)  
            break
        }
        console.log("Les pts d'attaque supplémentaires sont de: " + random)
        personnages.degatChevalier = knightDmg
        console.log("les dégats du chevalier sont: " + knightDmg)
        totalDmg = parseInt(personnages.degatChevalier * bonus)
        console.log("Les degats tout bonus inclus du chevalier sont: " + totalDmg)
    } 
    else if(winnerDice == personnages.name[1]){
        totalDmg = parseInt(dragonDmg * bonus)
        console.log("Les degats tout bonus inclus du dragon sont: " + totalDmg)
        getDmgReduc()
        totalDmg = totalDmg - absorb
        console.log("Les dégats réels infligés au chevalier par le dragon après protection par l'armure, sont: " + totalDmg)
    }
}

/* Mise à jour des points de vie après une attaque */
function updateHP(){
    if (personnages.difficulte == "facile" && winnerDice == personnages.name[0]){
        personnages.health[1] = personnages.health[1] - (totalDmg*1.5)
    }
    else if (personnages.difficulte == "normal" && winnerDice == personnages.name[0]){
        personnages.health[1] = personnages.health[1] - totalDmg
    }
    else if (personnages.difficulte == "difficile" && winnerDice == personnages.name[0]){
        personnages.health[1] = personnages.health[1] - (totalDmg/2)
    }
    else if (personnages.difficulte == "facile" && winnerDice == personnages.name[1]){
        personnages.health[0] = personnages.health[0] - (totalDmg/2)
    }
    else if (personnages.difficulte == "normal" && winnerDice == personnages.name[1]){
        personnages.health[0] = personnages.health[0] - totalDmg
    }
    else if (personnages.difficulte == "difficile" && winnerDice == personnages.name[1]){
        personnages.health[0] = personnages.health[0] - (totalDmg*1.5)
    }
    console.log("Le nouveau score de PV du Chevalier est: " + personnages.health[0])
    console.log("Le nouveau score de PV du Dragon est: " + personnages.health[1])
}
    

function settings(){
    getName()
    getLevel()
    getArmor()
    getWeapon()
    getHP()
}

function fight(){
    diceRoll()
    attackType()
    winnerDmg()
    updateHP()
}


function review(){
    var fightStats
    fightStats = document.write("")
}

function init(){
    var turn = 1
    settings()
    document.write("<h2>DEBUT DE LA PARTIE</h2><br>" + "<p>Dragon " + personnages.name[1] + ": " + personnages.health[1] + "PV</p>" + "<p>Chevalier " + personnages.name[0] + ": " + personnages.health[0] + "PV</p>" )
    do {
        turn++
        fight()        
        console.log("tour n°: " + turn)
    } while (personnages.health[0] >= 0 && personnages.health[1] >= 0)
}


init()



/* POUR RAPPEL DE LA FONCTION GETRANDOM
	//fonction qui retourne un nombre entier compris entre un minimum et un maximum
    //la fonction attend en paramètre l'information du minimum et du maximum et retourne le nombre aléatoire
    function getRandomInteger(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    var nb = getRandomInteger(20, 30)
    console.log(nb)
*/