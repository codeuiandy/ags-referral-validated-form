let submitBtn = document.getElementById("getStartedBtn")
let loader = document.getElementById("waiter")
let removeEmailErrorMessags = document.getElementById("email")
let removePassswordErrorMessags = document.getElementById("password")
let removeConfirmPassswordErrorMessags = document.getElementById("ConfirmPassword")
let removeFirstNameErrorMessags = document.getElementById("firstName")
 
removeEmailErrorMessags.addEventListener("click",(e)=>removeEmailErrorMessagF(e))
const removeEmailErrorMessagF=()=>{
  document.getElementById("emailError").innerHTML = "";
}

removePassswordErrorMessags.addEventListener("click",(e)=>removePassswordErrorMessagsF(e))
const removePassswordErrorMessagsF=()=>{
  document.getElementById("passwordError").innerHTML = "";
}

removeConfirmPassswordErrorMessags.addEventListener("click",(e)=>removeConfirmPassswordErrorMessagsf(e))
const removeConfirmPassswordErrorMessagsf=()=>{
  document.getElementById("confirmPasswordError").innerHTML = "";
}

removeFirstNameErrorMessags.addEventListener("click",(e)=>removeFirstNameErrorMessagsf(e))
const removeFirstNameErrorMessagsf=()=>{
  document.getElementById("firstNameError").innerHTML = "";
}

submitBtn.addEventListener("click",(e)=>SubmitData(e))

const ValidateEmail = (email)=> {
 
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  {
    return (true)
  } 
  
  {

  document.getElementById("emailError").innerHTML = "Invalid Email Address";
   console.log(emailError.value)
    return (false)
   }

}

const ConfirmPassword=()=>{
let password = document.getElementById("password")
let confirmPassword = document.getElementById("ConfirmPassword")
let passwordError = document.getElementById("passwordError")
let confirmPasswordError = document.getElementById("confirmPasswordError")
if (password.value === "") {
  passwordError.innerHTML= "Password is required"
 return (false)
}

if (password.value !== confirmPassword.value) {
  confirmPasswordError.innerHTML="Password must match confirm password"
return(false)

}

}

const validateFirstName = ()=>{
  let checkValue = document.getElementById("firstName")
  if (checkValue.value === "") {
    document.getElementById("firstNameError").innerHTML = "First name is required";
    return(false)
  }
}

        const SubmitData=(e)=> {
                    e.preventDefault()
                    let emailValue = document.getElementById("email")
                    emailValue.value
                    let checkEmail = ValidateEmail(emailValue.value)
                    
                    if (checkEmail === false ) {
                    return
                    }
                    let checkPassword = ConfirmPassword()
                    if (checkPassword === false ) {
                      return
                    }

                    let CheckvalidateFirstName = validateFirstName()
                    if (CheckvalidateFirstName === false ) {
                      return
                    }
                    console.log(emailValue.value)
                    submitBtn.style.display="none"
                    loader.style.display="block"
                    setTimeout(()=> window.location.href="download-ags-app.html",1000)


                  }