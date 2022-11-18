const fetch = require('node-fetch');

const client_id = '598085d5cea743e39800feb5ec3e5521'
const client_secret = '63212498d1ab4988b261bea8cde15ca2'

async function Features (id) {

    const get_token = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization' : 'Basic ' + btoa(client_id + ':' + client_secret)  
        },
        body: 'grant_type=client_credentials'
    });

    const tokenJSON = await get_token.json()
    const token = tokenJSON.access_token

    // 
    
    const music_infos = await fetch(`https://api.spotify.com/v1/tracks/${id}?market=BR`, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json', 
            'Authorization' : 'Bearer ' + token
        }
    });

    const data = await music_infos.json()
    var obj = data

    var filtrado = []
    var nome = obj.name;
    if (obj.name.length > 25)
        nome = obj.name.substring(0, 25) + '...'

    filtrado.push(nome)
    filtrado.push(obj.album.artists[0].name)
    filtrado.push(obj.album.images[1].url)
    filtrado.push(obj.id)
    filtrado.push(obj.album.name)
    
    // 

    const ft = await fetch(`https://api.spotify.com/v1/audio-features/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json', 
            'Authorization' : 'Bearer ' + token
        }
    });

    const data2 = await ft.json()
    var obj2 = data2
    var tomEscrito = '';
    
    switch (obj2.key) {
        case 0: tomEscrito = "Dó"; break;
        case 1: tomEscrito = "Dó Sustenido"; break;
        case 2: tomEscrito = "Ré"; break;
        case 3: tomEscrito = "Ré Sustenido "; break;
        case 4: tomEscrito = "Mi"; break;
        case 5: tomEscrito = "Fá"; break;
        case 6: tomEscrito = "Fá Sustenido"; break;
        case 7: tomEscrito = "Sol"; break;
        case 8: tomEscrito = "Lá Bemol"; break;
        case 9: tomEscrito = "Lá"; break;
        case 10: tomEscrito = "Si Bemol"; break;
        case 11: tomEscrito = "Si"; break;
        default: tomEscrito = "ERRO !"; break;
    }

    const all = {
        nome: filtrado[0],
        artista: filtrado[1],
        imagem: filtrado[2],
        id: filtrado[3],
        album: filtrado[4],
        dancabilidade: obj2.danceability,
        energia: (obj2.energy * 100).toFixed(0),
        tom: obj2.key,
        tomExtenso: tomEscrito,
        volume: obj2.loudness.toFixed(2),
        modo: obj2.mode,
        falatoria: obj2.speechiness,
        acustico: (obj2.acousticness * 100).toFixed(0),
        instrumental: obj2.instrumentalness,
        vivacidade: obj2.liveness,
        valencia: 100 - (obj2.valence * 100).toFixed(0),
        bpm: obj2.tempo.toFixed(0)
    }

    return all;
}

export default Features;
