import { useState, useEffect } from 'react';
import logo from './assets/melodium-logo.png';
import Search from './Search.js'
import './css/App.css';
import {Link} from "react-router-dom";

const App = () => {
  const [pesquisa, setPesquisa] = useState('');
  const [items, setItems] = useState([])
  
  var handleClick = async function (event) {  
    const response = await Search(pesquisa);
    setItems(response);
  }
 
  return (
    <html>
      <div className="App">
        {
           document.addEventListener('keydown', (event) => {
              var botao = document.getElementById('b1')
              if (event.key == 'Enter')
                botao.click()
            })
        }
        <header className="App-header">
          <div id="cima">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 id="titulo"><Link className='link' to="/">MELODIUM</Link></h1>
            <h2 id="subtitulo">Encontre suas novas músicas favoritas!</h2>
          </div>
          <p id="p1">A partir de somente uma música, encontramos similares para completar sua playlist</p>
          <input id="pesquisa" type="search" onChange={event => setPesquisa(event.target.value)} placeholder='Digite aqui sua obsessão do momento'></input>
          <button id="b1" onClick={handleClick}>Pesquisar</button>
          <div id='itens'>{
            items.map(item => {
              var nome = item.nome;
              if (item.nome.length > 28)
                nome = item.nome.substring(0, 26) + "..."

              return (
                <Link className='link' to={"/result/" + item.id}>
                  <div className="itemBD">
                    <h1 className="itemNome">{nome}</h1>
                    <img className='itemImagem' src={item.imagem}></img>
                    <h3 className='itemArtista'>{item.artista}</h3>
                  </div>
                </Link>
              )
              
              })
          }</div>
        </header>
      </div>
      <script>
         
      </script>
    </html>
    
  );
}    
export default App;