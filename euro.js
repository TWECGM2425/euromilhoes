botao = document.getElementById("bgera");
botao.addEventListener("click", novachave);


function novachave() {
    let chave = fazchave();
    afixaChave(chave);
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


function afixaChave(chave) {
    
    const listaamodificarnum = document.querySelector(".numeros ul");
    listaamodificarnum.innerHTML = "";

    for (let i = 0; i < chave.numeros.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = chave.numeros[i];
        listaamodificarnum.appendChild(li);
    }   
    
    const listaamodificarestrelas = document.querySelector(".estrelas ul");
    listaamodificarestrelas.innerHTML = "";

    for (let i = 0; i < chave.estrelas.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = chave.estrelas[i];
        listaamodificarestrelas.appendChild(li);
    }  

}









