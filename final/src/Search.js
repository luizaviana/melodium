const fetch = require('node-fetch');

const client_id = '598085d5cea743e39800feb5ec3e5521'
const client_secret = '63212498d1ab4988b261bea8cde15ca2'

async function Search (params) {

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
