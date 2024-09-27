var nameError=document.getElementById("name-error");
var numError=document.getElementById("num-error");
var emailError=document.getElementById("email-error");
var messageError=document.getElementById("message-error");
var submitError=document.getElementById("submit-error");

function validateName(){
    var name=document.getElementById("contact-name").value;
    if(name.length==0){
     nameError.innerHTML="Name is required"
     return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))      
    {
     nameError.innerHTML="Name is required"
        return false;
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateNumber(){
    var number=document.getElementById("phone").value;
    if(number.length==0){
        numError.innerHTML="Phone is required";
        return false;
    }
    if(!number.length==10){
        numError.innerHTML="Phone is required";
        return false;
    }
    if(!number.match(/^[0-9]{10}$/)){
        numError.innerHTML="Phone is required";
        return false;
    }
numError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
return true;
    
}
function validateEmail(){
var email=document.getElementById("email").value;
if(email.length==0){
    emailError.innerHTML="Email is required";
    return false;
}
if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML="Email invalid";
    return false;
}
emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
return true;
}
function validateMessage(){
    var message=document.getElementById("message").value;
    var required=30;
    var left=required-message.length;
    if(left>0){
        messageError.innerHTML=left+" more characters required";
        return false;
    }

     messageError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
    }

function validateForm(){
    event.preventDefault();
    if(!validateName() ||!validateEmail() || !validateNumber() || !validateMessage() ){
        submitError.style.display="block";
        submitError.innerHTML="Please fix the error to submit";
        setTimeout(()=>{
            submitError.style.display="none";
        },3000);
        return false;
    }
}