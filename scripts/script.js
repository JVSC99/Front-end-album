let login = document.getElementById("login")
let password = document.getElementById("password")
let buttonLogin = document.getElementById("button-login")
let body = document.getElementById("body")
let containerLogin = document.getElementById('container-login')

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
      buttonLogin.click();
    }
});

function Logar(){

    if((login.value === "user@gmail.com") && (password.value === "1234")){
        
        containerLogin.innerHTML = "<div id='load'> <div id='loading'></div></div>"; 
        setTimeout(function(){
            renderMenu();
        },10000)
        alert('logado')
    }else{
        alert("Login ou senha incorreto")
    }
}


function renderMenu(){
    containerLogin.innerHTML = ""
    body.style.backgroundImage = 'linear-gradient(gray,gray)'

}