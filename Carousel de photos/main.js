/* Au chargement du DOM, on initialise tout ce qui va être en rapport avec la page HTML de notre carousel */

document.addEventListener('DOMContentLoaded', function(){
    state.index = 0
    state.slide = null
    
    /* Gestionnaires d'événement */
    document.querySelector("#toolbar-toggle").addEventListener('click', onToolbarToggle)
    document.querySelector("#slider-next").addEventListener('click', onSliderGoToNext)
    document.querySelector("#slider-previous").addEventListener('click', onSliderGoToPrevious)
    document.querySelector("#slider-random").addEventListener('click', onSliderGoToRandom)
    document.querySelector("#slider-toggle").addEventListener('click', onSliderToggle)

    /*Fonction qui charge la photo dans le HTML à partir de l'index stocké dans state */
    refreshSlider()
})

/* Variable contenant un tableau d'objets ayant 2 propriétés chacun (image / legend) */
var photos = [
    { image: 'images/1.jpg', legend: 'Street Art' },
    { image: 'images/2.jpg', legend: 'Fast Lane' },
    { image: 'images/3.jpg', legend: 'Colorful Building' },
    { image: 'images/4.jpg', legend: 'Skyscrapers' },
    { image: 'images/5.jpg', legend: 'City by night' },
    { image: 'images/6.jpg', legend: 'Tour Eiffel la nuit' }
]

/* Un objet qui va contenir toutes les infos du carousel */
var state = new Object() 

/*  Variables pour la fonction getRandom()*/
var min = 0
var max = photos.length - 1

/* Attribution d'un nombre aléatoire */
function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
} 

/* Variable qui s'occupe d'afficher la photo et le texte correspondant au "state.index" en cours. 
1-Selection de l'élément HTML "figcaption" se trouvant dans l'élément HTML ayant la class "slider"
2-Selection de l'élément HTML "img" se trouvant dans l'élément HTML ayant la class "slider"
3-Attribution d'un contenu "texte" correspondant à la valeur contenue dans le tableau d'objets "photos", dans la propriété "legend", à l'index ayant pour valeur actuelle, la valeur stocké dans l'objet "state" à la prorpriété "index"
4-Attribution d'une valeur "src" correspondant à la valeur contenue dans le tableau d'objets "photos", dans la propriété "image", à l'index ayant pour valeur actuelle, la valeur stocké dans l'objet "state" à la prorpriété "index"
*/
function refreshSlider(){
    /* state.index -> contient l'ID de l'image qu'on souhaite afficher */
    var caption = document.querySelector('.slider figcaption') /* 1 */
    var img = document.querySelector('.slider img') /* 2 */
    caption.textContent = photos[state.index].legend /* 3 */
    img.src = photos[state.index].image /* 4 */
    
   /* 
   document.querySelector('.slider figcaption').textContent = photos[state.index].legend (version courte)
   document.querySelector('.slider img').src = photos[state.index].image
   */ 
}


/* Cette fonction permet de faire apparaitre ou disparaitre le le menu du slider, avec une petite animation sur la flèche. 
.classList permet d'agir sur la class de l'élément qui a été sélectionné. */ 
function onToolbarToggle(){
    var icon = document.querySelector("#toolbar-toggle i")
    document.querySelector(".toolbar ul ").classList.toggle('hide')
    icon.classList.toggle('fa-arrow-right')
    icon.classList.toggle('fa-arrow-down')
    icon.classList.toggle('animated')
    icon.classList.toggle('rotateInDownLeft')
}

/* Cette fonction agie sur le bouton "next" du carousel, et permet de faire défiler les images dans un ordre croissant. 
1-Ajouter +1 à la propriété "index" de l'objet "state"
2-Si la propriété "index" de l'objet "state" est égal à la taille du tableau "photos"
3-On met la valeur de la prorpiété "index" de l'objet "state" à 0 (première photo)
4-Mise a jour de la photo sur le slider, en fonction de la nouvelle valeur de la propriété "index"
*/
function onSliderGoToNext(){
    state.index++                       /* 1 */
    if(state.index == photos.length){   /* 2 */
        state.index = 0                 /* 3 */
    }
    refreshSlider()                     /* 4 */
}

