

var student = {
    "Henry": 10,
    "Chloé": 15,
    "Feti": 20,
    "Youcef": 5,
    "Gérard": 14
}

let spotlightCase = 1

const button = document.getElementsByClassName("dropdownButton");
let showHenry = false
let showChloé = false
let showFeti = false
let showYoucef = false
let showGerard = false
let storiesshown = false
hideStudents()


function hideStudents() {
    let activeDropdown = document.getElementsByClassName("activeDropdown");
    let reset = document.getElementsByClassName("students");
    for (i = 0; i < reset.length; i++) {
        reset.item(i).style.display = "none";
    }
    for (i = 0; i < activeDropdown.length; i++) {
        activeDropdown[i].className = activeDropdown[i].className.replace("activeDropdown", "");
    }

}
function currentStudent(n) {
    switch (n) {
        case n = 1:
            if (showHenry) {
                showHenry = false
                button[0].className = button[0].className.replace("activeDropdown", " ");
                console.log(showHenry)
                console.log(button[0])
            }
            else {
                showHenry = true
                button[0].className += " activeDropdown";
            }
            break;
        case n = 2:
            if (showChloé) {
                !showChloé
                button[1].className = button[1].className.replace("activeDropdown", "");
            }
            else {
                showChloé = true
                button[1].className += " activeDropdown";
            }
            break;
        case n = 3:
            if (showFeti) {
                !showFeti
                button[2].className = button[2].className.replace("activeDropdown", "");
            }
            else {
                showFeti = true
                button[2].className += " activeDropdown";
            }
            break;

        case n = 4:
            if (showHenry) {
                !showHenry
                button[3].className = button[3].className.replace("activeDropdown", "");
            }
            else {
                showYoucef = true
                button[3].className += " activeDropdown";
            }

            break;

        case n = 5:
            if (showGerard) {
                !showGerard
                button[4].className = button[4].className.replace("activeDropdown", "");
            }
            else {
                showGerard = true
                button[4].className += " activeDropdown";
            }

            break;

    }
}

function showStudent() {
    console.log("showStudent")
    storiesshown = true
    let i;
    let Henry = document.getElementsByClassName("Henry");
    let Chloé = document.getElementsByClassName("Chloé");
    let Feti = document.getElementsByClassName("Feti");
    let Youcef = document.getElementsByClassName("Youcef");
    let Gerard = document.getElementsByClassName("Gerard");
    let reset = document.getElementsByClassName("stories");

    for (i = 0; i < Henry.length; i++) {
        if (showHenry) {
            Henry.item(i).style.display = "initial";
                Henry.item(i).innerHTML = "Note de Henry: " + student.Henry + "."
                console.log("test")     
                console.log(student.Henry)
            
        }
        else {
            Henry.item(i).style.display = "none";
        }

    }
    for (i = 0; i < Chloé.length; i++) {
        if (showChloé) {
            Chloé.item(i).style.display = "initial";
         
                Chloé.item(i).textContent = "Note de Chloé: " + student.Chloé + "."
            
        }
        else {
            Chloé.item(i).style.display = "none";
        }
    }
    for (i = 0; i < Feti.length; i++) {
        if (showFeti) {
            Feti.item(i).style.display = "initial";
            
                Feti.item(i).textContent = "Note de Feti: " + student.Feti + "."
            
        }
        else {
            Feti.item(i).style.display = "none";
        }
    }
    for (i = 0; i < Youcef.length; i++) {
        if (showYoucef) {
            Youcef.item(i).style.display = "initial";
                Youcef.item(i).textContent = "Note de Youcef: " + student.Youcef + "."
        }
        else {
            Youcef.item(i).style.display = "none";
        }

    }
    for (i = 0; i < Gérard.length; i++) {
        if (showGerard) {
            Gerard.item(i).style.display = "initial";
            Gerard.item(i).textContent = "Note de Gérard: " + student.Gérard + "."
        }
        else {
            Gerard.item(i).style.display = "none";
        }

    }
}
