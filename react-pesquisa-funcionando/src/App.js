import { useState, useEffect } from 'react';
import logo from './assets/melodium-logo.png';
import Search from './Search.js'
import './css/App.css';
;
var resposta = [], global = []
const App = () => {
  const [pesquisa, setPesquisa] = useState('');
  const [items, setItems] = useState([])
  
  var handleClick = async function (event) {
    const response = await Search(pesquisa);
    setItems(response);
    console.log(response)
        //console.log(global)
  }
  
  function scrape(vector) {

  }
  //  function handleClick() {
  //   let inserido = document.getElementById("pesquisa").value
  //   console.log(inserido)
  // //   console.log(pesquisa)
  // //   //var resposta = Search(pesquisa)
  // //   //console.log(resposta)
  //  }
  // useEffect(() => {
  //   const url = "https://my-json-server.typicode.com/luizaviana/melodium"
  //   fetch(url)
  //     .then(response => response.json().then(json => {
  //       console.log("Json", json)
  //       setPesquisa(json)
  //     })
  //     .catch(e => {
  //       console.log("erro", e)
  //     })
  //   )
  // }, [])
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 id="titulo">MELODIUM</h1>
        <h2>Encontre suas novas músicas favoritas!</h2>
        <p>A partir de somente uma música, encontramos similares para completar sua playlist</p>
        <input id="pesquisa" type="search" onChange={event => setPesquisa(event.target.value)} placeholder='Digite aqui sua obsessão do momento'></input>
        <button onClick={handleClick}>Pesquisar</button>
        <div id='itens'>{
          items.map(item => {
            var nome = item.nome;
            if (item.nome.length > 28)
              nome = item.nome.substring(0, 26) + "..."

             return (
                <div className="itemBD">
                  <h1 className="itemNome">{nome}</h1>
                  <img className='itemImagem' src={item.imagem}></img>
                  <h3 className='itemArtista'>{item.artista}</h3>
                </div>
              )
            })
        }</div>
      </header>
    </div> 
  );
}    
export default App;