/* Cette fonction agie sur le bouton "previous" du carousel, et permet de faire défiler les images dans un ordre decroissant. 
1-Soustraire 1 à la propriété "index" de l'objet "state"
2-Si la propriété "index" de l'objet "state" est inferieur à 0
3-On met la valeur de la prorpiété "index" de l'objet "state" à 5 (dernière photo)
4-Mise à jour de la photo sur le slider, en fonction de la nouvelle valeur de la propriété "index" contenue dans l'objet "state"
*/
function onSliderGoToPrevious(){
    state.index--               /* 1 */
    if(state.index < 0){        /* 2 */
        state.index = 5         /* 3 */
    }
    refreshSlider()             /* 4 */
}

/* Cette fonction agie sur le bouton "image aléatoire" du carousel, et permet de faire défiler les images dans un ordre aléatoire. 
1-Création d'une variable qui va permettre de stocker un nombre choisi aléatoirement entre les valeurs contenues dans les variables "min" et "max"
2-(Boucle WHILE) Tant que la valeur contenue dans la variable "rand" est égale à la valeur contenue dans la propriété "index" de l'objet "state"
3-Tirage d'une nouvelle valeur aléatoire que l'on va stocker dans la variable "rand"
4-Enregistrement de la valeur de la variable "rand" dans la propriété "index" de l'objet "state"
5-Mise à jour de la photo sur le slider, en fonction de la nouvelle valeur de la propriété "index" contenue dans l'objet "state"
*/
function onSliderGoToRandom(){
    var rand = getRandom(min, max)      /* 1 */
    while(rand == state.index){         /* 2 */
        rand = getRandom(min, max)      /* 3 */
    }
    state.index = rand                  /* 4 */
    refreshSlider()                     /* 5 */
}

/* Cette fonction agie sur le bouton "play/pause" du carousel, et permet de faire défiler les images automatiquement avec un interval de temps entre chaque photos. 
1-Selection de l'élément HTML "i" se trouvant dans l'élément HTML ayant l'ID "slider-toggle"
2-Grace à "classList" on va pouvoir intéragir avec la class de l'élément HTML qui est selectionné par la variable "icon", on  ajoute à sa class la valeur "fa-play" si celle ci n'existe pas, sinon on la lui supprime (c'est ce que fait .toggle, cela ajoute ou supprime en fonction de la présence ou non de la valeur indiqué entre paranthèses)
3-On ajouter/supprime "fa-pause" dans la class selectionnée par "icon"
4-On ajouter/supprime "animated" dans la class selectionnée par "icon"
5-On ajouter/supprime "heartBeat" dans la class selectionnée par "icon"
6-Si la valeur contenue dans la propriété "slide" de l'objet "state" est égale à "null"
7-On enregistre pour valeur de la propriété "slide" dans l'objet "state", un appel à la fonction "onSliderGoToNext" de manière répétée, avec un délai fixé à 1s (1000ms) entre chaque appel.
8-"This" contient la balise qui a déclenché l'événement, on lui indique de changer la valeur de son "title" par "Arrêter le carousel"
9-Sinon
10-La méthode clearInterval() arrête une minuterie défini avec la méthode setInterval(), ici on arrête la minuterie que contient la propriété "slide" dans l'objet "state" .
11-On attribut la valeur "null" à la propriété "slide" de l'objet "state"
12-"This" contient la balise qui a déclenché l'événement (notre bouton), on lui indique de changer la valeur de son "title" par "Démarrer le carousel"
*/
function onSliderToggle(){
    var icon = document.querySelector("#slider-toggle i")   /* 1 */
    icon.classList.toggle('fa-play')                        /* 2 */
    icon.classList.toggle('fa-pause')                       /* 3 */
    icon.classList.toggle('animated')                       /* 4 */
    icon.classList.toggle('heartBeat')                      /* 5 */      
    if(state.slide == null){                                /* 6 */
        state.slide = setInterval(onSliderGoToNext, 1000)   /* 7 */
        this.title = "Arrêter le carousel"                  /* 8 */
    }
    else{                                                   /* 9 */
        clearInterval(state.slide)                          /* 10 */
        state.slide = null                                  /* 11 */
        this.title = "Démarrer le carousel"                 /* 12 */
    }   
}