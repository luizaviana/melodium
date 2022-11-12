var musica = {
        nome: "King Of My Heart",
        artista: "Taylor Swift",
        imagem: "https://i.scdn.co/image/ab67616d00001e02da5d5aeeabacacc1263c0f4b",
        id: "7HuBDWi18s4aJM8UFnNheH",
        features: {
            dancabilidade: 0.675,
            energia: 0.703,
            tom: 0,
            volume: -7.902,
            modo: 1,
            falatoria: 0.0382,
            acustico: 0.00882,
            instrumental: 0.00000221,
            vivacidade: 0.0391,
            valencia: 0.314,
            bpm: 110.01
        
    }
    }


const Recomendacao = () => {
    const data = require('./db.json');
    //console.log(data);
    var vetor = []
    for (let i = 0; i < data.posts.length; i++) {
        if (data.posts[i].features.tom == musica.features.tom) {
            console.log(data.posts[i].features.tom)
            console.log(data.posts[i])
            if (musica.features.bpm+10 > data.posts[i].features.bpm && musica.features.bpm-10 < data.posts[i].features.bpm) {
                vetor.push(data.post[i])
            }
            if (musica.features.energia+0.4 > data.posts[i].features.energia && musica.features.energia-0.4 < data.posts[i].features.energia) {
                vetor.push(data.post[i])
            }
        }
    }
    console.log(vetor)
}

export default Recomendacao;