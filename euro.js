botao = document.getElementById("bgera");
botao.addEventListener("click", novachave);


function novachave() {

    let chavediv = document.createElement("div");
    chavediv.classList.add("chave");

    let numerosdiv = document.createElement("div");
    numerosdiv.classList.add("numeros");

    let numerosul = document.createElement("ul");

    let estrelasdiv = document.createElement("div");
    estrelasdiv.classList.add("estrelas");

    let estrelasul = document.createElement("ul");

    numerosdiv.appendChild(numerosul);
    estrelasdiv.appendChild(estrelasul);
    chavediv.appendChild(numerosdiv);
    chavediv.appendChild(estrelasdiv);

    // console.log(chavediv);

    let chave = fazchave();
    afixaChave(chave, numerosul, estrelasul);

    let divchaves = document.querySelector("div.chaves");
    divchaves.appendChild(chavediv);

}

function fazchave() {
    osnumeros = gerachave(5, 50);
    asestrelas = gerachave(2, 12)
    novachave = {
        numeros: osnumeros,
        estrelas : asestrelas
    }
    return novachave;
}

function gerachave(k,max) {
    let novachave = [];
    while (novachave.length < k) {
        let novonumero = Math.floor(Math.random() * max) + 1;
        if (!novachave.includes(novonumero)) {
            novachave.push(novonumero);
        }
    }
    return novachave;
}


function afixaChave(chave, nul, eul) {
    
    //const listaamodificarnum = document.querySelector(".numeros ul");
    const listaamodificarnum = nul;
    listaamodificarnum.innerHTML = "";

    for (let i = 0; i < chave.numeros.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = chave.numeros[i];
        listaamodificarnum.appendChild(li);
    }   
    
    //const listaamodificarestrelas = document.querySelector(".estrelas ul");
    const listaamodificarestrelas = eul;
    listaamodificarestrelas.innerHTML = "";

    for (let i = 0; i < chave.estrelas.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = chave.estrelas[i];
        listaamodificarestrelas.appendChild(li);
    }  

}









