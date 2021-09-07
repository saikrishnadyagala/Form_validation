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

//event Listeners
form.addEventListener('submit',(e) =>{
  e.preventDefault();
  if(username.value === '')
  {
    showError(username,'User name is required');
  }
  else 
  {
    showSucess(username);
  }
  if(email.value === '')
  {
  showError(email,'Email is required')
  }
  else{
showSucess(email);
  }
  if(password.value === '')
  {
showError(password,'password is required');
  }
  else{
showSucess(password);
  }
  if(confirmPassword.value ==='')
  {
showError(confirmPassword,'confirm password is required');
  }
  else{
  
  showSucess(confirmPassword);
  }

});