var email = document.getElementById("emailAddress");
var pssd = document.getElementById("password");
let msg1 = document.getElementById("msg1");
let msg2 = document.getElementById("msg2");

let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regexpp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;



function validate (){

    if (email.value.trim()==""){
        msg1.innerHTML= "Enter your Email";
        msg1.style.color = "red";
        email.style.border = "2px solid red";
        return false;

    }
    else if(pssd.value.trim()==""){
        msg2.innerHTML = "Enter your Password";
        msg2.style.color = "red";
        pssd.style.border = "2px solid red";
        return false;

    }
    else if(regexp.test(email.value)=== false){
        email.style.border = "2px solid red";
        msg1.innerHTML= "Email Invalid";
        msg1.style.color = "red";
        return false;
    }
    else if (pssd.value.length<8){
        msg2.innerHTML = "Password is too short";
        msg2.style.color = "red";
        pssd.style.border = "2px solid red";
        return false;    
    }
    else if(regexpp.test(pssd.value)=== false){
        pssd.style.border = "2px solid red";
        msg2.innerHTML= "Password Invalid";
        msg2.style.color = "red";
        alert("Password Should Contain at least One Uppercase,Lowercase,Symbol and Number")
        return false; 
    }
    else{
        email.style.border = "2px solid green";
        msg1.innerHTML= "Valid";
        msg1.style.color = "green";
        pssd.style.border = "2px solid green";
        msg2.innerHTML = "Valid";
        msg2.style.color = "green";
        return true;
    }
}
    
