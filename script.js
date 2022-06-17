const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
const errorFirstName = document.getElementById("errorFirstName");
const errorLastName = document.getElementById("errorLastName");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");

// error  message

btn.addEventListener('click', function() {
    if(firstname.value == null || firstname.value == undefined || firstname.value == '' || firstname.value <= 0){
        errorFirstName.style.display = 'block';
        firstName.style.background = 'URL(images/icon-error.svg) right no-repeat'
    }
    else{
        errorFirstName.style.display = 'none';
      
    }
})
btn.addEventListener('click', function(){
  if(lastname.value == null || lastname.value == undefined || lastname.value == '' || firstname.value <= 0){
        errorLastName.style.display = 'block';
        lastname.style.background = 'URL(images/icon-error.svg) right no-repeat';
        // lastname.style.background-size = '30px';
    }
    else{
        errorLastName.style.display = 'none';
      
    }
})
btn.addEventListener('click', function(){
  if(email.value == null || email.value == undefined || email.value == '' || email.value <= 0){
        errorEmail.style.display = 'block';
        email.style.background = 'URL(images/icon-error.svg) right no-repeat'
    }
    else{
        errorEmail.style.display = 'none';
      
    }
})
btn.addEventListener('click', function(){
  if(password.value == null || password.value == undefined || password.value == '' || password.value <= 6){
        errorPassword.style.display = 'block';
        password.style.background = 'URL(images/icon-error.svg) right no-repeat'
    }
    else{
        errorPassword.style.display = 'none';
      
    }
})