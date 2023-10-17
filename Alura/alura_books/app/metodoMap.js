// map() -> Invoca uma função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado
function aplicarDesconto(livros) {
    const desconto = 0.3;
    livrosComDesconto = livros.map((livro) => {
        return { ...livro, preco: livro.preco - livro.preco * desconto };
    });
    return livrosComDesconto;
}
