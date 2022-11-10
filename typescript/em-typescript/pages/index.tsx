import { NextApiRequest, NextApiResponse } from 'next'
import { search } from './api/post';


export default function Home() {

    return (
        <div className="App">
        <header className="App-header">
        <img src="./melodium-logo.png" className="App-logo" alt="logo" />
        <h1 id='titulo'>MELODIUM</h1>
        <h2>Encontre suas novas músicas favoritas!</h2>
        <p>A partir de somente uma música, encontramos similares para completar sua playlist</p>
        <input id="pesquisa" type="search" placeholder='Digite aqui sua obsessão do momento'></input>
        <button>Pesquisar</button>
        <div id="itens">
          
        </div>
        
      </header>
    </div> 
    )
}