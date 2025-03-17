//conteudoHTML = document.querySelector(".numeros ul").innerHTML;
//window.alert(conteudoHTML);


//novoli = document.createElement("li");
//novoli.innerHTML = "88";


//listaamodificar.appendChild(novoli);

botao = document.getElementById("bgera");
botao.addEventListener("click", afixaChave);

afixaChave();

function gerachave() {
    let novachave = [];
    while (novachave.length < 5) {
        let novonumero = Math.floor(Math.random() * 50) + 1;
        if (!novachave.includes(novonumero)) {
            novachave.push(novonumero);
        }
    }
    return novachave;
}

function afixaChave() {
    
    const listaamodificar = document.querySelector(".numeros ul");
    listaamodificar.innerHTML = "";

    chave = gerachave();
    console.log(chave);

    for (let i = 0; i < chave.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = chave[i];
        listaamodificar.appendChild(li);
    }   
}









