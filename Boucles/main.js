   
    /*  INTRODUCTION AUX BOUCLES EN JAVASCRIPT:

    BOUCLE >>> DO ... WHILE <<<

	do {
    	instructions...                                 Structure de base d'une boucle WHILE, on lance une première fois les instruction et seulement si la condition est validé, on continu.   
    } while(condition)  

    Exemple:
	var saisie
	do {
    	saisie = prompt("Saisir chiffre")               Tant que la saisie n'est pas un nombre, il sera demandé de rentrer un nombre.
    } while(isNaN(saisie))
    

    BOUCLE >>> WHILE <<<
    
    while(condition){
    	instructions...                                Structure de base d'une boucle WHILE, tant que la condition n'est pas validé, rien ne se passe.
    }
    
    
    BOUCLE >>> FOR <<<
    
    for(init compteur ; condition ; MAJ compteur) {
    	instructions...                                 Sturcture de base d'une boucle FOR, tant qu'on a pas atteint notre condition, la boucle se poursuit.
    }
    
    Exemple 1:
    for (var cpt = 0; cpt < 10; cpt++){
    	console.log(cpt)
    }

        var cpt = 0
    for (; cpt < 10;){
    	console.log(cpt)        Autre manière de l'écrire
        cpt++
    }
    
    
    Exemple 2:
    >>> Déclaration d'une variable contenant un tableau <<<
    var semaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]

    >>> Déclaration d'une variable qui va renvoyer la longueur du tableau que l'on vient de définir avec la variable "semaine"<<<
    var longueurTab = semaine.length  

    >>> mise en place d'une boucle FOR pour nous permettre d'afficher le contenu du tableau <<<
    
    1-Initialisation de la boucle avec une variable "i" que l'on met à 0 
    2-Tant que "i" sera inférieur à la longueur du tableau(semaine)
    3-On rajoute 1 à la valeur de "i"
    

    for(var i = 0; i < longueurTab; i++){
        //afficher le jour de la semaine dans la console
        console.log(semaine[i]) 
    }


    Exercice 3: 

    En 3 temps  >>> Afficher toutes les phrases
                >>> Afficher toutes les phrases et leurs longueur
                >>> Afficher toutes les phrases et leurs longueur + indiquer celle qui est la plus longue et sa longueur.
    */

/* Déclaration d'une variable contenant un tableau de phrases (strings) */
var phrases =
[
    "Le monde flatte l'éléphant et piétine la fourmi.<br>",
    "Que la main de celui qui t'offre un présent ne le regrette jamais.<br>",
    "Ce monde ressemble à la mer ; celui qui ne sait pas nager va au fond et se noie.<br>",
    "On n'est pas sûr d'aimer et de plaire toujours.<br>",
    "Le monde semble sombre quand on a les yeux fermés.<br>",
    "Que l'œuf ne combatte pas avec la pierre.<br>",
    "Garde-toi de te mêler de ce qui ne te regarde pas.<br>",
    "Si tu n'écoutes pas les conseils des femmes, tu manqueras de riz de semence.<br>",
    "Ne fatigue pas tes amis par de fréquentes visites, vois-les de temps en temps quand tu penses à eux.<br>",
    "Pour juger d'un procès, il faut connaître la loi ; pour parler d'une affaire, il faut en connaître le fond.<br>",
    "Mieux vaut avoir du bon sens que de se torturer a étudier la loi.<br>",
    "Qui ne travaille pas l'été, l'hiver se suce les ongles.<br>",
    "L'oiseau choisit l'arbre sur lequel il veut se reposer, mais l'arbre ne peut choisir l'oiseau.<br>",
    "Il faut commencer par se corriger soi-même avant de vouloir corriger les autres.<br>",
    "Un arbre seul ne fait pas une forêt.<br>",
    "Qu'il soit noir, qu'il soit blanc, chaque chèvre aime son chevreau.<br>",
    "On s'enrichit plus vite en osant qu'en attendant.<br>",
    "Qui croit avoir assez de vertu n'en a guère.<br>",
    " À celui qui ose, vienne l'ours.<br>",
    "On n'aime rien tant que le fruit défendu.<br>",
    "Le bonheur ne se trouve pas au sommet de la montagne, mais dans la façon de la gravir.<br>",
    "Si vous fermez la porte à toutes les erreurs, la vérité restera dehors.<br>",
    "La semaine du travailleur a sept jours, la semaine du paresseux a sept demains.<br>",
    "L'homme regarde le miroir, le miroir regarde l'homme.<br>",
    "N'accuse pas le puits d'être trop profond quand ta corde est trop courte.<br>",
    "Quel est le bruit d'une seule main qui applaudit?<br>",
    "On ne peut empêcher un coeur d'aimer.<br>",
    "La courbe ne peut inclure la ligne droite.<br>",
    "Pour savoir si l'eau d'un bol est chaude ou froide, il faut y mettre le doigt... Il ne sert à rien de discuter.<br>",
    "Aimant on n'est point sage, et sage on n'aime plus.<br>",
    "Il n'y a pas que les aigles qui atteignent les sommets. Les escargots aussi, mais ils en bavent.<br>",
    "La peur mène à la colère, la colère à la haine et la haine au côté obscur.<br>",
    "Si en travaillant l'on s'enrichissait les ânes porteraient le bât d'or.<br>",
    "La voie est sous vos pieds.<br>",
    "Qui excelle au tir ne touche pas le centre de la cible.<br>",
    "On n'est pas sûr d'aimer et de plaire toujours.<br>",
    "Les difficultés et les obstacles, s’ils sont bien compris et utilisés, peuvent devenir des sources de force inattendues.<br>",
    "Dans tous les cas, l’espérance mène plus loin que la crainte.<br>",
    "Lorsqu'il n'y a plus rien à faire, que faites-vous?<br>",
    "Qui t'aime te fera pleurer.<br>",
    "C’est le propre de l’homme de se tromper; seul l’insensé persiste dans son erreur.<br>",
    "Pour voler avec les aigles, il faut arrêter de nager avec les canards.<br>",
    "Chaque coup de colère est un coup de vieux; chaque sourire est un coup de jeune.<br>"
]

