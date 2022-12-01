/*
Exercice 1:
Créez une fonction pour concaténer deux tableaux entiers.

Exemple:
concatener([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

concatener([9, 8], [1, 5, 6, 7]) ➞ [9, 8, 1, 5, 6, 7]

concatener([1, 1, 1], [2, 2, 2]) ➞ [1, 1, 1, 2, 2, 2]

Les trois points (…) représentent l’opérateur « Spread » qui permet à une expression d’être élargi.
*/
// var array1 = []
// var array2 = array1.concat([1, 2], [3, 4])
// console.log("ex1 :" + array2 )
// var array3 = array1.concat([9, 8], [1, 5, 6, 7])
// console.log("ex1 :" + array3 )
// var array4 = array1.concat([1, 1, 1], [2, 2, 2])
// console.log("ex1 :" + array4 )
function concatener(tabl1, tabl2) {
  console.log("function 1: " + [...tabl1, ...tabl2])
  return [...tabl1, ...tabl2]
}
concatener([1, 1, 1], [2, 2, 2])

/*----------------------------------------------------------------------------------------------------------
Exercice 2:
Créez une fonction qui trouve l’index d’un élément donné. Si l’élément n’existe pas, retournez -1.

Exemple:
find([2, 7, 1], 7) ➞ 1

find([6, 9, 5], 6) ➞ 0

find([6, 7, 8], 9) ➞ -1

*/
var arrayTwo = [2, 7, 1]
var arrayTwo2 = [6, 9, 5]
var arrayTwo3 = [6, 7, 8]

function findArray (tab, value) {
for (let i = 0; i < tab.length; i++) 
{
  if (tab[i] == value) return console.log(i)
}
return console.log(-1)
}
findArray([2, 7, 1], 7)
findArray([6, 9, 5], 6)
findArray([6, 7, 8], 9)
// arrayTwo.find(function(7),-1)
/*******************************************************************************************
 Exercice 3:
Écrivez une fonction pour vérifier si un tableau contient un nombre particulier.

Exemple:
nbrExist([6, 7, 8], 7) ➞ true

nbrExist([1, 2, 3], 5) ➞ false

nbrExist([], 0) ➞ false
*/
function arrayContain (tab, value) {
  for (let i = 0; i < tab.length; i++) 
  {
    if (tab[i] == value) return console.log("exo3: " + true)
  }
  return console.log("exo3: " + false)
  }
  arrayContain([6, 7, 8], 7)
  arrayContain([1, 2, 3], 5)
  arrayContain([], 0)



  /****************************************************************************
   Exercice 4:
Créez une fonction qui prend une chaîne (un nom aléatoire). Si le dernier caractère du nom est un « s »,
retournez TRUE, sinon retournez FALSE.

Exemple:

checkS("Thomas") ➞ true

checkS("Ali") ➞ false

checkS("Alex") ➞ false

checkS("Elvis") ➞ true
   */
function lastLetter(str) {
  var lenght = str.charAt(str.length-1);
  if (lenght == "s") return console.log("exo4: " + true)
   return console.log("exo4: " + false)
}
lastLetter("Thomas")
lastLetter("Ali")
lastLetter("Alex")
lastLetter("Elvis")


/***************************************************************************
 Exercice 5:
Créez une fonction qui renvoie TRUE si une chaîne contient un ou des espaces. Sinon renvoie FALSE.

Exemple:

containSpaces("Thomas") ➞ false

containSpaces("Hello World!") ➞ true

containSpaces(" ") ➞ true

containSpaces("") ➞ false
*/
function containSpace (str) {
let splitted = str.split(" ")
if (splitted.length >0) return console.log("exo5: " + true)
return console.log("exo5: " + false)
}

containSpace("Thomas")
containSpace("Hello World!")
containSpace(" ")
containSpace("")

/******************************************************************
 Exercice 6 :
Créez une fonction qui prend une chaîne représentant l’humeur et renvoie une phrase au format suivant: « Aujourd’hui, je me sens {feeling} ». Cependant, si aucun argument n’est passé, retournez « Aujourd’hui, je me sens neutre ».

Exemple:

myFeeling("heureux") ➞ "Aujourd'hui, je me sens heureux"

myFeeling("triste") ➞ "Aujourd'hui, je me sens triste"

myFeeling() ➞ "Aujourd'hui, je me sens neutre"
*/
function myFeeling (str) {

  if (str.length >0) return console.log("exo6: " + `Aujourd’hui, je me sens ${str}`)
  return console.log("exo6: " + "Aujourd’hui, je me sens neutre")
}
myFeeling("heureux")
myFeeling("triste")
myFeeling("")
/****************************************************
 Exercice 7

Créez une fonction qui prend une chaîne et renvoie TRUE ou FALSE, selon que les caractères sont en ordre
 ou non.

Exemple:

checkOrder("abc") ➞ true

checkOrder("zyx") ➞ false

checkOrder("123") ➞ true

checkOrder("aabbcc") ➞ true

 */
// function checkOrder(letters) {
//   const string = letters.toLowerCase();
//   let lastChar;
  
//   for (let i = 0; i < string.length; i++) {
//       // Grab a character
//       let thisChar = string.charCodeAt(i);
      
//       // Check for the failure case, when a lower character follows a higher one
//       if (i && (thisChar < lastChar)) {
//           return console.log("exo7: " + false);
//       }
      
//       // Store this character to check the next one
//       lastChar = thisChar;
//   }
  
//   // If it got this far then input is valid
//   return console.log("exo7: " + true);
// }

function checkOrder(str) {
  return console.log (str == str.split("").sort().join("")) 
}

