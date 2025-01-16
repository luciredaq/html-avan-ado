let botaoMenu = document.getElementById("button-toggle");
let aside = document.getElementsByTagName("aside")[0];

function eventoClick(){
    alert("oi")
}

botaoMenu.addEventListener("click", () => {
    aside.classList.toggle("collapsed");
});