/* */
const rows = 4;
const cols = 4;
var attemps = 0
var cellArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
var cellArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
var attempsCounter = document.getElementById("attempsCounter") /* */
var firstClick = false
var secondClick = false
var stopClick = false
// nombre de ligne et colonnes
let image_class = "blue" /* background image de base lors de la création du tableau */
var isStarted = false /* Processus B est arrété par défaut */
var randomIsDone = false /*Processus C est arrété par défaut */

/*  utiliser pour créer les génération pour alterner entre currGen(génréation 1) et nextGen(génération 2 qui remplacera la génération 1 plus tard) */
let currGen = [rows];
let nextGen = [rows];

createGenArrays()
initGenArrays()
// setInterval(randomClick, 1);
// setInterval(evolve, 250);

function startCellular() {
    randomIsDone = true
    isStarted = false
}
function createGenArrays() {
    for (let i = 0; i < rows; i++) {
        currGen[i] = new Array(cols);
        nextGen[i] = new Array(cols);
    }
}

function initGenArrays() {
    var cellArrayTemp = cellArray
    var randomNumber = Math.floor(Math.random() * cellArrayTemp.length)
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            randomNumber = Math.floor(Math.random() * cellArrayTemp.length)

            currGen[i][j] = cellArrayTemp[randomNumber];
            nextGen[i][j] = 0;

            cellArrayTemp.splice(randomNumber, 1)
            
        }
    }
}

function stop() {
    isStarted = false
    randomIsDone = false

}

function createWorld() {
    let world = document.querySelector('#world');
    let tbl = document.createElement('table');
    tbl.setAttribute('id', 'worldgrid');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            cell = document.createElement('td');
            cell.setAttribute('id', i + '_' + j);
            cell.setAttribute('class', image_class);
            cell.addEventListener('click', buttonPressed)
            tr.appendChild(cell);

        }
        tbl.appendChild(tr);
    }
    world.appendChild(tbl);

}

/* */

window.onload = () => {
    createWorld();// The visual table
}


/* vérifie la valeur de currGen[row][col] pour chaque celulle et change la classe en raport avec cete valeur */

function updateWorld() {
    // if (!isStarted) return;
    let cell = '';
    for (row in currGen) {
        for (col in currGen[row]) {
            cell = document.getElementById(row + '_' + col);
            console.log(cell)
            switch (currGen[row][col]) {
                case 1:
                    cell.setAttribute('class', 'autruche');
                    break;
                case 2:
                    cell.setAttribute('class', 'autruche');
                    break;
                case 3:
                    cell.setAttribute('class', 'cat');
                    break;
                case 4:
                    cell.setAttribute('class', 'cat');
                    break;
                case 5:
                    cell.setAttribute('class', 'dog');
                    break;
                case 6:
                    cell.setAttribute('class', 'dog');
                    break;
                case 7:
                    cell.setAttribute('class', 'pig');
                    break;
                case 8:
                    cell.setAttribute('class', 'pig');
                    break;
                case 9:
                    cell.setAttribute('class', 'toad');
                    break;
                case 10:
                    cell.setAttribute('class', 'toad');
                    break;
                case 11:
                    cell.setAttribute('class', 'rabbit');
                    break;
                case 12:
                    cell.setAttribute('class', 'rabbit');
                    break;
                case 13:
                    cell.setAttribute('class', 'boar');
                    break;
                case 14:
                    cell.setAttribute('class', 'boar');
                    break;
                case 15:
                    cell.setAttribute('class', 'mouse');
                    break;
                case 16:
                    cell.setAttribute('class', 'mouse');
                    break;

            }


        }
    }
}

function reset() {
    secondClick = false
    firstClick = false
    isGameover = false
    Gamestarted = false
    counter = 0
    attemps = 0
    attempsCounter.innerText = "Attemps: 0"
    for (row in currGen) {
        for (col in currGen[row]) {
            cell = document.getElementById(row + '_' + col);
            switch (currGen[row][col]) {
                default:
                    cell.setAttribute('class', 'blue');
                    cell.visibility = "visible";
                    break;
            }
        }
    }
    createNextGen()
    updateCurrGen()
}

function resetOnTimeOut() {
    if (firstClick) return;
    secondClick = false
    firstClick = false
    for (row in currGen) {
        for (col in currGen[row]) {
            cell = document.getElementById(row + '_' + col);
            switch (currGen[row][col]) {
                default:
                    cell.setAttribute('class', 'blue');
                    break;
            }
        }
    }
    stopClick = false
}

