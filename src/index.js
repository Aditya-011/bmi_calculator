/////////////////////////////////////                      BMI Calcultor Function               /////////////////////////////////////
let height;
let weight;
var selWeight;
var selHeight;
function calculateBMI() {
  height = document.querySelector(".height").value;
  weight = document.querySelector(".weight").value;
  unitCheck();
  console.log(`${height} ${weight}`);

  const BMI = weight / (height * height);
  const bmi = BMI.toFixed(2);
  if (bmi > 0) {
    bmiImages(bmi);
    document.querySelector(
      ".result"
    ).innerHTML = `<p>Your BMI <p class='bmi'>${bmi}</p><p/>`;
  }
  console.log(bmi);
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
    ).innerHTML = `<img src="images/overweight.png" alt="Obese">
        <p>Obese</p>`;
    document.querySelector(".imageTag").classList.add("animation");
  } else if (25 <= bmi && bmi < 30) {
    document.querySelector(
      ".imageTag"
    ).innerHTML = `<img src="images/fat.png" alt="Overweight">
        <p>Overweight</p>`;
  } else if (18.5 <= bmi && bmi < 25) {
    document.querySelector(
      ".imageTag"
    ).innerHTML = `<img src="images/fit.png" alt="Normal">
        <p>Normal (Healthy)</p>`;
  } else if (16 <= bmi && bmi < 18.5) {
    document.querySelector(
      ".imageTag"
    ).innerHTML = `<img src="images/thin.png" alt="Underweight">
        <p>Underweight</p>`;
  } //if(bmi<16)
  else {
    document.querySelector(
      ".imageTag"
    ).innerHTML = `<img src="images/skinny.png" alt="Severely Underweight">
        <p>Severely Underweight</p>`;
  }
}
function unitCheck() {
  if (selWeight === "lbs") {
    weight = weight * 0.453592;
    console.log(true);
  }
  if (selHeight === "feet") {
    height = height * 0.3048;
    console.log(true);
  }
}
$(".weightOption").change(function () {
  optWeight = $(this).find(":selected");
  selWeight = optWeight.text();
  log(true);
  //console.log(selWeight);
  // alert(og);

  $(this).find(":selected").text(selWeight);
});

$(".heightOption").change(function () {
  optHeight = $(this).find(":selected");
  selHeight = optHeight.text();
  //console.log(selHeight);
  log(true);
  // alert(og);

  $(this).find(":selected").text(selHeight);
});
/*
$(".weightOption").change(function (weight) {
  var optWeight = $(this).find(":selected");
  const selWeight = optWeight.text();
  //console.log(selWeight);
  // alert(og);
  if (selWeight === "lbs") {
    weight++;
    console.log(true);
  }

  $(this).find(":selected").text(selWeight);
});

$(".heightOption").change(function (height) {
  var optHeight = $(this).find(":selected");
  var selHeight = optHeight.text();
  //console.log(selHeight);
  // alert(og);

  $(this).find(":selected").text(selHeight);
  if (selHeight === "feet") {
    height++;
    console.log(true);
  }
}); */
const log = console.log;
