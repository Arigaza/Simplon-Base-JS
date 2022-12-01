var result = ""
var result2 = ""
var sign = ""
var MemoryNum = 0
var resultWindow = document.getElementById("result")
var buttonOne = document.getElementsByClassName("bigButton")[0]
var buttonTwo = document.getElementsByClassName("bigButton")[1]
var buttonThree = document.getElementsByClassName("bigButton")[2]
var buttonFour = document.getElementsByClassName("bigButton")[3]
var buttonFive = document.getElementsByClassName("bigButton")[4]
var buttonSix = document.getElementsByClassName("bigButton")[5]
var buttonSeven = document.getElementsByClassName("bigButton")[6]
var buttonEight = document.getElementsByClassName("bigButton")[7]
var buttonNine = document.getElementsByClassName("bigButton")[8]
var reset = document.getElementsByClassName("tinyButton")[0]
var divide = document.getElementsByClassName("tinyButton")[1]
var minus = document.getElementsByClassName("tinyButton")[2]
var add = document.getElementsByClassName("tinyButton")[3]
var multiply = document.getElementsByClassName("tinyButton")[4]

function resultAddNumber(num) {
    if (sign.length > 0) {
        if (parseFloat(result2) == 0) {
            result2 = num
        }
        else {
            result2 = result2.toString() + num
        }
        
        resultWindow.innerText = result + " " + sign + " " + result2
    }
    else {
        if (parseFloat(result) == 0) {
            result = num
        }
        else {
        result = result.toString() + num
    }
    resultWindow.innerText = result

}
}

function signChange(num) {
    sign = num
    resultWindow.innerText = result + " " + sign
}


function removeLastNumber() {
    result2 = result2.toString()
    result = result.toString()
    if (sign.length > 0) {
        if (result2.length == 0) sign = "";

        result2 = result2.substring(0, result2.length - 1)

        resultWindow.innerText = result + " " + sign + " " + result2
    }
    else {
        result = result.substring(0, result.length - 1)
        resultWindow.innerText = result + " " + sign
    }

}

function compute() {
    if (result2== "") return;
    switch (sign) {
        case "+":
            result =  parseFloat(result) + parseFloat(result2)
          resultWindow.innerText = result  
            break;
        case "-":
            result = parseFloat(result) - parseFloat(result2)
            resultWindow.innerText = result
            break;
        case "/":
            result = parseFloat(result) / parseFloat(result2)
            resultWindow.innerText = result
            break;
        case "*":
            result = parseFloat(result) * parseFloat(result2)
            resultWindow.innerText = result
            break;
            case "%":
                result = parseFloat(result) % parseFloat(result2)
                console.log(result)
                resultWindow.innerText = result   
break;
    }
    result2 = ""
    sign = ""   
}

function resetAll() {
    result = ""
    result2 = ""
    sign = ""   
    resultWindow.innerText = result
}

function changeM (num) {
    if (result == "") return;
    switch(num) {
        case "+":
            MemoryNum = parseFloat(MemoryNum) + parseFloat(result)
    console.log("M+ value: " + MemoryNum)
        break;

        case "-":
            MemoryNum = parseFloat(MemoryNum) - parseFloat(result)
    console.log("M+ value: " + MemoryNum)
        break;
    }   
}

function displayM() {
    if (resultWindow.innerText == result) {
        resultWindow.innerText = MemoryNum 
    }
   else {
    resultWindow.innerText = result
   }
    
}