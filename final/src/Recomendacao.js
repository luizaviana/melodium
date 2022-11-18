
const Recomendacao = (musica) => {
const data = require('./db.json');
//console.log(musica);
var vetor = []
var grauDeRecomendacao = 0;
for (let i = 0; i < data.posts.length; i++) {
    const analise = data.posts[i].features
    const recomendacao = data.posts[i]
    var recomendado = []
    if (analise.tom == musica.tom) {
        console.log(analise)
        if (musica.valencia+5 > 100-(analise.valencia*100) && musica.valencia-5 < 100-(analise.valencia*100)
        && musica.energia+5 > analise.energia*100 && musica.energia-5 < analise.energia*100) {
            recomendado = {obj: recomendacao, grau: 10}
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
    vetor.sort((a, b) => {return (b.grau - a.grau)})
}
    console.log(vetor)
    return (vetor[0].obj)
}

export default Recomendacao;