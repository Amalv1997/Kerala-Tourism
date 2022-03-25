let fname = document.getElementById("firstName");
let sname = document.getElementById("lastName");
let email = document.getElementById("emailaddress");
let phn = document.getElementById("mobile No.");
let pass = document.getElementById("password");
let cpass = document.getElementById("confirmPassword"); 
let lname = document.getElementById("error_n");
let name2 = document.getElementById("error_n2");
let lmail = document.getElementById("error_m");
let lphn = document.getElementById("error_p");
let lpass = document.getElementById("error_pwd");
let lcpass = document.getElementById("error_cpwd");

//------------------- regex for validation-------------------//

let Nregex = /^([a-zA-Z]+)$/;
let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let Phregex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let Pregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
let PM_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,50}$/;

// -------------function--------------//

function validate(){

    if(Nregex.test(fname.value)===false){
        lname.innerHTML = "Enter a valid name";
        lname.style.color = "red";
        return false;
    }
    else if(Nregex.test(sname.value)===false){
        name2.innerHTML = "Enter a valid name";
        name2.style.color = "red";
        return false;
    }
    // -------email validation------//

    else if(regex.test(email.value)===false){
        lmail.innerHTML = "Enter a valid email";
        lmail.style.color = "red";
        return false;
    }
    // --------phone number validation-------//

    else if(Phregex.test(phn.value)===false){ 
        lphn.innerHTML = "Enter a valid Phone number";
        lphn.style.color = "red";
        return false;
    }
    // --------password validation-------//

    else if(Pregex.test(pass.value)===false){
        lpass.innerHTML = "Enter a valid Password";
        lpass.style.color = "red";
        return false;
    }
    // ---------password conformation--------//

    else if(cpass.value!=pass.value){
        lcpass.innerHTML = "Password does not match";
        lcpass.style.color = "red";
        return false;
    }
    else{
        return true;
    }
}
    
// ----------password strength indicator----------//

function pass_strength(){
    if(PM_regex.test(pass.value)===false){
        lpass.innerHTML = "Password Strength: poor";
        lpass.style.color = "red";
        return
    }
    else if(pass.value.length<8){
        lpass.innerHTML = "Password Strength: medium";
        lpass.style.color = "orange";
        return
    }
    else {
        lpass.innerHTML = "Password Strength: strong";
        lpass.style.color = "green";
        return true;
    }
}
    // --------input label reset-----------//

function display(){
    if((fname.value!="") || (sname.value!="") || (email.value!="") || (phn.value!="") || (cpass.value!="")){
    lname.innerHTML = "";
    name2.innerHTML = "";
    lmail.innerHTML = "";
    lphn.innerHTML = "";
    lcpass.innerHTML = "";
    
    return;
    }
}

