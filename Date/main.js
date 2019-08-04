'use strict'

document.write("<p>Afficher dynamiquement la date du jour en HTML sous la forme “Nous sommes le Mardi 11 Février 2014”.</p>")
document.write("<a href='https://www.w3schools.com/jsref/jsref_obj_date.asp' target='_blank'>Date (source W3SCHOOLS)</a><br>")
document.write("<a href='https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date' target='_blank'>Date (Source Dev Mozilla.org)</a><br>")
document.write("<a href='https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/getDate' target='_blank'>Get Date</a><br>")
document.write("<a href='https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/getDay' target='_blank'>Get Day</a><br>")
document.write("<a href='https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/getFullYear' target='_blank'>Get Year</a><br>")
document.write("<a href='https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/getMonth' target='_blank'>Get Month</a><br>")

// TABLEAU AVEC LES JOURS DE LA SEMAINE (parce que le format standard de la semaine est basé sur le modèle anglophone, où le premier jour de la semaine est le dimanche, et non le lundi; on switch donc l'index 0 du tableau sur le Dimanche)
var semaine = new Array();
semaine[1] = "lundi"
semaine[2] = "mardi"
semaine[3] = "mercredi"
semaine[4] = "jeudi"
semaine[5] = "vendredi"
semaine[6] = "samedi"
semaine[0] = "dimanche"

// TABLEAU AVEC LES MOIS DE L'ANNEE
var mois = new Array();
mois[0] = "janvier"
mois[1] = "février"
mois[2] = "mars"
mois[3] = "avril"
mois[4] = "mai"
mois[5] = "juin"
mois[6] = "juillet"
mois[7] = "août"
mois[8] = "septembre"
mois[9] = "octobre"
mois[10] = "novembre"
mois[11] = "décembre"

// Récupération de la date du jour
var DDJ = new Date()
console.log(DDJ)

// Récupération du nombre du jour
var DayN = DDJ.getDate()
console.log(DayN)

// Récupération de l'année
var Year = DDJ.getFullYear()
console.log(Year)

// Récupération de la journée de la semaine
var Day = DDJ.getDay()
console.log(Day)

// Récupération du mois de l'année
var Month = DDJ.getMonth()
console.log(Month)

document.write("<p>Résultat de l'exercice:</p>")

// Affichage de la date du jour:
document.write("Nous sommes le " + semaine[Day] + " " + DayN + " " + mois[Month] + " " + Year)

/* déclaration des variables traduites en Français
var journée = Day
var moisM = Month
var année = Year
var journéeN = DayN

document.write("Nous sommes le " + semaine[journée] + " " + journéeN + " " + mois[moisM] + " " + année) */

