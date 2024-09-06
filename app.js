function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se o campoPesquisa for uma string sem nada
    // para comparar se usa dois ==
    if(!campoPesquisa) {
    section.innerHTML = "<p>Nada Foi Encontrado. Você Não Digitou Nada!</p>"    
    return
    }

    //deixa toda pesquisa em letra minuscula 
campoPesquisa = campoPesquisa.toLowerCase()


    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
    let nome = "";
    let elemento = "";
    let tag = "";

    // Altera sobre cada dado (Pokémon) da lista de dados
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        elemento = dado.elemento.toLowerCase()
        tag = dado.tag.toLowerCase()

        // se titulo includes campoPesquisa , pesquisa somente o nome especifico
        if (nome.includes(campoPesquisa) || elemento.includes(campoPesquisa) || tag.includes(campoPesquisa)) {
            // Cria um novo elemento HTML para cada Pokémon, formatando as informações
            resultados += `<div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</a>
                <p class="descricao-meta">${dado.tag}</a>
                <p class="descricao-meta">${dado.melhoresHabilidades}</a>
                <p class="descricao-meta">${dado.elemento}</a>
                <p class="descricao-meta">${dado.linhaEvolutiva}</a>
                <p class="descricao-meta">${dado.forma}</a>
                <a href="${dado.link}" target="_blank">Pokedex.</a>
            </div>`;

        }
        
    }


    if (!resultados) {
        resultados = "<p>Nada Foi Encontrado</p>"

    }

    // Atualiza o conteúdo HTML da seção com os resultados construídos
    section.innerHTML = resultados;
}
