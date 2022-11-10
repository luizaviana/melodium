const fetch = require('node-fetch');


const client_id = '598085d5cea743e39800feb5ec3e5521'
const client_secret = '023fea7dee9744c8ac5d5a17a7627c87'

async function pesquisa (params) {

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
    obj = data.tracks.items;
    
    //console.log(obj);

    return obj;
}

async function teste() {
    const obj = await pesquisa('folklore')

    console.log(obj[0].album.artists[0].name)
    
    var fora = [];
    for(var i = 0; i < 4; i++)
    {
        var dentro = []
        dentro.push(obj[i].name)
        dentro.push(obj[i].album.artists[0].name)
        dentro.push(obj[i].album.images[1].url)
        dentro.push(obj[i].id)
        
        fora.push(dentro)
    }

    console.log(fora)

}

teste()

module.exports = teste();