//Input felter fra form
const cow = document.getElementById("cow");
const pig = document.getElementById("pig");
const moose = document.getElementById("moose");
// validate Buttons for form
const validatePig = document.getElementById("evaluatePig");
const validateAll = document.getElementById("evaluateForm")

//Eventlisteners

cow.addEventListener("keyup",evaluateCow)
validatePig.addEventListener("click",evaluatePig)
validateAll.addEventListener("click",evaluateAll)

//Functions ------------------------------------------------------
function evaluateCow() {
    if(cow.value == "ko") {
        cow.style.backgroundColor = "#00ff62"
        console.log("WUUU Cow");
    } else {
        cow.style.backgroundColor = "red"
        console.log("No Cow");
    }
}


function evaluatePig() {
    if(pig.value == "gris") {
        pig.style.backgroundColor = "#00ff62"
        console.log("WUUU Pig");
    } else {
        pig.style.backgroundColor = "red"
        console.log("No Pig");
    }
}


function evaluateAll() {
    if(cow.value == "ko") {
        cow.style.backgroundColor = "#00ff62"
        console.log("WUUU Cow");
    } else {
        cow.style.backgroundColor = "red"
        console.log("No Cow");
    }

    if(pig.value == "gris") {
        pig.style.backgroundColor = "#00ff62"
        console.log("WUUU Pig");
    } else {
        pig.style.backgroundColor = "red"
        console.log("No Pig");
    }

    if(moose.value == "elg") {
        moose.style.backgroundColor = "#00ff62"
        console.log("WUUU Moose");
    } else {
        moose.style.backgroundColor = "red"
        console.log("No Moose");
    }
}
//Function -------------------------------------------------------