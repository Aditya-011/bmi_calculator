function calculateBMI()
{
    const height = document.querySelector(".height").value
const weight = document.querySelector(".weight").value
console.log(`${height} ${weight}`);
    const BMI = weight/(height*height)
    const bmi = BMI.toFixed(2)
    bmiImages(bmi)
    console.log(bmi);
    document.querySelector('.result').innerHTML = `<h2>Your BMI is ${bmi} <h2/>`
    
}
//document.querySelector("button").addEventListener('click',calculateBMI)
document.addEventListener('keypress',(e)=>
{
    if(e.keyCode == 13)
    calculateBMI();
})
function bmiImages(bmi)
{
    if(bmi >= 30)
    {
        document.querySelector(".imageTag").innerHTML = `<img src="/src/images/overweight.png" alt="Obese">
        <p>Obese</p>`
    }
    else if(25 <=bmi &&bmi< 30)
    {

        document.querySelector(".imageTag").innerHTML = `<img src="/src/images/fat.png" alt="Overweight">
        <p>Overweight</p>`
    }
    else if(18.5 <=bmi && bmi< 25)
    {
        document.querySelector(".imageTag").innerHTML = `<img src="/src/images/fit.png" alt="Normal">
        <p>Normal (Healthy)</p>`
    }
    else if(16 <=bmi && bmi< 18.5)
    {
        document.querySelector(".imageTag").innerHTML = `<img src="/src/images/thin.png" alt="Underweight">
        <p>Underweight</p>`
    }
    else //if(bmi<16)
    {
        document.querySelector(".imageTag").innerHTML = `<img src="/src/images/skinny.png" alt="Severely Underweight">
        <p>Severely Underweight</p>`
    }
}
