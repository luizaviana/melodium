import { useState, useEffect } from 'react';
import logo from './melodium-logo.png';
//import Search from './Search.js'
//import { Express } from 'express';

import './App.css';
;

const App = () => {
  const [pesquisa, setPesquisa] = useState('');
  const [scrapped, setScrapped] = useState([])
  const handleClick = event => {
    console.log(pesquisa);
    setScrapped(Search(pesquisa))
    console.log(scrapped)
  };
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
      
        {/* {
          pesquisa.map(item => {
            return (
              <div className="itemBD">
                <h1 className="itemNome">{item.nome}</h1>
                <img className='itemImagem' src={item.imagem}></img>
                <h3 className='itemArtista'>{item.artista}</h3>
              </div>
            )
          }) */
        }
      </header>
    </div> 
  );
}    
export default App;