/* Création d'une valeur pour y enregistrer la longueur du tableau (combien d'index contient le tableau) */
var longueurTab = phrases.length  
/* Création d'une variable pour enregistrer le nombre de charactères que contient la phrase examiné. */
var longueurline
/* Création d'une variable (mise à zéro) pour y enregistrer le nombre de charactère que compte la phrase la plus longue */
var highest = 0
/* Création d'une variable pour y enregistrer l'index du tableau contenant la phrase la plus longue. */
var line

document.write("<h1>Afficher toutes les phrases et leurs longueur, contenues dans une variable contenant un tableau  + indiquer celle qui est la plus longue et sa longueur.</h1>")

/*
1- J'initialise ma boucle FOR avec une variable "i" mise à zéro
2- On boucle tant que la valeur de "i" est inférieur à longueur du tableau
3- à chaque fin de cycle de la boucle, on rajoute 1 à la valeur de "i"
*/
for(var i = 0; i < longueurTab; i++){
    /* J'attribue à la variable longueurline la valeur correspondant au nombre de charactères contenu dans la phrase se trouvant à l'index "i" situé dans le tableau "phrases". */
    longueurline = phrases[i].length
    /* J'affiche à l'écran le contenu se situant à l'index [i] du tableau "phrases", puis j'indique avec la variable "longueurline" le nombre de charactères contenus dans cette phrase. */
    document.write(phrases[i] + "cette phrase contient " + longueurline + " charactères.<br>") 

    /*
    -Je connais la longueur de la phrase, et je souhaite trouver parmis toutes les phrases du tableau, celle qui contient le plus de charactères...
    -Je compare donc toutes ces phrases par leurs longueurs(longueurline) avec une boucle "while"
    -j'ai crée une variable "highest" en amont, que j'ai initialisé à 0 pour donner une base de comparaison avec "longeurline"
    -Tant que la valeur contenu dans "highest" sera inférieur à celle de "longueurline", j'enregistrerai dans "highest" la valeur la plus grande.
    -Tant que ma valeur contenu dans "highest" sera inférieur à celle de "longueurline", j'enregistrerai dans ma variable "line" l'index correspondant à la phrase la plus longue.
    -Ces valeurs peuvent évoluer en fonction de chaques phrases analysés, c'est lorsque il n'y a plus aucunes phrases à analyser que je sort de ma boucle while (i n'est plus inférieur à longueurtab).
    */
    while(highest < longueurline){
        highest = longueurline
        line = phrases[i]
    }
}

/* J'affiche la phrase la plus longue, et le nombre de charactères qui la compose. */
document.write("<p>la phrase la plus longue est: </p>" + line + "<p> Elle contient " + highest + " charactères. </p>")
