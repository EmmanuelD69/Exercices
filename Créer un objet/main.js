'use stict'

//Création de l'objet 'voiture' dans lequel on indique 4 propriétés, contenant des valeurs qui peuvent être un tableau de valeurs ou une valeur unique.
var voiture = {
    marques : 'Renault', 
    annees : 2010,
    BuyDate : new Date('3/3/2010'),
    passagers : ['Pierre', 'Paul', 'Jacques', 'Noemie', 'Bonny', 'Clyde']
}

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

// Récupération de la date d'achat du véhicule.
var Dav = voiture.BuyDate
console.log(Dav)

// Récupération du nombre du jour
var DayN = Dav.getDate()
console.log(DayN)

// Récupération de l'année
var Year = Dav.getFullYear()
console.log(Year)

// Récupération de la journée de la semaine
var Day = Dav.getDay()
console.log(Day)

// Récupération du mois de l'année
var Month = Dav.getMonth()
console.log(Month)

//Affichage des valeurs contenues dans les propriétés:
document.write("La marque du véhicule est: " + '<p style="color: blue">' + voiture.marques + "</p>" + "<br>")
document.write("L'année de construction du véhicule est: " + '<p style="color: blue">'  + voiture.annees + "</p>" + "<br>")
document.write("Le véhicule a été acheté le: <br>" + '<p style="color: blue">' + semaine[Day] + " " + DayN + " " + mois[Month] + " " + Year + "</p>" + "<br>")
document.write("La liste des passagers du véhicule est: " + '<p style="color: blue">'  + voiture.passagers[0] + "<br>" + voiture.passagers[1] + "<br>" + voiture.passagers[2] + "<br>" + voiture.passagers[3] + "<br>" + voiture.passagers[4] + "<br>" + voiture.passagers[5] + "</p>")