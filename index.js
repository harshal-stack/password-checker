let isvisible = true;

function change(){
let input =document.getElementById("passbox");
let eye = document.getElementById("eye")

if (isvisible) {
    input.type == "password";
    input.setAttribute('type', 'text')
    isvisible = false;
    eye.src ="eye-open.png"

}

else{
    input.type = "text";
    isvisible = true;
    input.setAttribute('type','password')
    eye.src = "eye-close.png"

    }



}




let myInput = document.getElementById("passbox1");
    let letter = document.getElementById("lower")
    let capital = document.getElementById("upper");
    let number = document.getElementById("number");
    let length = document.getElementById("eightlen");
    let special = document.getElementById("special");
    


myInput.onkeyup=function () {
    


    let lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {  
      console.log("match")
    } else {
     console.log("not match")
    }
}
       
        
    








// function work(e) {
    
// let inputs = document.getElementsByClassName("inputfield").value;
// e.preventDefault()

// if (inputs=== input) {
//     alert("work")
// } else 
// {
//    alert("not match") 
// }


// }