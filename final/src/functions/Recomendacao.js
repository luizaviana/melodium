const Recomendacao = (musica) => {

    // Acessa o banco de dados local que criamos com opções de músicas para serem recomendadas
    const data = require('../bds/db.json');
    var vetor = []

    for (let i = 0; i < data.posts.length; i++) {
        // percorre todos os objetos dentro do BD
        const analise = data.posts[i].features
        const recomendacao = data.posts[i]
        var recomendado = []
        // e vai comparando aspectos, primeiramente o tom
        if (analise.tom == musica.tom) {
            console.log(analise)
            if (musica.valencia+5 > 100-(analise.valencia*100) && musica.valencia-5 < 100-(analise.valencia*100)
            && musica.energia+5 > analise.energia*100 && musica.energia-5 < analise.energia*100) {
                recomendado = {obj: recomendacao, grau: 10}
                // de acordo com o nível da recomendação, é atribuído um grau de compatibilidade musical
                // com a música do bd e a música selecionada pelo usuário
                console.log(recomendado)
                vetor.push(recomendado)
            }
            else if (musica.bpm+5 > analise.bpm && musica.bpm-5 < analise.bpm
            && musica.acustico+5 > analise.acustico*100 && musica.acustico-5 < analise.acustico*100) {
                recomendado = {obj: recomendacao, grau: 9}
                console.log(recomendado)
                vetor.push(recomendado)
            }
            else if (musica.bpm+5 > analise.bpm && musica.bpm-5 < analise.bpm
                && musica.energia+5 > analise.energia*100 && musica.energia-5 < analise.energia*100) {
                    recomendado = {obj: recomendacao, grau: 8}
                    console.log(recomendado)
                    vetor.push(recomendado)
                }
            else if (musica.energia+5 > analise.energia*100 && musica.energia-5 < analise.energia*100
                && musica.acustico+5 > analise.acustico*100 && musica.acustico-5 < analise.acustico*100) {
                    recomendado = {obj: recomendacao, grau: 7}
                    console.log(recomendado)
                    vetor.push(recomendado)
                }
            else if (musica.bpm+5 > analise.bpm && musica.bpm-5 < analise.bpm
                && musica.valencia+5 > 100-(analise.valencia*100) && musica.valencia-5 < 100-(analise.valencia*100)) {
                    recomendado = {obj: recomendacao, grau: 6}
                    console.log(recomendado)
                    vetor.push(recomendado)
                }
            else if (musica.valencia+5 > 100-(analise.valencia*100) && musica.valencia-5 < 100-(analise.valencia*100)
            &&  musica.acustico+5 > analise.acustico*100 && musica.acustico-5 < analise.acustico*100) {
                recomendado = {obj: recomendacao, grau: 5}
                console.log(recomendado)
                vetor.push(recomendado)
            }
            else if (musica.bpm+5 > analise.bpm && musica.bpm-5 < analise.bpm
                && musica.volume+5 > analise.volume && musica.volume-5 < analise.volume) {
                    recomendado = {obj: recomendacao, grau: 4}
                    console.log(recomendado)
                    vetor.push(recomendado)
                }
            else if (musica.bpm+5 > analise.bpm && musica.bpm-5 < analise.bpm) {
                recomendado = {obj: recomendacao, grau: 3}
                console.log(recomendado)
                vetor.push(recomendado)
            }
            else if (musica.valencia+5 > 100-(analise.valencia*100) && musica.valencia-5 < 100-(analise.valencia*100)) {
                recomendado = {obj: recomendacao, grau: 2}
                console.log(recomendado)
                vetor.push(recomendado)
            }
            else if (musica.acustico+5 > analise.acustico*100 && musica.acustico-5 < analise.acustico*100) {
                recomendado = {obj: recomendacao, grau: 1}
                console.log(recomendado)
                vetor.push(recomendado)
            }
            else if (musica.energia+5 > analise.energia*100 && musica.energia-5 < analise.energia*100) {
                recomendado = {obj: recomendacao, grau: 2}
                console.log(recomendado)
                vetor.push(recomendado)
            }
            else if (musica.volume+5 > analise.volume && musica.volume-5 < analise.volume){
                recomendado = {obj: recomendacao, grau: 1}
                console.log(recomendado)
                vetor.push(recomendado)
            }
        }
        // depois nós ordenamos o vetor de maneira decrescente de acordo com o grau atribuído
        vetor.sort((a, b) => {return (b.grau - a.grau)})
    }

    console.log(vetor)
    // e retornamos o objeto com o maior grau de compatibilidade
    return (vetor[0].obj)
}

export default Recomendacao;