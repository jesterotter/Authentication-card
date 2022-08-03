 const change = document.getElementById("switch").addEventListener("click",changeAct);
 const toggle = document.getElementById("switch");
 const eyeC =  document.getElementById("eye").addEventListener("click",eyeChange); 
let option = document.getElementById("option");
const eye = document.getElementById("eye");
const pwd = document.getElementById("pwd");


function changeAct(){
    toggle.className = "fas fa-toggle-on"
    let content = option.innerHTML;
    if (content === "Stay signed in"){
    const old = option.childNodes[0];
    option.removeChild(old);
    const paragraph = document.createElement("p");
    const text = document.createTextNode("Signed in!");
    paragraph.appendChild(text);
    option.appendChild(paragraph)
    } else content === "Stay signed in";
   
}

function eyeChange(){
    if (eye.className = "fas fa-eye"){
    const currentType = pwd.getAttribute("type");
    pwd.setAttribute("type", currentType === 'password' ? 'text' : 'password')
    }else eye.className = "fa-solid fa-eye-slash"
}