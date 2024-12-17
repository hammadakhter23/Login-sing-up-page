var userNameEl = document.getElementById("username");
var emailEl = document.getElementById("Email");
var paswordEl = document.getElementById("pasword");
var errorEl = document.getElementById("error")

function errorSec(){
    setTimeout(function(){
        errorEl.innerHTML = "";
    }, 3000)
}

function clearAll (){
    userNameEl.value = "";
    emailEl.value = "";
    paswordEl.value = "";
}

function submitsec() {
  userData = {
    userNameData : userNameEl.value,
    emailData : emailEl.value,
    paswordData : paswordEl.value

  }
  if (userData.userNameData == "") {
    errorEl.innerHTML = "Invalid UserName !"
    errorSec()
  }

 else if (userData.emailData == "") {
        errorEl.innerHTML = "Invalid Email !"
        errorSec();
  }
  else if (userData.paswordData < 6 ) {
    errorEl.innerHTML = "You must use  6 character"
    errorSec()
   
  }
  else{userData 
    clearAll()
    window.location.href = "./window.html";
}
console.log(userData)

}