checkOrder("abc") 

checkOrder("zyx") 

checkOrder("123") 

checkOrder("aabbcc") 

/********************************************************
 * Exercice 8
 * 
 Créez une fonction qui ajoute une sous-chaîne à la fin de chaque chaîne du tableau.

Exemple:

addEnd(["accept", "achet", "adapt"], "able") ➞ ["acceptable", "achetable", "adaptable"]

addEnd(["aim", "act", "ard"], "ant") ➞ ["aimant", "actant", "ardant"]
*/
// function addEnd (tabl, str) {
// let lastItem = tabl.length - 1
// for (var i = 0; i < tabl.length; i++) {
//   tabl[i] = tabl[i] + str
// }
// console.log("exo8: " + tabl)
// }
addEnd(["accept", "achet", "adapt"], "able")
addEnd(["aim", "act", "ard"], "ant")

function addEnd (tabl, str) {
 var result = tabl.map(mot => mot + str)
  console.log("exo8: " + result)
  }
/*******************************************************************
 Exercice 9
* Créez une fonction qui vérifie si l’argument est un entier ou une chaîne. Renvoie « int » s’il s’agit d’un entier et « string » s’il s’agit d’une chaîne.

Exemple:

checkIntOrStr("WayToLearnX") ➞ "string"

checkIntOrStr(1) ➞ "int"

checkIntOrStr("250") ➞ "string"
 *
 */

function checkIntOrStr (str) {
  let number = parseInt(str)
  if (number > 0) return console.log("exo9: int")
  return console.log("exo9: string")
}

checkIntOrStr("WayToLearnX") 

checkIntOrStr(1) 

checkIntOrStr("250")


/********************************************************************
 
Exercice 10
Créez une fonction qui prend une phrase et renvoie le nombre de mots.

Exemple:

count("Welcome to WWM) ➞ 3

count("Hello World") ➞ 2

count("I am going to my school") ➞ 6
*/

function count(str) {
  let splitted = str.split(" ")
  if (splitted.length >0) return console.log("exo10: " + splitted.length)
  return console.log("exo5: " + false)
  }

  count("Welcome to WWM")

  count("Hello World")
  
  count("I am going to my school")

/******************************************************************
 Exercice 11

Créez une fonction récursive qui renvoie le total de tous les nombres impairs jusqu’à n(inclus). 
n sera donné comme un nombre impair.
 Récursive = qui s'appelle elle même.
Exemple:

sommeImpair(3) ➞ 4
// 1 + 3 = 4

sommeImpair(7) ➞ 16

sommeImpair(59) ➞ 900
*/

function isEven(n) {

   return n % 2 == 0; 
   
  } 

  function isNotEven(n) {

    return n % 2 == 1; 
    
   } 

// function sommeImpair (number) 
// {
//   let sum = 0; 
//   for (var i = 1; i <= number; i++) {

//      if (isNotEven(i)) { sum += i; } 

//     } return console.log("exo11: " + sum); 
// }

function sommeImpair(number)
{
    if(number % 2 == 0) return -1
    if(number == 1)
    {
        return number;
    }
    return number + sommeImpair(number-2); 
}
console.log(sommeImpair(5))

sommeImpair(3)
// 1 + 3 = 4

sommeImpair(7) 

sommeImpair(59)

/*************************************************************************
 Exercice 12

Créez une fonction qui renvoie TRUE si la chaîne passée en paramètre ne contient
  que des lettres majuscules ou minuscules.

  Exemple:

isSameCase("GérardTourres") ➞ false

isSameCase("gerard") ➞ true

isSameCase("TOURRES") ➞ true
*/
// function isSameCase (str) {
//   if (str == str.toLowerCase() || str == str.toUpperCase()) return console.log("exo12: " + true);
//   return console.log("exo12: " + false)
// }
function isSameCase (str) {
  return console.log("exo12: " + (str == str.toLowerCase() || str == str.toUpperCase())) 
}


isSameCase("GérardTourres") 

isSameCase("gerard") 

isSameCase("TOURRES")

/****************************************************************************
 Exercice 13

Une année bissextile a un jour ajouté à février pour être synchronisée avec l’année saisonnière. Une année bissextile apparaît avec une fréquence régulière, déterminée par la règle ci-dessous:

Une année doit être divisible par 400 ou divisible par 4 et non pas 100.

Vous devez implémenter une fonction qui renvoie TRUE si c’est une année bissextile, ou FALSE si ce n’est pas le cas.

Exemple:

bissextile(2020) ➞ true
// Divisé par 4 et non par 100.

bissextile(1201) ➞ false
// Divisé par 4, mais également divisé par 100.

bissextile(2000) ➞ true
// Divisé par 400.
 */

// function bissextile(number) {
//  if (number % 400 == 0 || (number % 100 !== 0 && number % 4 == 0)) return console.log("exo13: " + true)
// return console.log("exo13: " + false)
// }

function bissextile(number) {
  return console.log("exo13: " + (number % 400 == 0 || (number % 100 !== 0 && number % 4 == 0)))
  }
bissextile(2020) 
// Divisé par 4 et non par 100.

bissextile(1100) 
// Divisé par 4, mais également divisé par 100.

bissextile(2000)
// Divisé par 400.


/* pour le fun, ré-invente l'eau tiède avec une fonction qui renvoie la factorielle d'un nombre (n! = n(n-1)......1. */

function factorielle (number) {
  let sum = 1
  for (i = number; i>0; i--) {
    sum = sum * i
  }
return console.log("exo14: " + sum)
}

factorielle(10)
factorielle(5)
factorielle(3)