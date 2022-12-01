import { useState } from 'react';
import logo from './assets/melodium-logo.png';
import spotify from './assets/spotify-logo.png'
import Features from './functions/Features'
import Recomendacao from './functions/Recomendacao';
import {Link, useParams } from "react-router-dom";

const Resultado = () => {
    const [song, setSong] = useState([])
    var recomendacao= []
    let { id } = useParams();

    var get_features = async function (){
        // chama a função features que através do id da música passado como parametro
        // pela URL, e pega os aspectos musicais da música selecionada pelo usuário previamente.
        const response = await Features(id);
        setSong(response)
    }

    var recomendar = async function () { 
        // após o usuário apertar o botão de recomendação, são criadas diversas tags html como
        // childs em JS, e, são colocadas em cascatas através de nodes usando JSX
        var bla = Recomendacao(song)
        recomendacao = await Features(bla.id)
        console.log(recomendacao)

        var musicaRecomendada = document.createElement('div')
        musicaRecomendada.className = 'musica-recomendada'

        var selecao = document.createElement('h3')
        selecao.className = 'selecao'
        var texto = document.createTextNode('A música que te recomendamos da Taylor é:')
        selecao.appendChild(texto)
        musicaRecomendada.appendChild(selecao)
        
        var nome = document.createElement('h1')
        nome.className = 'songNome'
        var textoNome = document.createTextNode(recomendacao.nome)
        nome.appendChild(textoNome)
        musicaRecomendada.appendChild(nome);
        
        var imagem = document.createElement('img')
        imagem.className = 'songImagem'
        imagem.src = recomendacao.imagem
        musicaRecomendada.appendChild(imagem)

        var artista = document.createElement('h3')
        artista.className = 'songArtista'
        var textoArtista = document.createTextNode(recomendacao.artista)
        artista.appendChild(textoArtista)
        musicaRecomendada.appendChild(artista)

        var album = document.createElement('h3')
        album.className = 'songAlbum'
        var textoAlbum = document.createTextNode(recomendacao.album)
        album.appendChild(textoAlbum)
        musicaRecomendada.appendChild(album)


        var obj = ["Tom: " + recomendacao.tomExtenso, "BPM: " + recomendacao.bpm, "Acústico: " + recomendacao.acustico + "%",
        "Emoção: " + recomendacao.valencia + "%", "Energia: " + recomendacao.energia + "%", "Volume: " + recomendacao.volume + " dB"]
        for (let i = 0; i < 3; i++) {

            var featuresEsq = document.createElement('h2')
            featuresEsq.className = 'songFeatures'
            var textoEsq = document.createTextNode(obj[i])
            featuresEsq.appendChild(textoEsq);

            musicaRecomendada.appendChild(featuresEsq)
        }
        for (let i = 3; i < 6; i++) {

            var featuresDir = document.createElement('h2')
            featuresDir.className = 'songFeaturesDireita'
            var textoDir = document.createTextNode(obj[i])
            featuresDir.appendChild(textoDir);

            musicaRecomendada.appendChild(featuresDir)
        }

        var link = document.createElement('a')
        link.href = 'https://open.spotify.com/track/' + recomendacao.id
        link.target = '_blank'
        var icon = document.createElement('img')
        icon.className = 'logo-spotify-recomendacao'
        icon.src = spotify;
        icon.alt = 'spotify'
        link.appendChild(icon)

        musicaRecomendada.appendChild(link)


        document.getElementById('recomendacao').appendChild(musicaRecomendada)
    }

    return (
        <html className="App">
            <head>
                <link rel="icon" href="./assets/melodium-logo.png" />
            </head>
            <div  onLoad={get_features}>
                <div className="App-header">
                    <div id="cima">
                        <Link className='link' to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                        <h1 id="titulo"><Link className='link' to="/">MELODIUM</Link></h1>
                        <h2 id="subtitulo">Encontre suas novas músicas favoritas!</h2>
                    </div>
                    <div className="musica-escolhida">
                        <h3 className='selecao'>A música escolhida foi:</h3>
                    
                            <h1 className="songNome">{song.nome}</h1>
                            <img className='songImagem' src={song.imagem}></img>
                            <h3 className='songArtista'>{song.artista}</h3>
                            <h3 className='songAlbum'>{song.album}</h3>
                            <h2 className='songFeatures'>Tom: {song.tomExtenso}</h2>
                            <h2 className='songFeatures'>BPM: {song.bpm}</h2>
                            <h2 className='songFeatures'>Acústico: {song.acustico + "%"}</h2>
                            <h2 className='songFeaturesDireita'>Emoção: {song.valencia + "%"}</h2>
                            <h2 className='songFeaturesDireita'>Energia: {song.energia + "%"}</h2>
                            <h2 className='songFeaturesDireita'>Volume: {song.volume + " dB"}</h2>
                            <button className='recomendacao' onClick={recomendar}>Recomendação!</button>
                            <a href={'https://open.spotify.com/track/' + song.id} target='_blank' ><img src={spotify} className='logo-spotify' alt="spotify"/></a>   
                    </div>

                    <div id="recomendacao">

                    </div>

                </div>
            </div>
        </html>
        
    );
}

export default Resultado;