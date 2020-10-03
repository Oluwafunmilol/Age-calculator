const page1 = document.querySelector("#home");
const page2 = document.querySelector("#form");
const page3 = document.getElementById("result");
const startButton = document.getElementById("startButton");
const submitButton = document.querySelector(".button2");
const resetButton = document.getElementById("resetButton");
const displayName = document.querySelector(".pnmae");
const displayAge = document.querySelector('.pyears');


startButton.addEventListener("click",function(){
    page2.classList.remove("hidden");
    page1.classList.add("hidden");
})

submitButton.addEventListener("click",function(e){
    e.preventDefault();

    console.log('hello');
    let name = document.querySelector(".input11").value;
    let age = document.querySelector(".input2").value;
    console.log(name,age);

     let ageInDays = age * 365;

    if (name == "" || age == ""){
        alert("all fields required");
        return;
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