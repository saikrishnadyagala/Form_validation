'use strict';
//Declaring variables
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

//Functions
const showError = function(input,message){
   const formControl=input.parentElement;
   formControl.className = 'form-control error1';
   const small =formControl.querySelector('small');
   small.innerText=message;
  };
  const showSucess = function(input){
    const formControl=input.parentElement;
    formControl.className = 'form-control sucess';
   };
   const validEmail= function(input) { 
     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(input).toLowerCase());
  };

//event Listeners
form.addEventListener('submit',(e) =>{
  e.preventDefault();
//username  
  if(username.value === '')
  {
    showError(username,'User name is required');
  }
  else 
  {
    showSucess(username);
  }
//email
  if(email.value === '')
  {
  showError(email,'Email is required')
  }
  else if(!validEmail(email.value)){
    showError(email,'Enter valid email');
  }
  else{
showSucess(email);
  }
//password
  if(password.value === '')
  {
showError(password,'password is required');
  }
  else{
showSucess(password);
  }
  //confirm pasword
  if(confirmPassword.value ==='')
  {
showError(confirmPassword,'confirm password is required');
  }
  else if(password.value === confirmPassword.value){
  showSucess(confirmPassword);
  }
  else
  {
    showError(confirmPassword,'confirm password is mismatch'); 
  }

});