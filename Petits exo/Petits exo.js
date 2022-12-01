/*
Écrivez une fonction qui prend un nombre entier de minutes et le convertit en secondes.

Exemple:
minuteToSecond(4) ➞ 240

minuteToSecond(3) ➞ 180

*/
function minuteToSecond(minutes) {
  let second = minutes * 60
  return second
    // Écrivez votre code ici
  }
  
  // Afficher la sortie

  console.log("min to s " + minuteToSecond(4));
  console.log("min to s " + minuteToSecond(3));


  /*
Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés.

Exemple:
getMax(5, 9, 1) ➞ 9

getMax(2, 3, 10) ➞ 10
  */

function getMax(a, b, c) {
    // Écrivez votre code ici
        // return    Math.max(a, b, c)

        if (a >=b && a>= c) {
          return a
        }
        else if (b >=a && b>= c) {
          return b
        }
    
        else if (c >=b && c>= a) {
          return c
        }
}

// Afficher la sortie
console.log("Get max " + getMax(5, 9, 1));
console.log("Get max " + getMax(2, 3, 10));
console.log("Get max " + getMax(5, 5, 1));


/*
Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100. 
Sinon, retournez FALSE.

Exemple:
check(5, 20) ➞ true
// 5 + 20 = 25

check(60, 55) ➞ false
// 60 + 55 = 115
*/

function check(a, b) {
	// Écrivez votre code ici
  return  (a + b) < 100 ? true : false
}

// Afficher la sortie
console.log(check(5, 20));
console.log(check(60, 55));


/*
Écrivez une fonction qui prend deux entiers (heures, minutes) et les convertit en secondes.

Exemple:
hmTos(1, 10) ➞ 4200

hmTos(0, 59) ➞ 3540

hmTos(0, 0) ➞ 0
*/


function hmTos(heure, minute) {
	// Écrivez votre code ici
 return second = heure * 3600 + minute * 60
}

// Afficher la sortie
console.log(hmTos(1, 10));
console.log(hmTos(0, 59));
console.log(hmTos(0, 0));

/*
Écrivez une fonction pour inverser un tableau. Attention: N’utilisez pas la méthode intégrée reverse();

Exemple:
reverseTab([1, 2, 3]) ➞ [3, 2, 1]

reverseTab([1, 1, 2, 2, 3]) ➞ [3, 2, 2, 1, 1]
*/
function reverseTab(tab) {
  // let temp = tab
  // var output = [];
  // while (temp.length) {
  //   output.push(temp.pop());
  // }
  // return output;

	// solution Florian
// for (let i =0, j=temp.length -1; i < j ; i++ , j--) {
//   [temp[i], temp[j]] = [temp[j], temp[i]]
// }

for (let i =0, j=tab.length -1; i < j ; i++ , j--) {
    [tab[i], tab[j]] = [tab[j], tab[i]]
  }
  
// return temp
return tab
}

// Afficher la sortie
console.log(reverseTab([1, 2, 3]));
console.log(reverseTab([1, 1, 2, 2, 3]));


/*
Créez une fonction qui prend un tableau et renvoie le dernier élément du tableau.

Exemple:
getLastElem([1, 2, 3, 4]) ➞ 4

getLastElem([‘Alex’, ‘Bob’, ‘Emily’]) ➞ ‘Emily’


*/

function getLastElem(tab) {
  // return   tab.pop()
 return tab[tab.length -1]
	// Écrivez votre code ici
}

// Afficher la sortie
console.log(getLastElem([1, 2, 3, 4]));
console.log(getLastElem(["Alex", "Bob", "Emily"]));

