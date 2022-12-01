var match = 0
var tirage = []
var cellArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 48, 49]
var number = 0
var amount = 0
var tirageAmount = 0
function init(btn) {
    btn.style.display = "none";
    i = 1;
    nbr = 0;
    choix = new Array();
    creerGrille();
}

function creerGrille() {
    t = setTimeout("creerGrille()", 50);
    bouton = document.createElement("div");
    bouton.className = "bouton";
    bouton.innerHTML = i;
    bouton.setAttribute("id", i);
    bouton.onclick = function () {
        ajouter(this);
    }
    document.getElementById("grille").appendChild(bouton);
    if (i % 7 == 0) {
        br = document.createElement("br");
        document.getElementById("grille").appendChild(br);
    }
    i += 1;
    if (i > 49)
        clearTimeout(t);
}

function ajouter(ob) {
    if (nbr < 6) {
        ob.style.visibility = "hidden";
        nbouton = document.createElement("div");
        nbouton.className = "nbouton";
        nbouton.setAttribute("id", "ch" + nbr);
        nbouton.innerHTML = ob.textContent;
        document.getElementById("choix").appendChild(nbouton);
        choix[nbr] = ob.firstChild.nodeValue;
        nbr += 1;
        if (nbr == 6)
            ztirage(100);
    }
    console.log(choix)
}

function ztirage(time) {

    zbouton = document.createElement("div");
    zbouton.className = "zbouton";
    zbouton.setAttribute("id", "res" + tirageAmount);
    zbouton.innerHTML = number
    document.getElementById("res").appendChild(zbouton);
    setInterval(() => {
        if (amount < 50) {
            number = Math.floor(Math.random() * 50)
            isNotSameNum(number)
            zbouton.innerHTML = number;
            amount++
        }
        else if (tirageAmount < 5) {
            console.log("number: " + number)
            tirage[tirageAmount] = number;
            cellArray = cellArray.filter(function (value, index, arr) {
                return value !== number;
            })
            tirageAmount++
            amount = 0
         return   ztirage(100)
        }
        else {
            return;
        }
    }, time);
    if (tirageAmount >= 5) {
        document.getElementById("bon").style.visibility = "visible";
        for (let i = 0; i < tirage.length; i++) {
            for (let j = 0; j < choix.length; j++) {
                if (choix[j] == tirage[i]) {
                    match++
                    document.getElementById("bon").innerHTML = match
                    console.log("choix[j]: " + choix[j])
                    console.log("ch" + j)
                    var choiceMatched = document.getElementById("ch" + j)
                    var resultMatched = document.getElementById("res" + i)
                    choiceMatched.setAttribute('class', "won")
                    resultMatched.setAttribute('class', "won")
                }
            }
        }
    }

}

function isNotSameNum(num) {
    num = parseInt(num)
    for (let i = 0; i < cellArray.length; i++) {
        if (cellArray[i] == num) {
            number = num
            return num;
        }
    }
    return isNotSameNum(Math.floor(Math.random() * 50))
}


console.log(isNotSameNum(10))
