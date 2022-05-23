const title = document.getElementById("header-container");
title.innerText = "O Senhor dos Anéis 2";
title.style.fontSize = "50px";
title.style.backgroundColor = "blue"
title.style.color = "white";

const secondary = document.getElementById("footer-container");
secondary.innerText = "Segue texto de teste 3";
secondary.style.fontSize = "50px";
secondary.style.backgroundColor = "blue"


//const novo = document.querySelector("div");
//console.log(novo);

const novo = document.querySelectorAll("div");
console.log(novo);

const novo2 = document.querySelectorAll("h3");
console.log(novo2);

const novo3 = document.querySelector("footer");
console.log(novo3);





/*
const title = document.getElementById("page-title");
title.innerText = "O Senhor dos Anéis";
title.style.fontSize = "50px";

const subtitle = document.getElementById("subtitle");
subtitle.innerText = "Aqui vai o subtítulo do filme!!!";

const secondParagraph = document.getElementById("second-paragraph");
secondParagraph.innerText = "Aqui vai o segundo parágrafo!";


//console.log(document.getElementById("paragraph"));

const paragrafos = document.getElementsByClassName("teste-1");

for(let i = 0; i < paragrafos.length; i += 1) {
    console.log(paragrafos[i]);
}
 
paragrafos[0].style.color = "green";
paragrafos[0].style.fontSize = "40px"

paragrafos[1].style.color = "orange";

const subtitle2 = document.getElementsByTagName("h4")[0];
subtitle2.style.color = "red";
*/