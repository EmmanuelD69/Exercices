'use strict'
const HP1 = 200
const HP2 = 150
var level
var armor 
var weapon
var winnerDice

/* Déclaration des paramètres du jeu */
var personnages = {
    difficulte: [],
    name : [],
    health : [],
    armure : [],                   
    arme : [],
}

/* Récupération du nom des personnages (joueur + dragon ennemi) */
function getName(){
    var playerName = prompt("Entrez votre nom:")
    personnages.name[0] = playerName
    var dragonName = prompt("Entrez le nom du dragon:")
    personnages.name[1] =dragonName
}

/* Choix du niveau de difficulté de la manche */
function getLevel(){
    do {
        level = prompt("choisissez la difficulté de la partie: facile, normal ou difficile").toLowerCase()
        personnages.difficulte = level   
        console.log(level)
    } 
    while (level != "facile" && level != "normal" && level != "difficile")
}

/* Choix de l'armmure */
function getArmor(){
    do {
        armor = prompt("choisissez votre armure entre: cuivre, fer ou magique").toLowerCase()
        personnages.armure = armor   
        console.log(armor)
    } 
    while (armor != "cuivre" && armor != "fer" && armor != "magique")
}

/* Choix de l'arme */
function getWeapon(){
    do {
        weapon = prompt("choisissez votre arme entre: bois, acier ou excalibur").toLowerCase()
        personnages.arme = weapon   
        console.log(weapon)
    } 
    while (weapon != "bois" && weapon != "acier" && weapon != "excalibur")
}

    
/* Caclul des points de vie en fonction du niveau de difficulté */
function getHP(level){
    switch(level){
        case "facile": 
            var joueurHP = Math.floor(Math.random() * 51) + HP1;
            personnages.health[0] = joueurHP
            var dragonHP = Math.floor(Math.random() * 51) + HP2;
            personnages.health[1] = dragonHP
        break
    
        case "normal": 
            var joueurHP = Math.floor(Math.random() * 51) + HP1;
            personnages.health[0] = joueurHP
            var dragonHP = Math.floor(Math.random() * 51) + HP1;
            personnages.health[1] = dragonHP
        break
    
        case "difficile": 
            var joueurHP = Math.floor(Math.random() * 51) + HP2;
            personnages.health[0] = joueurHP
            var dragonHP = Math.floor(Math.random() * 51) + HP1;
            personnages.health[1] = dragonHP
        break
    }
}


function init(){
    getName()
    getLevel()
    getArmor()
    getWeapon()
    getHP(level)
    document.write("<h2>DEBUT DE LA PARTIE</h2><br>" + "<p>Dragon " + personnages.name[1] + ": " + personnages.health[1] + "PV</p>" + "<p>Chevalier " + personnages.name[0] + ": " + personnages.health[0] + "PV</p>" )
    console.log(personnages)
}










// /* déroulement d'un tour */
// do {
//     diceRoll()
//     attackDmg()
//     substractHP()
//     review()
// } while (personnages.health[0] >= 1 || personnages.health[1] >= 1 )

function diceRoll(){
    var chevalierDice = Math.floor(Math.random() * 101)
    console.log(chevalierDice)
    var dragonDice = Math.floor(Math.random() * 101)
    console.log(dragonDice)
    if (chevalierDice > dragonDice){
        winnerDice = personnages.name[0]
    } 
    else if(chevalierDice < dragonDice){
        winnerDice = personnages.name[1]
    } 
    else{
        diceRoll()
    }    
}
console.log(winnerDice)

/* POUR RAPPEL DE LA FONCTION GETRANDOM
	//fonction qui retourne un nombre entier compris entre un minimum et un maximum
    //la fonction attend en paramètre l'information du minimum et du maximum et retourne le nombre aléatoire
    function getRandomInteger(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    var nb = getRandomInteger(20, 30)
    console.log(nb)
*/
    