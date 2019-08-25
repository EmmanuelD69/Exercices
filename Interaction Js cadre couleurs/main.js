
/* Récupère un élément par son ID HTML */
var bouton = document.getElementById("toggle-rectangle")
/* Récupère un élément pas sa class CSS/HTML */
var rectangle = document.querySelector(".rectangle")
console.log(bouton, rectangle)
// var audio = document.getElementById("audio")

/* Ces deux lignes signifient la même chose */
bouton.addEventListener('click', onClickButton)
// bouton.addEventListener('click', playAudio)
rectangle.addEventListener('mouseover', hoverZone)
rectangle.addEventListener('mouseout', outZone)
rectangle.addEventListener('dblclick', doubleClick)

/*
document.getElementById("toggle-rectangle").addEventListener('click', appel fonction)
*/

function onClickButton(){
    /*
    on rentre dans cette fonction quand on clique sur le bouton
    cacher ou afficher le bouton
    Pour cacher : on applique la classe .hide au rectangle
    Pour afficher : on lui enlève la classe .hide 
    */

    /*
   if(rectangle.classList.contains('hide')){
    // Pour afficher : on lui enlève la classe .hide
    rectangle.classList.remove('hide')
    } else 
    {
    //Pour cacher : on applique la classe .hide au rectangle
    rectangle.classList.add('hide')
    }
    */

    /* Execute la même chose que le if / else */
    rectangle.classList.toggle('hide')
}

function hoverZone(){
    rectangle.classList.toggle('important')
}

function outZone(){
    rectangle.classList.remove('important')
    rectangle.classList.remove('good')
}

function doubleClick(){
    rectangle.classList.toggle('good')
}

function playAudio(){
    audio.play;
}