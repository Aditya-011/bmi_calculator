//const log = console.log;

/////////////////////////////////         Variable Intializations           ////////////////////////////
let height;
let weight;
var selWeight;
var selHeight;
height = document.querySelector(".height").value;
weight = document.querySelector(".weight").value;

const changeHunit = () => {
  height = document.querySelector(".height").value;
};
const changeWunit = () => {
  weight = document.querySelector(".weight").value;
};
/////////////////////////////////////                      BMI Calcultor Function               /////////////////////////////////////

function calculateBMI() {
  height = document.querySelector(".height").value;
  weight = document.querySelector(".weight").value;
  unitCheck();
  //console.log(`${height} ${weight}`);

  const BMI = weight / (height * height);
  const bmi = BMI.toFixed(2);
  if (bmi > 0) {
    bmiImages(bmi);
    document.querySelector(
      ".result"
    ).innerHTML = `<p>Your BMI <p class='bmi'>${bmi}</p><p/>`;
  }
  //console.log(bmi);
}

//////////////////////////               Enter KeyPress Function                            //////////////////////////////////////
//document.querySelector("button").addEventListener('click',calculateBMI)
document.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) calculateBMI();
});

/////////////////////////                  BMI Images Function                              ////////////////////////////////////
function bmiImages(bmi) {
  if (bmi >= 30) {
    document.querySelector(
      ".imageTag"
    ).innerHTML = `<p>Obese</p> <img src="images/overweight.png" alt="Obese">
        `;
    document.querySelector(".imageTag").classList.add("animation");
  } else if (25 <= bmi && bmi < 30) {
    document.querySelector(
      ".imageTag"
    ).innerHTML = `<p>Overweight</p> <img src="images/fat.png" alt="Overweight">
        `;
  } else if (18.5 <= bmi && bmi < 25) {
    document.querySelector(
      ".imageTag"
    ).innerHTML = `<p>Normal (Healthy)</p> <img src="images/fit.png" alt="Normal">
        `;
  } else if (16 <= bmi && bmi < 18.5) {
    document.querySelector(
      ".imageTag"
    ).innerHTML = `<p>Underweight</p> <img src="images/thin.png" alt="Underweight">
        `;
  } //if(bmi<16)
  else {
    document.querySelector(
      ".imageTag"
    ).innerHTML = `<p>Severely Underweight</p> <img src="images/skinny.png" alt="Severely Underweight">
        `;
  }
}

///////////////////////////////               Function to Check the units of inputs       /////////////////////
function unitCheck() {
  if (selWeight === "lbs") {
    weight = weight * 0.453592;
    //console.log(true);
  }
  if (selHeight === "ft") {
    height = height * 0.3048;
    // console.log(true);
  }
}
$(".weightOption").change(function () {
  optWeight = $(this).find(":selected");
  selWeight = optWeight.text();
  //log(true);
  //console.log(selWeight);
  // alert(og);

  $(this).find(":selected").text(selWeight);
});

$(".heightOption").change(function () {
  optHeight = $(this).find(":selected");
  selHeight = optHeight.text();
  //console.log(selHeight);
  //log(true);
  // alert(og);

  $(this).find(":selected").text(selHeight);
});
///////////////////////////////     End               /////////////////////////////////////////////////
