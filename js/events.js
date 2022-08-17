//Input felter fra form
const cow = document.getElementById("cow");
const pig = document.getElementById("pig");
const moose = document.getElementById("moose");
const form = document.getElementById("form")
const body = document.getElementById("backgroundColor")
// validate Buttons for form
const validatePig = document.getElementById("evaluatePig");
const validateAll = document.getElementById("evaluateForm");
const fjernForm = document.getElementById("remove");

//Eventlisteners

cow.addEventListener("keyup",evaluateCow)
validatePig.addEventListener("click",evaluatePig)
validateAll.addEventListener("click",evaluateAll)
fjernForm.addEventListener("click",removeForm)

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


    var text;
    var dyr = document.getElementById("select").value;
  
    switch(dyr) {
        //case er value i options
      case "fugl":
        text = "Fugle er seje";
      break;

      case "fisk":
      text = "Fisk drikker vand";
      break;

      case "reptil":
      text = "Nogen kan skifte farve";
      break;
      
      case "insekt":
      text = "Ad";
      break;

      case "pattedyr":
      text = "De ligger ikke æg (Næbdyr xd)";
      break;

      default:
      text = "What?";
    }
    document.getElementById("text").innerHTML = text;
}

function removeForm() {
    form.style.display = "none";
}
//Function -------------------------------------------------------