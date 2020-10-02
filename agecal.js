const page1 = document.getElementById("home");
const page2 = document.getElementById("form");
const page3 = document.getElementById("result");
const startButton = document.getElementById("startButton");
const submitButton = document.getElementById("submitButton");
const resetButton = document.getElementById("resetButton");
const displayName = document.getElementsByClassName("pnmae");
const displayName = document.getElementsByClassName("pyears");


startButton.addEventListener("click",function(){
    page2.classList.remove("hidden");
    page1.classList.add("hidden");
})

submitButton.addEventListener("click",function(){

    let name = document.getElementById("yourName").value;
    let age = document.getElementById("yourName").value
    let ageInDays = age * 365;

    if (name == "" || age == ""){
        alert("all fields required");
    }
    else {
        displayName.textContent += name;
        ageInDays = age*365;
        displayAge.textContent += age;
        displayDays.textContent +=ageInDays;

    }

    page3.classList.remove("hidden");
    page2.classList.add("hidden");
})

resetButton.addEventListener("click", function(){
    page1.classList.remove("hidden");
    page3.classList.add("hidden");
});