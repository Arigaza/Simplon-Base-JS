/* Les variables dont on a besoin : */
var precedente = -1; // pour recevoir le nom de la première image cliquée
var attente = 0; // booleen (vaut 0 ou 1) pour savoir si on conserve l'état caché/visible de l'image ou pas
var img; //  premiere image cliquee
var imgp; //  deuxieme image cliquee

let firstImageIsSelected = false
let twoImagesAreSelected = false;
let game = document.getElementById("jeu");
let images = document.getElementById("jeu").children;


function cachephotos() {
  img.style.visibility = "hidden";
  imgp.style.visibility = "hidden";
}

function clic(n) {
  switch (firstImageIsSelected) {
    case false:
      img = event.target.querySelector("#img" + n)
      img.style.visibility = "visible";
      firstImageIsSelected = true;
      break;

    case true:

      imgp = event.target.querySelector("#img" + n)
      imgp.style.visibility = "visible";
      firstImageIsSelected = false;
      twoImagesAreSelected = true;
      break;

    default:
      break;
  }

  if (twoImagesAreSelected) {
    twoImagesAreSelected = false;
    setTimeout('cachephotos();', 800);
    if (img.getAttribute('src') === imgp.getAttribute('src')) {
      img.parentElement.style.visibility = "hidden"
      imgp.parentElement.style.visibility = "hidden"

    }
  }

}

/*
Math.ceil()

Compatible tous navigateurs

Retourne l'entier le plus proche, supérieur ou égal au nombre réel passé en paramètre.
ceil signifie plafond en anglais.

L'arrondi à l'entier inférieur est effectué par floor().

L'arrondi à l'entier le plus proche est effectué par round().

*/
function initgame()
{
  for (let i = images.length; i >= 0; i--) {
    game.appendChild(images[Math.random() * i | 0]);
}
}