function createNextGen() {
    var cellArrayNext = cellArray2
    var randomNumber = Math.floor(Math.random() * cellArrayNext.length)
    for (row in currGen) {
        for (col in currGen[row]) {
            //  appelle le nombre count de getNeighborCount() pour chaque celulle
            /* pour chaque cellule et chaque valeur nextGen[row][col] vérifie le count et change la valeur de nextGen[row][col] en rapport avec le nombre de voisin*/
            switch (currGen[row][col]) {
                default:
                    randomNumber = Math.floor(Math.random() * cellArrayNext.length)
                    nextGen[row][col] = cellArrayNext[randomNumber];

                    cellArrayNext.splice(randomNumber, 1);
                    console.log("nextGen[row][col]: " + nextGen[row][col])
                    break;
            }
        }
    }
}



/* change currGen[][] pour qu'il soit égale à nextGen puis réinitialise nextGen pour qu'il puisse étre réutiliser après */
function updateCurrGen() {

    for (row in currGen) {
        for (col in currGen[row]) {
            // Update the current generation with
            // the results of createNextGen function
            currGen[row][col] = nextGen[row][col];
            // Set nextGen back to empty
            nextGen[row][col] = 0;
        }
    }

}

//  firstClick = false
//  secondClick = false
const buttonPressed = e => {
    if (secondClick || isGameover) return;
    Gamestarted = true
    let world = document.querySelector('#world');
    var prevGen;
    var classToTest;
    var cellId = e.target.id
    var element = document.getElementById(`${cellId}`)
    console.log(cellId);  // Get ID of Clicked Element
    let gen = cellId.split("_")
    attemps++
    console.log(attemps)
    attempsCounter.innerText = `Attemps: ${attemps}`
    switch (currGen[gen[0]][gen[1]]) {
        case 1:
            element.setAttribute('class', 'autruche');
            break;
        case 2:
            element.setAttribute('class', 'autruche');
            break;
        case 3:
            element.setAttribute('class', 'cat');
            break;
        case 4:
            element.setAttribute('class', 'cat');
            break;
        case 5:
            cell.setAttribute('class', 'dog');
            break;
        case 6:
            element.setAttribute('class', 'dog');
            break;
        case 7:
            element.setAttribute('class', 'pig');
            break;
        case 8:
            element.setAttribute('class', 'pig');
            break;
        case 9:
            element.setAttribute('class', 'toad');
            break;
        case 10:
            element.setAttribute('class', 'toad');
            break;
        case 11:
            element.setAttribute('class', 'rabbit');
            break;
        case 12:
            element.setAttribute('class', 'rabbit');
            break;
        case 13:
            element.setAttribute('class', 'boar');
            break;
        case 14:
            element.setAttribute('class', 'boar');
            break;
        case 15:
            element.setAttribute('class', 'mouse');
            break;
        case 16:
            element.setAttribute('class', 'mouse');
            break;

    }

    // element.setAttribute('class', 'black')

    if (firstClick) {
        secondClick = true
        firstClick = false

        classToTest = document.getElementsByClassName(`${element.getAttribute('class')}`)
        if (classToTest.length == 2) {
            for (i = 0; i < classToTest.length; i++) {
                classToTest.item(i).style.visibility = "hidden";
                // classToTest.item(i).setAttribute('class', "black")
            
                // setTimeout(function() {secondClick= false }, 1000)
                console.log(document.getElementsByClassName("blue"))
            }
            secondClick = false
        }
        else {
            setTimeout(resetOnTimeOut, 300)
        }
    }
    else if (!firstClick) {
        firstClick = true
        secondClick = false
        prevGen = gen
    }

}
// var cellSelector = document.querySelector('td')
// cellSelector.addEventListener('click', updateImage)


function test() {
    console.log("test")
}


// timer
var timerElement = document.getElementById("timerElement")
isGameover = false
Gamestarted = false
var counter = 0
timerStart()
function timerStart() {
    if (Gamestarted = false || isGameover) return;
    var interval = setInterval(() => {
        if (isGameover) return;
        timerElement.innerHTML = `Time elapsed: ${counter}s`;
        if (counter >= 30) {
            // the timer has reached zero or game Over
            timerElement.innerHTML = `Time elapsed: ${counter}s`;
            isGameover = true
            Gamestarted = false
            clearInterval(interval);
        } else if (Gamestarted) {
            counter++;
        }
    }, 1000);
};

