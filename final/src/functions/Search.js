const fetch = require('node-fetch');

// credenciais disponibilizadas pelo Spotify for developers para acessar a api
const client_id = '598085d5cea743e39800feb5ec3e5521'
const client_secret = '63212498d1ab4988b261bea8cde15ca2'

async function Search (params) {

    // Método para pegar o token de acesso da  API Spotify
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
    
    // Usa o método get search da Spotify API a partir do parametro passado e do token
    const result = await fetch(`https://api.spotify.com/v1/search?type=track&q=${params}&market=BR&limit=4`, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json', 
            'Authorization' : 'Bearer ' + token
        }
    });

    const data = await result.json();
    var obj = []
    obj = data.tracks.items;
    
    // Pega apenas o id, nome, imagem e artista dos itens retornados
    var fora = [];
    for(var i = 0; i < 4; i++)
    {
        var dentro = {
          id: obj[i].id,
          nome: obj[i].name,
          imagem: obj[i].album.images[1].url,
          artista: obj[i].album.artists[0].name
        }
        
        fora.push(dentro)
    }

    return fora;
}

export default Search;
