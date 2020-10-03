const page1 = document.querySelector("#home");
const page2 = document.querySelector("#form");
const page3 = document.querySelector(".resultpage");
const startButton = document.getElementById("startButton");
const submitButton = document.querySelector(".button2");
const resetButton = document.getElementById("resetButton");
const displayName = document.querySelector(".pname");
const displayAge = document.querySelector('.pyears');


startButton.addEventListener("click",function(){
    
    
    page2.classList.remove("hidden");
    page1.classList.add("hidden");
})

submitButton.addEventListener("click",function(e){
    e.preventDefault();

   

   // console.log('hello');
    let name = document.querySelector(".input11").value;
    let age = document.querySelector(".input2").value;
    console.log(name,age);

     let ageInDays = age * 365;

    if (name == "" || age == ""){
        alert("all fields required");
        return;
    }
    else {
        displayName.textContent = `Your name is `+ name;
        ageInDays = age*365;
        displayAge.textContent = `You have lived ${ageInDays} days on earth`;
      
        
        
        //displayDays.textContent +=ageInDays;

    }

    page3.classList.remove("hidden");
    page2.classList.add("hidden");
})

resetButton.addEventListener("click", function(){

    // console.log('hello');
 document.querySelector(".input11").value = '';
 document.querySelector(".input2").value = ''; 
    
   
    page1.classList.remove("hidden");
    page3.classList.add("hidden");
});